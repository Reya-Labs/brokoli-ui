import { curveCardinal, curveLinear, curveStep } from '@visx/curve';
import { ParentSize } from '@visx/responsive';
import {
  AreaSeries,
  AreaStack,
  Axis,
  darkTheme,
  GlyphSeries,
  Grid,
  lightTheme,
  LineSeries,
  Tooltip,
  XYChart,
} from '@visx/xychart';
import React, { useMemo, useState } from 'react';

import { customTheme } from './customTheme';
import { allTimeUnits, clamp, formatAbsoluteTime, objectEntries } from './helpers';
import { AxisFormatterFn, VisxChartDatum, VisxChartProps } from './types';

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
  series = [],
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
  const renderLineSeries = chartType === 'line';
  const renderAreaSeries = chartType === 'area';
  const renderAreaStack = chartType === 'areastack';
  const renderGlyphSeries = chartType === 'glyph';
  const curve = useMemo(() => {
    if (curveType === 'cardinal') return curveCardinal;
    if (curveType === 'step') return curveStep;
    return curveLinear;
  }, [curveType]);
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
        return (
          <XYChart
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
            <Grid
              key="grid"
              columns={showGridColumns}
              numTicks={axisNumTicks}
              rows={showGridRows}
            />
            {renderAreaSeries && (
              <>
                {series.map((s) => {
                  return (
                    <AreaSeries
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
              <AreaStack curve={curve} offset={stackOffset} renderLine={stackOffset !== 'wiggle'}>
                {series.map((s) => {
                  return (
                    <AreaSeries
                      key={s.id}
                      data={s.data}
                      dataKey={s.id}
                      fillOpacity={0.4}
                      xAccessor={xAccessor}
                      yAccessor={yAccessor}
                    />
                  );
                })}
              </AreaStack>
            )}
            {renderLineSeries && (
              <>
                {series.map((s) => {
                  return (
                    <LineSeries
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
                    <GlyphSeries
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
            <Axis
              key="x-axis"
              numTicks={axisNumTicks}
              orientation={xAxisOrientation}
              tickFormat={(x: number) =>
                xFormatter(x, { numTicks: axisNumTicks, zoom, zoomDomain })
              }
            />
            <Axis
              key="y-axis"
              numTicks={axisNumTicks}
              orientation={yAxisOrientation}
              tickFormat={
                stackOffset === 'wiggle'
                  ? () => ''
                  : (y: number) => yFormatter(y, { numTicks: axisNumTicks, zoom, zoomDomain })
              }
            />
            {typeof renderTooltip === 'function' ? (
              <Tooltip<VisxChartDatum>
                renderGlyph={
                  typeof renderTooltipGlyph === 'function' ? renderTooltipGlyph : undefined
                }
                renderTooltip={renderTooltip}
                showDatumGlyph={tooltipSnapTooltipToDatumX || tooltipSnapTooltipToDatumY}
                showHorizontalCrosshair={tooltipShowHorizontalCrosshair}
                showSeriesGlyphs={sharedTooltip}
                showVerticalCrosshair={tooltipShowVerticalCrosshairComputed}
                snapTooltipToDatumX={tooltipSnapTooltipToDatumX}
                snapTooltipToDatumY={tooltipSnapTooltipToDatumY}
              />
            ) : undefined}
          </XYChart>
        );
      }}
    </ParentSize>
  );
};
