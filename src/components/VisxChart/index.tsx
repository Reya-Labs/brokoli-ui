import { curveCardinal, curveLinear, curveStep } from '@visx/curve';
import { ParentSize } from '@visx/responsive';
import { darkTheme, lightTheme } from '@visx/xychart';
import React, { useMemo } from 'react';

import { customTheme } from './customTheme';
import { getAnimatedOrUnanimatedComponents } from './getAnimatedOrUnanimatedComponents';
import { VisxChartProps } from './types';
import { userPrefersReducedMotion } from './userPrefersReducedMotion';

export const VisxChart = <Datum extends object>({
  animated = !userPrefersReducedMotion(),
  series = [],
  animationTrajectory = 'outside',
  curveType = 'linear',
  data = [],
  axisNumTicks = 4,
  renderGlyph,
  renderTooltip,
  renderTooltipGlyph,
  renderHorizontally = false,
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
  renderAs = 'line',
  customChartBackground = null,
}: VisxChartProps<Datum>) => {
  const {
    AreaSeries,
    AreaStack,
    Axis,
    BarGroup,
    BarSeries,
    BarStack,
    GlyphSeries,
    Grid,
    LineSeries,
    Tooltip,
    XYChart,
  } = getAnimatedOrUnanimatedComponents(animated);
  const renderBarGroup = renderAs === 'bargroup';
  const renderBarStack = renderAs === 'barstack';
  const renderLineSeries = renderAs === 'line';
  const renderAreaSeries = renderAs === 'area';
  const renderAreaStack = renderAs === 'areastack';
  const renderBarSeries = renderAs === 'bar';
  const renderGlyphSeries = renderAs === 'glyph';
  const curve = useMemo(() => {
    if (curveType === 'cardinal') return curveCardinal;
    if (curveType === 'step') return curveStep;
    return curveLinear;
  }, [curveType]);
  // cannot snap to a stack position
  const canSnapTooltipToDatum = renderAs !== 'barstack' && renderAs !== 'areastack';
  const chartTheme = useMemo(() => {
    if (themeName === 'dark') {
      return darkTheme;
    }
    if (themeName === 'light') {
      return lightTheme;
    }
    return customTheme;
  }, [themeName]);
  const { xScale, yScale } = useMemo(() => {
    const xScaleConfig = { paddingInner: 0.3, type: 'band' } as const;
    const yScaleConfig = { type: 'linear' } as const;
    if (renderHorizontally) {
      return {
        xScale: yScaleConfig,
        yScale: xScaleConfig,
      };
    }
    return {
      xScale: xScaleConfig,
      yScale: yScaleConfig,
    };
  }, [renderHorizontally]);

  return (
    <ParentSize>
      {({ height }) => (
        <XYChart height={Math.min(400, height)} theme={chartTheme} xScale={xScale} yScale={yScale}>
          {customChartBackground}
          <Grid
            key={`grid-${animationTrajectory}`} // force animate on update
            animationTrajectory={animationTrajectory}
            columns={showGridColumns}
            numTicks={axisNumTicks}
            rows={showGridRows}
          />
          {renderBarStack && (
            <BarStack offset={stackOffset}>
              {series.map(({ accessors, id }) => {
                return (
                  <BarSeries
                    key={id}
                    data={data}
                    dataKey={id}
                    xAccessor={renderHorizontally ? accessors.x : accessors.y}
                    yAccessor={renderHorizontally ? accessors.y : accessors.x}
                  />
                );
              })}
            </BarStack>
          )}
          {renderBarGroup && (
            <BarGroup>
              {series.map(({ accessors, id }) => {
                return (
                  <BarSeries
                    key={id}
                    colorAccessor={
                      typeof accessors.colorAccessor === 'function'
                        ? (d) => accessors.colorAccessor!(id, d)
                        : undefined
                    }
                    data={data}
                    dataKey={id}
                    xAccessor={renderHorizontally ? accessors.x : accessors.y}
                    yAccessor={renderHorizontally ? accessors.y : accessors.x}
                  />
                );
              })}
            </BarGroup>
          )}
          {renderBarSeries && (
            <>
              {series.map(({ accessors, id }) => {
                return (
                  <BarSeries
                    key={id}
                    colorAccessor={
                      typeof accessors.colorAccessor === 'function'
                        ? (d) => accessors.colorAccessor!(id, d)
                        : undefined
                    }
                    data={data}
                    dataKey={id}
                    xAccessor={renderHorizontally ? accessors.x : accessors.y}
                    yAccessor={renderHorizontally ? accessors.y : accessors.x}
                  />
                );
              })}
            </>
          )}
          {renderAreaSeries && (
            <>
              {series.map(({ accessors, id }) => {
                return (
                  <AreaSeries
                    key={id}
                    curve={curve}
                    data={data}
                    dataKey={id}
                    fillOpacity={0.4}
                    xAccessor={renderHorizontally ? accessors.x : accessors.y}
                    yAccessor={renderHorizontally ? accessors.y : accessors.x}
                  />
                );
              })}
            </>
          )}
          {renderAreaStack && (
            <AreaStack curve={curve} offset={stackOffset} renderLine={stackOffset !== 'wiggle'}>
              {series.map(({ accessors, id }) => {
                return (
                  <AreaSeries
                    key={id}
                    data={data}
                    dataKey={id}
                    fillOpacity={0.4}
                    xAccessor={renderHorizontally ? accessors.x : accessors.y}
                    yAccessor={renderHorizontally ? accessors.y : accessors.x}
                  />
                );
              })}
            </AreaStack>
          )}
          {renderLineSeries && (
            <>
              {series.map(({ accessors, id }) => {
                return (
                  <LineSeries
                    key={id}
                    curve={curve}
                    data={data}
                    dataKey={id}
                    xAccessor={renderHorizontally ? accessors.x : accessors.y}
                    yAccessor={renderHorizontally ? accessors.y : accessors.x}
                  />
                );
              })}
            </>
          )}
          {renderGlyphSeries && typeof renderGlyph === 'function' && (
            <>
              {series.map(({ accessors, id }) => {
                return (
                  <GlyphSeries
                    key={id}
                    colorAccessor={
                      typeof accessors.colorAccessor === 'function'
                        ? (d) => accessors.colorAccessor!(id, d)
                        : undefined
                    }
                    data={data}
                    dataKey={id}
                    renderGlyph={renderGlyph}
                    xAccessor={renderHorizontally ? accessors.x : accessors.y}
                    yAccessor={renderHorizontally ? accessors.y : accessors.x}
                  />
                );
              })}
            </>
          )}
          <Axis
            key={`time-axis-${animationTrajectory}-${
              renderHorizontally ? 'renderHorizontally' : 'renderVertically'
            }`}
            animationTrajectory={animationTrajectory}
            numTicks={axisNumTicks}
            orientation={renderHorizontally ? yAxisOrientation : xAxisOrientation}
          />
          <Axis
            key={`temp-axis-${animationTrajectory}-${
              renderHorizontally ? 'renderHorizontally' : 'renderVertically'
            }`}
            animationTrajectory={animationTrajectory}
            numTicks={axisNumTicks}
            orientation={renderHorizontally ? xAxisOrientation : yAxisOrientation}
            tickFormat={stackOffset === 'wiggle' ? () => '' : undefined}
          />
          {typeof renderTooltip === 'function' ? (
            <Tooltip<Datum>
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
              showVerticalCrosshair={tooltipShowVerticalCrosshair}
              snapTooltipToDatumX={!canSnapTooltipToDatum ? false : tooltipSnapTooltipToDatumX}
              snapTooltipToDatumY={!canSnapTooltipToDatum ? false : tooltipSnapTooltipToDatumY}
            />
          ) : undefined}
        </XYChart>
      )}
    </ParentSize>
  );
};
