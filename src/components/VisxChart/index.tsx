import { ParentSize } from '@visx/responsive';
import React from 'react';

import { CustomChartBackground } from './CustomChartBackground';
import { getAnimatedOrUnanimatedComponents } from './getAnimatedOrUnanimatedComponents';
import { VisxChartProps } from './types';
import { userPrefersReducedMotion } from './userPrefersReducedMotion';

export const VisxChart = <Datum extends object>({
  animated = !userPrefersReducedMotion(),
  series,
  animationTrajectory = 'outside',
  config,
  curve,
  data,
  numTicks,
  renderGlyph,
  renderGlyphSeries,
  renderTooltip,
  renderTooltipGlyph,
  renderHorizontally,
  sharedTooltip,
  showGridColumns,
  showGridRows,
  tooltipShowHorizontalCrosshair,
  tooltipShowVerticalCrosshair,
  tooltipSnapTooltipToDatumX,
  tooltipSnapTooltipToDatumY,
  stackOffset,
  theme,
  xAxisOrientation = 'bottom',
  yAxisOrientation = 'right',
  renderAs = 'line',
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
  // cannot snap to a stack position
  const canSnapTooltipToDatum = renderAs !== 'barstack' && renderAs !== 'areastack';

  return (
    <ParentSize>
      {({ height }) => (
        <XYChart height={Math.min(400, height)} theme={theme} xScale={config.x} yScale={config.y}>
          <CustomChartBackground />
          <Grid
            key={`grid-${animationTrajectory}`} // force animate on update
            animationTrajectory={animationTrajectory}
            columns={showGridColumns}
            numTicks={numTicks}
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
                    xAccessor={accessors.x}
                    yAccessor={accessors.y}
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
                    colorAccessor={(d) => accessors.colorAccessor(id, d)}
                    data={data}
                    dataKey={id}
                    xAccessor={accessors.x}
                    yAccessor={accessors.y}
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
                    colorAccessor={(d) => accessors.colorAccessor(id, d)}
                    data={data}
                    dataKey={id}
                    xAccessor={accessors.x}
                    yAccessor={accessors.y}
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
                    xAccessor={accessors.x}
                    yAccessor={accessors.y}
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
                    xAccessor={accessors.x}
                    yAccessor={accessors.y}
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
                    xAccessor={accessors.x}
                    yAccessor={accessors.y}
                  />
                );
              })}
            </>
          )}
          {renderGlyphSeries && (
            <>
              {series.map(({ accessors, id }) => {
                return (
                  <GlyphSeries
                    key={id}
                    colorAccessor={(d) => accessors.colorAccessor(id, d)}
                    data={data}
                    dataKey={id}
                    renderGlyph={renderGlyph}
                    xAccessor={accessors.x}
                    yAccessor={accessors.y}
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
            numTicks={numTicks}
            orientation={renderHorizontally ? yAxisOrientation : xAxisOrientation}
          />
          <Axis
            key={`temp-axis-${animationTrajectory}-${
              renderHorizontally ? 'renderHorizontally' : 'renderVertically'
            }`}
            animationTrajectory={animationTrajectory}
            numTicks={numTicks}
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
