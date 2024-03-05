import { curveCardinal, curveLinear, curveStep } from '@visx/curve';
import { ParentSize } from '@visx/responsive';
import { darkTheme, lightTheme } from '@visx/xychart';
import React, { useMemo, useState } from 'react';

import { customTheme } from './customTheme';
import { getAnimatedOrUnanimatedComponents } from './getAnimatedOrUnanimatedComponents';
import { allTimeUnits, clamp, formatAbsoluteTime, objectEntries } from './helpers';
import { AxisFormatterFn, VisxChartDatum, VisxChartProps } from './types';
import { userPrefersReducedMotion } from './userPrefersReducedMotion';

const xFormatter: AxisFormatterFn = (xValue, { zoomDomain }) => {
  const resolutionUnit =
    objectEntries(allTimeUnits)
      .sort((a, b) => a[1] - b[1])
      .find(([, milliseconds]) => zoomDomain <= milliseconds)?.[0] ?? 'year';
  return formatAbsoluteTime(xValue, {
    locale: window.navigator.language,
    resolutionUnit,
  });
};
const yFormatter: AxisFormatterFn = (yValue) => parseFloat(yValue.toFixed(2)).toString();

const xAccessor = (d: VisxChartDatum) => d.x;
const yAccessor = (d: VisxChartDatum) => d.y;

export const VisxChart = ({
  animated = !userPrefersReducedMotion(),
  series = [],
  animationTrajectory = 'outside',
  curveType = 'linear',
  axisNumTicks = 4,
  renderGlyph,
  renderTooltip,
  renderTooltipGlyph,
  sharedTooltip = false,
  showGridColumns = false,
  showGridRows = false,
  tooltipShowHorizontalCrosshair = false,
  tooltipShowVerticalCrosshair = false,
  tooltipSnapTooltipToDatumX = false,
  tooltipSnapTooltipToDatumY = false,
  stackOffset,
  themeName = 'dark',
  xAxisOrientation = 'bottom',
  yAxisOrientation = 'right',
  chartType = 'line',
  customChartBackground = null,
  minZoomDomain = 4 * 60 * 60 * 1000,
}: VisxChartProps) => {
  const ChartComponents = getAnimatedOrUnanimatedComponents(animated);
  const renderBarGroup = chartType === 'bargroup';
  const renderBarStack = chartType === 'barstack';
  const renderLineSeries = chartType === 'line';
  const renderAreaSeries = chartType === 'area';
  const renderAreaStack = chartType === 'areastack';
  const renderBarSeries = chartType === 'bar';
  const renderGlyphSeries = chartType === 'glyph';
  const curve = useMemo(() => {
    if (curveType === 'cardinal') return curveCardinal;
    if (curveType === 'step') return curveStep;
    return curveLinear;
  }, [curveType]);
  // cannot snap to a stack position
  const canSnapTooltipToDatum = chartType !== 'barstack' && chartType !== 'areastack';
  const tooltipShowVerticalCrosshairComputed =
    chartType === 'barstack' || chartType === 'areastack' || tooltipShowVerticalCrosshair;
  const chartTheme = useMemo(() => {
    if (themeName === 'dark') {
      return darkTheme;
    }
    if (themeName === 'light') {
      return lightTheme;
    }
    return customTheme;
  }, [themeName]);

  const data = useMemo(
    () => series.reduce((pV, cI) => [...pV, ...cI.data], [] as VisxChartDatum[]),
    [series],
  );
  const earliestDatum = data[0];
  const latestDatum = data[data.length - 1];

  // Chart state
  const [zoomDomain, setZoomDomain] = useState<number>(latestDatum.x - earliestDatum.x);

  // Computations
  const { zoom, domain, range } = useMemo(() => {
    if (!zoomDomain) return { domain: [0, 0], range: [0, 0], zoom: 0 };

    const zoomComputed = zoomDomain / minZoomDomain;

    const [xMin, xMax] = [
      clamp(latestDatum.x - zoomDomain, earliestDatum.x, latestDatum.x),
      latestDatum.x,
    ];

    const visibleDataComputed = data.filter((datum) => datum.x >= xMin && datum.x <= xMax);

    const rangeComputed = visibleDataComputed
      .map((datum) => datum.y)
      .reduce((r, y) => [Math.min(r[0], y), Math.max(r[1], y)] as const, [
        Infinity,
        -Infinity,
      ] as const);

    return {
      domain: [xMin, xMax],
      range: rangeComputed,
      zoom: zoomComputed,
    };
  }, [zoomDomain, minZoomDomain, latestDatum.x, earliestDatum.x, data]);

  // Events
  const onWheel = ({ deltaY }: React.WheelEvent) => {
    setZoomDomain(
      clamp(
        Math.max(
          1e-320,
          Math.min(Number.MAX_SAFE_INTEGER, (zoomDomain || 0) * Math.exp(deltaY / 1000)),
        ),
        minZoomDomain,
        latestDatum.x - earliestDatum.x,
      ),
    );
  };

  return (
    <ParentSize onWheel={onWheel}>
      {({ width, height }) => {
        const tickSpacingX = 150;
        const tickSpacingY = 50;
        const numTicksX = width / tickSpacingX;
        const numTicksY = height / tickSpacingY;
        return (
          <ChartComponents.XYChart
            height={Math.min(400, height)}
            theme={chartTheme}
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
            {customChartBackground}
            <ChartComponents.Grid
              key={`grid-${animationTrajectory}`} // force animate on update
              animationTrajectory={animationTrajectory}
              columns={showGridColumns}
              numTicks={axisNumTicks}
              rows={showGridRows}
            />
            {renderBarStack && (
              <ChartComponents.BarStack offset={stackOffset}>
                {series.map((s) => {
                  return (
                    <ChartComponents.BarSeries
                      key={s.id}
                      data={s.data}
                      dataKey={s.id}
                      xAccessor={xAccessor}
                      yAccessor={yAccessor}
                    />
                  );
                })}
              </ChartComponents.BarStack>
            )}
            {renderBarGroup && (
              <ChartComponents.BarGroup>
                {series.map((s) => {
                  return (
                    <ChartComponents.BarSeries
                      key={s.id}
                      data={s.data}
                      dataKey={s.id}
                      xAccessor={xAccessor}
                      yAccessor={yAccessor}
                    />
                  );
                })}
              </ChartComponents.BarGroup>
            )}
            {renderBarSeries && (
              <>
                {series.map((s) => {
                  return (
                    <ChartComponents.BarSeries
                      key={s.id}
                      data={s.data}
                      dataKey={s.id}
                      xAccessor={xAccessor}
                      yAccessor={yAccessor}
                    />
                  );
                })}
              </>
            )}
            {renderAreaSeries && (
              <>
                {series.map((s) => {
                  return (
                    <ChartComponents.AreaSeries
                      key={s.id}
                      curve={curve}
                      data={s.data}
                      dataKey={s.id}
                      fillOpacity={0.4}
                      xAccessor={xAccessor}
                      yAccessor={yAccessor}
                    />
                  );
                })}
              </>
            )}
            {renderAreaStack && (
              <ChartComponents.AreaStack
                curve={curve}
                offset={stackOffset}
                renderLine={stackOffset !== 'wiggle'}
              >
                {series.map((s) => {
                  return (
                    <ChartComponents.AreaSeries
                      key={s.id}
                      data={s.data}
                      dataKey={s.id}
                      fillOpacity={0.4}
                      xAccessor={xAccessor}
                      yAccessor={yAccessor}
                    />
                  );
                })}
              </ChartComponents.AreaStack>
            )}
            {renderLineSeries && (
              <>
                {series.map((s) => {
                  return (
                    <ChartComponents.LineSeries
                      key={s.id}
                      curve={curve}
                      data={s.data}
                      dataKey={s.id}
                      xAccessor={xAccessor}
                      yAccessor={yAccessor}
                    />
                  );
                })}
              </>
            )}
            {renderGlyphSeries && typeof renderGlyph === 'function' && (
              <>
                {series.map((s) => {
                  return (
                    <ChartComponents.GlyphSeries
                      key={s.id}
                      data={s.data}
                      dataKey={s.id}
                      renderGlyph={renderGlyph}
                      xAccessor={xAccessor}
                      yAccessor={yAccessor}
                    />
                  );
                })}
              </>
            )}
            <ChartComponents.Axis
              key={`time-axis-${animationTrajectory}`}
              animationTrajectory={animationTrajectory}
              numTicks={axisNumTicks}
              orientation={xAxisOrientation}
              tickFormat={(x: number) => xFormatter(x, { numTicks: numTicksX, zoom, zoomDomain })}
            />
            <ChartComponents.Axis
              key={`temp-axis-${animationTrajectory}`}
              animationTrajectory={animationTrajectory}
              numTicks={axisNumTicks}
              orientation={yAxisOrientation}
              tickFormat={
                stackOffset === 'wiggle'
                  ? () => ''
                  : (y: number) => yFormatter(y, { numTicks: numTicksY, zoom, zoomDomain })
              }
            />
            {typeof renderTooltip === 'function' ? (
              <ChartComponents.Tooltip<VisxChartDatum>
                renderGlyph={
                  typeof renderTooltipGlyph === 'function' ? renderTooltipGlyph : undefined
                }
                renderTooltip={renderTooltip}
                showDatumGlyph={
                  !canSnapTooltipToDatum
                    ? false
                    : tooltipSnapTooltipToDatumX || tooltipSnapTooltipToDatumY
                }
                showHorizontalCrosshair={tooltipShowHorizontalCrosshair}
                showSeriesGlyphs={sharedTooltip && !renderBarGroup}
                showVerticalCrosshair={tooltipShowVerticalCrosshairComputed}
                snapTooltipToDatumX={!canSnapTooltipToDatum ? false : tooltipSnapTooltipToDatumX}
                snapTooltipToDatumY={!canSnapTooltipToDatum ? false : tooltipSnapTooltipToDatumY}
              />
            ) : undefined}
          </ChartComponents.XYChart>
        );
      }}
    </ParentSize>
  );
};
