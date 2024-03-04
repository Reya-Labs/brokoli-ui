import { useTheme } from '@emotion/react';
import { curveMonotoneX, curveStepAfter } from '@visx/curve';
import { ParentSize } from '@visx/responsive';
import { Axis, Grid, LineSeries, Tooltip, XYChart } from '@visx/xychart';
import React, { useMemo, useState } from 'react';

import { getColorFromToken } from '../../foundation/Colors';
import { allTimeUnits, clamp, formatAbsoluteTime, objectEntries } from './helpers';
import { Container, YAxisBackground } from './TimeSeriesChart.styled';
import { AxisFormatterFn, Datum, TimeSeriesChartProps } from './types';

const xFormatter: AxisFormatterFn = (xValue, { zoomDomain }) =>
  formatAbsoluteTime(xValue, {
    locale: window.navigator.language,
    resolutionUnit:
      objectEntries(allTimeUnits)
        .sort((a, b) => a[1] - b[1])
        .find(([, milliseconds]) => zoomDomain <= milliseconds)?.[0] ?? 'year',
  });
const yFormatter: AxisFormatterFn = (yValue) => parseFloat(yValue.toFixed(2)).toString();

const xAccessor = (d: Datum) => d.x;
const yAccessor = (d: Datum) => d.y;

export const TimeSeriesChart = ({
  series,
  className,
  minZoomDomain = 0,
  numGridLines,
  withGridRows = true,
  withGridColumns = false,
  tickSpacingX = 150,
  tickSpacingY = 50,
}: TimeSeriesChartProps) => {
  const theme = useTheme();
  const data = useMemo(
    () =>
      series.reduce(
        (pV, cI) => [...pV, ...cI.data],
        [] as TimeSeriesChartProps['series'][number]['data'],
      ),
    [series],
  );
  const earliestDatum = data[0];
  const latestDatum = data[data.length - 1];

  // Chart state
  const [zoomDomain, setZoomDomain] = useState<number>(
    xAccessor(latestDatum) - xAccessor(earliestDatum),
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
  const onWheel = ({ deltaY }: React.WheelEvent) => {
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
  };

  return (
    <Container className={className} onWheel={onWheel}>
      <ParentSize>
        {({ width, height }: { width: number; height: number }) => {
          const numTicksX = width / tickSpacingX;
          const numTicksY = height / tickSpacingY;

          return (
            <XYChart
              height={height}
              width={width}
              xScale={{
                clamp: false,
                domain: [...domain],
                nice: false,
                type: 'time',
                zero: false,
              }}
              yScale={{
                clamp: true,
                domain: [...range],
                nice: true,
                type: 'linear',
                zero: false,
              }}
            >
              <Grid
                columns={withGridColumns}
                lineStyle={{
                  stroke: theme.colors.white950,
                  strokeDasharray: '4',
                  strokeWidth: 1,
                }}
                numTicks={numGridLines !== undefined ? numGridLines : numTicksY}
                rows={withGridRows}
              />

              {series.map((serie) => (
                <LineSeries
                  key={serie.id}
                  colorAccessor={() => getColorFromToken({ colorToken: serie.colorToken, theme })}
                  curve={zoom > 12 ? curveMonotoneX : curveStepAfter}
                  data={serie.data}
                  dataKey={`LineSeries-${serie.id}`}
                  xAccessor={xAccessor}
                  yAccessor={yAccessor}
                />
              ))}

              {/* Y-Axis */}
              <YAxisBackground height="100%" width={50} x="0" y="0" />

              <Axis
                numTicks={numTicksY}
                orientation="left"
                stroke={theme.colors.white950}
                tickFormat={(y: number) => yFormatter(y, { numTicks: numTicksY, zoom, zoomDomain })}
                tickStroke={theme.colors.white950}
              />

              {/* X-Axis */}
              <Axis
                numTicks={numTicksX}
                orientation="bottom"
                stroke={theme.colors.white950}
                strokeWidth={1}
                tickFormat={(x: number) => xFormatter(x, { numTicks: numTicksX, zoom, zoomDomain })}
                tickStroke={theme.colors.white950}
              />
              <Tooltip
                renderTooltip={({ tooltipData, colorScale }) => (
                  <div>
                    <div
                      style={{
                        color: colorScale ? colorScale(tooltipData!.nearestDatum!.key) : 'red',
                      }}
                    >
                      {tooltipData!.nearestDatum!.key}
                    </div>
                    {xAccessor(tooltipData!.nearestDatum!.datum as Datum)}
                    {', '}
                    {yAccessor(tooltipData!.nearestDatum!.datum as Datum)}
                  </div>
                )}
                showSeriesGlyphs={true}
                showVerticalCrosshair={true}
                snapTooltipToDatumX={true}
                snapTooltipToDatumY={true}
              />
            </XYChart>
          );
        }}
      </ParentSize>
    </Container>
  );
};
