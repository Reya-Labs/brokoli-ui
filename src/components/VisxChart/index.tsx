import { curveCardinal, curveLinear, curveStep } from '@visx/curve';
import { ParentSize } from '@visx/responsive';
import { scaleLinear, scaleTime } from '@visx/scale';
import { darkTheme, lightTheme } from '@visx/xychart';
import { Zoom } from '@visx/zoom';
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
  seriesOrientation = 'vertical',
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
  const {
    accessors: { x: xAccessor, y: yAccessor },
  } = series[0] || {
    accessors: {
      x: () => 0,
      y: () => 0,
    },
  };

  const renderBarGroup = chartType === 'bargroup';
  const renderBarStack = chartType === 'barstack';
  const renderLineSeries = chartType === 'line';
  const renderAreaSeries = chartType === 'area';
  const renderAreaStack = chartType === 'areastack';
  const renderBarSeries = chartType === 'bar';
  const renderGlyphSeries = chartType === 'glyph';
  const renderHorizontally = seriesOrientation === 'horizontal';
  const curve = useMemo(() => {
    if (curveType === 'cardinal') return curveCardinal;
    if (curveType === 'step') return curveStep;
    return curveLinear;
  }, [curveType]);
  // cannot snap to a stack position
  const canSnapTooltipToDatum = chartType !== 'barstack' && chartType !== 'areastack';
  const chartTheme = useMemo(() => {
    if (themeName === 'dark') {
      return darkTheme;
    }
    if (themeName === 'light') {
      return lightTheme;
    }
    return customTheme;
  }, [themeName]);
  const xMin = data.length > 0 ? Math.min(...data.map((d) => Number(xAccessor(d)))) : 0;
  const xMax = data.length > 0 ? Math.max(...data.map((d) => Number(xAccessor(d)))) : 0;
  const yMin = data.length > 0 ? Math.min(...data.map((d) => Number(yAccessor(d)))) : 0;
  const yMax = data.length > 0 ? Math.max(...data.map((d) => Number(yAccessor(d)))) : 0;

  const { xScale, yScale } = useMemo(() => {
    const xScaleConfig = scaleTime({
      domain: [xMin, xMax],
      nice: true,
    });
    const yScaleConfig = scaleLinear({
      domain: [yMin, yMax],
      nice: true,
    });
    if (renderHorizontally) {
      return {
        xScale: { ...yScaleConfig, type: 'linear' },
        yScale: { ...xScaleConfig, type: 'time' },
      };
    }
    return {
      xScale: { ...xScaleConfig, type: 'time' },
      yScale: { ...yScaleConfig, type: 'linear' },
    };
  }, [data, renderHorizontally]);

  const chartComponents = (
    <>
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
          renderGlyph={typeof renderTooltipGlyph === 'function' ? renderTooltipGlyph : undefined}
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
    </>
  );
  return (
    <ParentSize>
      {({ width, height }) => (
        <Zoom
          height={height}
          initialTransformMatrix={{
            scaleX: 1,
            scaleY: 1,
            skewX: 0,
            skewY: 0,
            translateX: 0,
            translateY: 0,
          }}
          scaleXMax={4}
          scaleXMin={1}
          scaleYMax={1}
          scaleYMin={1}
          width={width}
        >
          {(zoom) => {
            const xScaleTransformed = scaleTime({
              domain: [
                xScale.invert(
                  (xMin - zoom.transformMatrix.translateX) / zoom.transformMatrix.scaleX,
                ),
                xScale.invert(
                  (xMax - zoom.transformMatrix.translateX) / zoom.transformMatrix.scaleX,
                ),
              ],
              range: [0, xMax],
            });

            const yScaleTransformed = scaleLinear({
              domain: [
                yScale.invert(
                  (yMin - zoom.transformMatrix.translateY) / zoom.transformMatrix.scaleY,
                ),
                yScale.invert(
                  (yMax - zoom.transformMatrix.translateY) / zoom.transformMatrix.scaleY,
                ),
              ],
              range: [yMax, 0],
            });

            return (
              <div>
                <svg height={height} width={width}>
                  <rect
                    fill="transparent"
                    height={height}
                    width={width}
                    onMouseDown={zoom.dragStart}
                    onMouseMove={zoom.dragMove}
                    onMouseUp={zoom.dragEnd}
                    onTouchEnd={zoom.dragEnd}
                    onTouchMove={zoom.dragMove}
                    onTouchStart={zoom.dragStart}
                    onWheel={zoom.handleWheel}
                  />
                  <g transform={zoom.toString()}>
                    <XYChart
                      height={Math.min(400, height)}
                      theme={chartTheme}
                      xScale={{
                        clamp: false,
                        domain: xScaleTransformed.domain(),
                        nice: false,
                        type: 'time',
                        zero: false,
                      }}
                      yScale={{
                        clamp: true,
                        domain: yScaleTransformed.range(),
                        nice: true,
                        type: 'linear',
                        zero: false,
                      }}
                    >
                      {chartComponents}
                    </XYChart>
                  </g>
                </svg>
                <div style={{ left: 0, position: 'absolute', top: 0 }}>
                  <button onClick={zoom.reset}>Reset Zoom</button>
                </div>
              </div>
            );
          }}
        </Zoom>
      )}
    </ParentSize>
  );
};
