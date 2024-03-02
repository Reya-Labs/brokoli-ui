import { LinearGradient } from '@visx/gradient';
import type { ScaleConfig } from '@visx/scale';
import {
  Axis,
  type AxisScale,
  DataProvider,
  EventEmitterProvider,
  GlyphSeries,
  Grid,
  LineSeries,
  type Margin,
  XYChart,
} from '@visx/xychart';
import { RenderTooltipParams } from '@visx/xychart/lib/components/Tooltip';
import React, { useEffect, useMemo, useState } from 'react';

import { useResponsiveQuery } from '../../foundation/Media';
import { allTimeUnits, clamp, formatAbsoluteTime, lerp, map, objectEntries } from './helpers';
import { Container, ParentSize, YAxisBackground } from './TimeSeriesChart.styled';
import { useAnimationFrame } from './useAnimationFrame';
import { type Threshold, XYChartThreshold } from './XYChartThreshold';
import { XYChartTooltipWithBounds } from './XYChartTooltipWithBounds';

type LineSeriesProps<Datum extends {}> = Parameters<
  typeof LineSeries<AxisScale, AxisScale, Datum>
>[0];

type GlyphSeriesProps<Datum extends {} = {}> = Parameters<
  typeof GlyphSeries<AxisScale, AxisScale, Datum>
>[0];

type ThresholdProps<Datum extends {} = {}> = Parameters<typeof Threshold<Datum>>[0];

type ElementProps<Datum extends {}> = {
  yAxisScaleType?: ScaleConfig['type'];
  data: Datum[];
  series: (Pick<
    LineSeriesProps<Datum>,
    | 'dataKey'
    // | 'xAccessor'
    // | 'yAccessor'
    | 'colorAccessor'
    // | 'curve'
    | 'onPointerMove'
    | 'onPointerOut'
  > &
    Pick<ThresholdProps<Datum>, 'curve'> & {
      colorAccessor: GlyphSeriesProps<Datum>['colorAccessor'];
      xAccessor: (_: Datum) => number;
      yAccessor: (_: Datum) => number;
      getCurve?: (_: { zoom: number; zoomDomain: number }) => ThresholdProps<Datum>['curve']; // LineSeriesProps<Datum>['curve'];
      glyphSize?: GlyphSeriesProps<Datum>['size'];
      getGlyphSize?: (_: { datum: Datum; zoom: number }) => number;
      threshold?: Pick<ThresholdProps<Datum>, 'aboveAreaProps' | 'belowAreaProps'> & {
        yAccessor: LineSeriesProps<Datum>['yAccessor'];
      };
    })[];
  tickFormatX?: (x: number, _: { zoom: number; zoomDomain: number; numTicks: number }) => string;
  tickFormatY?: (y: number, _: { zoom: number; zoomDomain: number; numTicks: number }) => string;
  renderXAxisLabel?: (_: RenderTooltipParams<Datum>) => React.ReactNode;
  renderYAxisLabel?: (_: RenderTooltipParams<Datum>) => React.ReactNode;
  renderTooltip?: (_: RenderTooltipParams<Datum>) => React.ReactNode;
  slotEmpty: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

type StyleProps = {
  margin?: Margin;
  padding?: Margin;
  defaultZoomDomain?: number;
  minZoomDomain: number;
  numGridLines?: number;
  withGridRows?: boolean;
  withGridColumns?: boolean;
  tickSpacingX?: number;
  tickSpacingY?: number;
};

export const TimeSeriesChart = <Datum extends {}>({
  yAxisScaleType = 'linear',
  data,
  series,
  tickFormatX = (timestamp, { zoomDomain, numTicks }) =>
    formatAbsoluteTime(timestamp, {
      locale: window.navigator.language,
      resolutionUnit:
        objectEntries(allTimeUnits)
          .sort((a, b) => a[1] - b[1])
          .find(([, milliseconds]) => zoomDomain <= milliseconds)?.[0] ?? 'year',
    }),
  tickFormatY = (y) => String(y),
  renderXAxisLabel,
  renderYAxisLabel,
  renderTooltip,
  slotEmpty,
  children,
  className,
  margin,
  padding,
  defaultZoomDomain,
  minZoomDomain = 0,
  numGridLines,
  withGridRows = true,
  withGridColumns = false,
  tickSpacingX = 150,
  tickSpacingY = 50,
}: ElementProps<Datum> & StyleProps) => {
  // Context
  const { isMobileDeviceAndDown: isMobile } = useResponsiveQuery();

  // Chart data
  const { xAccessor, yAccessor } = series[0];

  const earliestDatum = data?.[0];
  const latestDatum = data?.[data.length - 1];

  // Chart state
  const [zoomDomain, setZoomDomain] = useState<number | undefined>(
    defaultZoomDomain ?? xAccessor(latestDatum) - xAccessor(earliestDatum),
  );

  const [zoomDomainAnimateTo, setZoomDomainAnimateTo] = useState<number | undefined>();

  useEffect(() => {
    if (defaultZoomDomain && defaultZoomDomain !== zoomDomain) {
      setZoomDomainAnimateTo(defaultZoomDomain);
    }
  }, [defaultZoomDomain]);

  useAnimationFrame(
    (elapsedMilliseconds) => {
      if (zoomDomainAnimateTo) {
        setZoomDomain(
          (zD) => zD && zD * (zoomDomainAnimateTo / zD) ** (elapsedMilliseconds * 0.0166),
        );
      }
    },
    [zoomDomainAnimateTo],
  );

  // Computations
  const { zoom, domain, range, visibleData } = useMemo(() => {
    if (!zoomDomain) return { domain: [0, 0], range: [0, 0], zoom: 0 };

    const zoomComputed = zoomDomain / minZoomDomain;

    const domainComputed = [
      clamp(xAccessor(latestDatum) - zoomDomain, xAccessor(earliestDatum), xAccessor(latestDatum)),
      xAccessor(latestDatum),
    ] as const;

    const visibleDataComputed = data.filter(
      (datum) => xAccessor(datum) >= domainComputed[0] && xAccessor(datum) <= domainComputed[1],
    );

    const rangeComputed = visibleDataComputed
      .filter(
        (datum) => xAccessor(datum) >= domainComputed[0] && xAccessor(datum) <= domainComputed[1],
      )
      .map((datum) => yAccessor(datum))
      .reduce((r, y) => [Math.min(r[0], y), Math.max(r[1], y)] as const, [
        Infinity,
        -Infinity,
      ] as const);

    return {
      domain: domainComputed,
      range: rangeComputed,
      visibleData: visibleDataComputed,
      zoom: zoomComputed,
    };
  }, [data, zoomDomain, minZoomDomain]);

  // Events
  const onWheel = ({ deltaX, deltaY }: React.WheelEvent) => {
    setZoomDomain(
      clamp(
        Math.max(
          1e-320,
          Math.min(Number.MAX_SAFE_INTEGER, (zoomDomain || 0) * Math.exp(deltaY / 1000)),
        ),
        minZoomDomain,
        xAccessor(latestDatum) - xAccessor(earliestDatum),
      ),
    );

    setZoomDomainAnimateTo(undefined);

    // TODO: scroll horizontally to pan
  };

  return (
    <Container className={className} onWheel={onWheel}>
      {data.length && zoomDomain ? (
        <DataProvider
          xScale={{
            // 'linear'
            clamp: false,
            domain: [
              lerp(0 - (padding?.left ?? 0), domain[0], domain[1]),
              lerp(1 + (padding?.right ?? 0), domain[0], domain[1]),
            ],
            nice: false,
            type: 'time',
            zero: false,
          }}
          yScale={{
            clamp: true,
            domain: [
              lerp(0 - (padding?.bottom ?? 0.05), range[0], range[1]),
              lerp(1 + (padding?.top ?? 0.05), range[0], range[1]),
            ],
            nice: true,
            type: yAxisScaleType,
            zero: false,
          }}
        >
          <EventEmitterProvider>
            <ParentSize>
              {({ width, height }: { width: number; height: number }) => {
                const numTicksX =
                  (width - (margin?.left ?? 0) - (margin?.right ?? 0)) / tickSpacingX;
                const numTicksY =
                  (height - (margin?.top ?? 0) - (margin?.bottom ?? 0)) / tickSpacingY;

                return (
                  <XYChart height={height} margin={margin} width={width}>
                    <Grid
                      columns={withGridColumns}
                      lineStyle={{
                        stroke: 'var(--brokoli-ui-white950)',
                        strokeDasharray: '4',
                        strokeWidth: 1,
                      }}
                      numTicks={numGridLines !== undefined ? numGridLines : numTicksY}
                      rows={withGridRows}
                    />

                    {series.map((serie) => (
                      <React.Fragment key={serie.dataKey}>
                        {serie.threshold && (
                          <>
                            <XYChartThreshold<Datum>
                              aboveAreaProps={{
                                fill: 'url(#XYChartThresholdAbove)',
                                fillOpacity: serie.threshold.aboveAreaProps?.fillOpacity,
                                stroke: serie.threshold.aboveAreaProps?.stroke,
                                strokeWidth: serie.threshold.aboveAreaProps?.strokeWidth,
                              }}
                              belowAreaProps={{
                                fill: 'url(#XYChartThresholdBelow)',
                                fillOpacity: serie.threshold.belowAreaProps?.fillOpacity,
                                stroke: serie.threshold.belowAreaProps?.stroke,
                                strokeWidth: serie.threshold.belowAreaProps?.strokeWidth,
                              }}
                              clipAboveTo={margin?.top ?? 0}
                              clipBelowTo={height - (margin?.bottom ?? 0)}
                              curve={serie.getCurve?.({ zoom, zoomDomain }) ?? serie.curve}
                              data={data}
                              id={`${Math.random()}`}
                              x={serie.xAccessor}
                              y0={serie.yAccessor}
                              y1={serie.threshold.yAccessor}
                            />
                            <LinearGradient
                              from={serie.threshold.aboveAreaProps?.fill}
                              id="XYChartThresholdAbove"
                              to={serie.threshold.aboveAreaProps?.fill}
                              toOffset={`${map(0, range[0], range[1], 100, 0)}%`}
                              toOpacity={serie.threshold.aboveAreaProps?.fillOpacity}
                            />
                            <LinearGradient
                              from={serie.threshold.belowAreaProps?.fill}
                              fromOffset={`${map(0, range[0], range[1], 100, 0)}%`}
                              fromOpacity={serie.threshold.aboveAreaProps?.fillOpacity}
                              id="XYChartThresholdBelow"
                              to={serie.threshold.belowAreaProps?.fill}
                            />
                          </>
                        )}
                        <LineSeries
                          colorAccessor={
                            serie.threshold ? () => 'transparent' : serie.colorAccessor
                          }
                          curve={serie.getCurve?.({ zoom, zoomDomain }) ?? serie.curve}
                          data={data}
                          dataKey={`LineSeries-${serie.dataKey}`}
                          xAccessor={serie.xAccessor}
                          yAccessor={serie.yAccessor}
                          onPointerMove={serie?.onPointerMove}
                          onPointerOut={serie?.onPointerOut}
                        />

                        {(serie.glyphSize || serie.getGlyphSize) && (
                          <GlyphSeries
                            colorAccessor={serie.colorAccessor}
                            data={data}
                            dataKey={`GlyphSeries-${serie.dataKey}`}
                            size={
                              serie.getGlyphSize
                                ? (datum) => serie.getGlyphSize?.({ datum, zoom }) || 0
                                : serie.glyphSize || 0
                            }
                            xAccessor={serie.xAccessor}
                            yAccessor={serie.yAccessor}
                          />
                        )}
                      </React.Fragment>
                    ))}

                    {/* Y-Axis */}
                    {!isMobile && (
                      <>
                        {margin?.left && margin.left > 0 && (
                          <YAxisBackground height="100%" width={margin.left} x="0" y="0" />
                        )}

                        <Axis
                          numTicks={numTicksY}
                          orientation="left"
                          stroke="var(--brokoli-ui-white950)"
                          tickFormat={(y) =>
                            tickFormatY(y, { numTicks: numTicksY, zoom, zoomDomain })
                          }
                          tickStroke="var(--brokoli-ui-white950)"
                        />
                      </>
                    )}

                    {/* X-Axis */}
                    <Axis
                      numTicks={numTicksX}
                      orientation="bottom"
                      stroke="var(--brokoli-ui-white950)"
                      strokeWidth={1}
                      tickFormat={(x) => tickFormatX(x, { numTicks: numTicksX, zoom, zoomDomain })}
                      tickStroke="var(--brokoli-ui-white950)"
                    />

                    {renderTooltip && (
                      <XYChartTooltipWithBounds<Datum>
                        glyphStyle={{
                          fill: 'var(--brokoli-ui-primary500)',
                          radius: 4,
                          stroke: 'var(--brokoli-ui-secondary500)',
                        }}
                        horizontalCrosshairStyle={{
                          opacity: 0.7,
                          strokeDasharray: '5 5',
                          strokeWidth: 1,
                        }}
                        renderTooltip={renderTooltip}
                        renderXAxisLabel={renderXAxisLabel}
                        renderYAxisLabel={renderYAxisLabel}
                        snapTooltipToDatumY={false}
                        verticalCrosshairStyle={{
                          opacity: 0.7,
                          strokeDasharray: '5 5',
                          strokeWidth: 1,
                        }}
                        applyPositionStyle
                        showDatumGlyph
                        showHorizontalCrosshair
                        showVerticalCrosshair
                        snapCrosshairToDatumX
                        snapCrosshairToDatumY
                        snapTooltipToDatumX
                        unstyled
                      />
                    )}
                  </XYChart>
                );
              }}
            </ParentSize>
          </EventEmitterProvider>
        </DataProvider>
      ) : (
        slotEmpty ?? null
      )}

      {children}
    </Container>
  );
};
