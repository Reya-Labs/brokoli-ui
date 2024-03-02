import { curveMonotoneX, curveStepAfter } from '@visx/curve';
import { ParentSize } from '@visx/responsive';
import { Axis, DataProvider, EventEmitterProvider, Grid, LineSeries, XYChart } from '@visx/xychart';
import React, { useMemo, useState } from 'react';

import { allTimeUnits, clamp, formatAbsoluteTime, lerp, objectEntries } from './helpers';
import { Container, YAxisBackground } from './TimeSeriesChart.styled';
import { AxisFormatterFn, TimeSeriesChartProps } from './types';
import { useAnimationFrame } from './useAnimationFrame';
import { XYChartTooltipWithBounds } from './XYChartTooltipWithBounds';

const xFormatter: AxisFormatterFn = (xValue, { zoomDomain }) =>
  formatAbsoluteTime(xValue, {
    locale: window.navigator.language,
    resolutionUnit:
      objectEntries(allTimeUnits)
        .sort((a, b) => a[1] - b[1])
        .find(([, milliseconds]) => zoomDomain <= milliseconds)?.[0] ?? 'year',
  });
const yFormatter: AxisFormatterFn = (yValue) => parseFloat(yValue.toFixed(2)).toString();

export const TimeSeriesChart = <Datum extends {}>({
  data = [],
  series,
  renderXAxisLabel,
  renderYAxisLabel,
  renderTooltip,
  children,
  className,
  minZoomDomain = 0,
  numGridLines,
  withGridRows = true,
  withGridColumns = false,
  tickSpacingX = 150,
  tickSpacingY = 50,
}: TimeSeriesChartProps<Datum>) => {
  // Chart data
  const { xAccessor, yAccessor } = series[0];

  const earliestDatum = data[0];
  const latestDatum = data[data.length - 1];

  // Chart state
  const [zoomDomain, setZoomDomain] = useState<number>(
    xAccessor(latestDatum) - xAccessor(earliestDatum),
  );

  const [zoomDomainAnimateTo, setZoomDomainAnimateTo] = useState<number | undefined>();

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
  const { zoom, domain, range } = useMemo(() => {
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

  const xScaleDomain = [lerp(0, domain[0], domain[1]), lerp(1, domain[0], domain[1])];
  const yScaleDomain = [lerp(-0.05, range[0], range[1]), lerp(1.05, range[0], range[1])];
  console.log('###', xScaleDomain, domain);
  return (
    <Container className={className} onWheel={onWheel}>
      {
        <DataProvider
          xScale={{
            // 'linear'
            clamp: false,
            domain: xScaleDomain,
            nice: false,
            type: 'time',
            zero: false,
          }}
          yScale={{
            clamp: true,
            domain: yScaleDomain,
            nice: true,
            type: 'linear',
            zero: false,
          }}
        >
          <EventEmitterProvider>
            <ParentSize>
              {({ width, height }: { width: number; height: number }) => {
                const numTicksX = width / tickSpacingX;
                const numTicksY = height / tickSpacingY;

                return (
                  <XYChart height={height} width={width}>
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
                      <LineSeries
                        colorAccessor={serie.colorAccessor}
                        curve={zoom > 12 ? curveMonotoneX : curveStepAfter}
                        data={data}
                        dataKey={`LineSeries-${serie.dataKey}`}
                        xAccessor={serie.xAccessor}
                        yAccessor={serie.yAccessor}
                        onPointerMove={serie?.onPointerMove}
                        onPointerOut={serie?.onPointerOut}
                      />
                    ))}

                    {/* Y-Axis */}
                    {<YAxisBackground height="100%" width={88} x="0" y="0" />}

                    <Axis
                      numTicks={numTicksY}
                      orientation="left"
                      stroke="var(--brokoli-ui-white950)"
                      tickFormat={(y) => yFormatter(y, { numTicks: numTicksY, zoom, zoomDomain })}
                      tickStroke="var(--brokoli-ui-white950)"
                    />

                    {/* X-Axis */}
                    <Axis
                      numTicks={numTicksX}
                      orientation="bottom"
                      stroke="var(--brokoli-ui-white950)"
                      strokeWidth={1}
                      tickFormat={(x) => xFormatter(x, { numTicks: numTicksX, zoom, zoomDomain })}
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
      }

      {children}
    </Container>
  );
};
