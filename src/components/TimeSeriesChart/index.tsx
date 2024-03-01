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
  type TooltipContextType,
  XYChart,
} from '@visx/xychart';
import { RenderTooltipParams } from '@visx/xychart/lib/components/Tooltip';
import React, { useEffect, useMemo, useState } from 'react';

import { useResponsiveQuery } from '../../foundation/Media';
import { formatAbsoluteTime } from './dateTime';
import { clamp, lerp, map } from './math';
import { objectEntries } from './objectEntries';
import { allTimeUnits } from './time';
import { Container, ParentSize, YAxisBackground } from './TimeSeriesChart.styled';
import { useAnimationFrame } from './useAnimationFrame';
import { type Threshold, XYChartThreshold } from './XYChartThreshold';
import Tooltip from './XYChartTooltipWithBounds';

type LineSeriesProps<Datum extends {}> = Parameters<
  typeof LineSeries<AxisScale, AxisScale, Datum>
>[0];

type GlyphSeriesProps<Datum extends {} = {}> = Parameters<
  typeof GlyphSeries<AxisScale, AxisScale, Datum>
>[0];

type ThresholdProps<Datum extends {} = {}> = Parameters<typeof Threshold<Datum>>[0];

type ElementProps<Datum extends {}> = {
  id: string;
  selectedLocale: string;
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
  onTooltipContext?: (tooltipContext: TooltipContextType<Datum>) => void;
  onVisibleDataChange?: (data: Datum[]) => void;
  onZoom?: (_: { zoomDomain: number | undefined }) => void;
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
  id,
  selectedLocale,
  yAxisScaleType = 'linear',
  data,
  series,
  tickFormatX = (timestamp, { zoomDomain, numTicks }) =>
    formatAbsoluteTime(timestamp, {
      locale: selectedLocale,
      resolutionUnit:
        objectEntries(allTimeUnits)
          .sort((a, b) => a[1] - b[1])
          .find(([, milliseconds]) => zoomDomain <= milliseconds)?.[0] ?? 'year',
    }),
  tickFormatY = (y) => String(y),
  renderXAxisLabel,
  renderYAxisLabel,
  renderTooltip,
  onTooltipContext,
  onVisibleDataChange,
  onZoom,
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

  useEffect(() => {
    onZoom?.({ zoomDomain });
  }, [zoomDomain]);

  useAnimationFrame(
    (elapsedMilliseconds) => {
      if (zoomDomainAnimateTo) {
        setZoomDomain(
          (zoomDomain) =>
            zoomDomain &&
            zoomDomain * (zoomDomainAnimateTo / zoomDomain) ** (elapsedMilliseconds * 0.0166),
        );
      }
    },
    [zoomDomainAnimateTo],
  );

  // Computations
  const { zoom, domain, range, visibleData } = useMemo(() => {
    if (!zoomDomain) return { domain: [0, 0], range: [0, 0], zoom: 0 };

    const zoom = zoomDomain / minZoomDomain;

    const domain = [
      clamp(xAccessor(latestDatum) - zoomDomain, xAccessor(earliestDatum), xAccessor(latestDatum)),
      xAccessor(latestDatum),
    ] as const;

    const visibleData = data.filter(
      (datum) => xAccessor(datum) >= domain[0] && xAccessor(datum) <= domain[1],
    );

    const range = visibleData
      .filter((datum) => xAccessor(datum) >= domain[0] && xAccessor(datum) <= domain[1])
      .map((datum) => yAccessor(datum))
      .reduce((range, y) => [Math.min(range[0], y), Math.max(range[1], y)] as const, [
        Infinity,
        -Infinity,
      ] as const);

    return { domain, range, visibleData, zoom };
  }, [data, zoomDomain, minZoomDomain]);

  useEffect(() => {
    if (visibleData) {
      onVisibleDataChange?.(visibleData);
    }
  }, [visibleData]);

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

                    {series.map((series) => (
                      <React.Fragment key={series.dataKey}>
                        {series.threshold && (
                          <>
                            <XYChartThreshold<Datum>
                              aboveAreaProps={{
                                fill: 'url(#XYChartThresholdAbove)',
                                fillOpacity: series.threshold.aboveAreaProps?.fillOpacity,
                                stroke: series.threshold.aboveAreaProps?.stroke,
                                strokeWidth: series.threshold.aboveAreaProps?.strokeWidth,
                              }}
                              belowAreaProps={{
                                fill: 'url(#XYChartThresholdBelow)',
                                fillOpacity: series.threshold.belowAreaProps?.fillOpacity,
                                stroke: series.threshold.belowAreaProps?.stroke,
                                strokeWidth: series.threshold.belowAreaProps?.strokeWidth,
                              }}
                              clipAboveTo={margin?.top ?? 0}
                              clipBelowTo={height - (margin?.bottom ?? 0)}
                              curve={series.getCurve?.({ zoom, zoomDomain }) ?? series.curve}
                              data={data}
                              id={`${Math.random()}`}
                              x={series.xAccessor}
                              y0={series.yAccessor}
                              y1={series.threshold.yAccessor}
                            />
                            <LinearGradient
                              from={series.threshold.aboveAreaProps?.fill}
                              id="XYChartThresholdAbove"
                              to={series.threshold.aboveAreaProps?.fill}
                              toOffset={`${map(0, range[0], range[1], 100, 0)}%`}
                              toOpacity={series.threshold.aboveAreaProps?.fillOpacity}
                            />
                            <LinearGradient
                              from={series.threshold.belowAreaProps?.fill}
                              fromOffset={`${map(0, range[0], range[1], 100, 0)}%`}
                              fromOpacity={series.threshold.aboveAreaProps?.fillOpacity}
                              id="XYChartThresholdBelow"
                              to={series.threshold.belowAreaProps?.fill}
                            />
                          </>
                        )}
                        <LineSeries
                          colorAccessor={
                            series.threshold ? () => 'transparent' : series.colorAccessor
                          }
                          curve={series.getCurve?.({ zoom, zoomDomain }) ?? series.curve}
                          data={data}
                          dataKey={`LineSeries-${series.dataKey}`}
                          xAccessor={series.xAccessor}
                          yAccessor={series.yAccessor}
                          onPointerMove={series?.onPointerMove}
                          onPointerOut={series?.onPointerOut}
                        />

                        {(series.glyphSize || series.getGlyphSize) && (
                          <GlyphSeries
                            colorAccessor={series.colorAccessor}
                            data={data}
                            dataKey={`GlyphSeries-${series.dataKey}`}
                            size={
                              series.getGlyphSize
                                ? (datum) => series.getGlyphSize?.({ datum, zoom }) || 0
                                : series.glyphSize || 0
                            }
                            xAccessor={series.xAccessor}
                            yAccessor={series.yAccessor}
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
                          orientation="left"
                          tickFormat={(y) =>
                            tickFormatY(y, { zoom, zoomDomain, numTicks: numTicksY })
                          }
                          // hideTicks
                          tickStroke="var(--brokoli-ui-white950)"
                          numTicks={numTicksY}
                          // hideAxisLine
                          stroke="var(--brokoli-ui-white950)"
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
                      <Tooltip<Datum>
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
                        onTooltipContext={onTooltipContext}
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
