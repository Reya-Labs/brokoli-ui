import { useTheme } from '@emotion/react';
import { curveCardinal, curveLinear, curveStep, curveStepAfter } from '@visx/curve';
import { ParentSize } from '@visx/responsive';
import {
  AreaSeries,
  AreaStack,
  Axis,
  buildChartTheme,
  GlyphSeries,
  Grid,
  LineSeries,
  TooltipContext,
  TooltipContextType,
  TooltipProvider,
  XYChart,
} from '@visx/xychart';
import _range from 'lodash/range';
import React, { useContext, useMemo, useState } from 'react';

import { getColorFromToken } from '../../foundation/Colors';
import { useResponsiveQuery } from '../../foundation/Media';
import { getTypographyFromToken } from '../../foundation/Typography';
import { getTextWidth } from '../../utils/get-text-width';
import { allTimeUnits, clamp, formatAbsoluteTime, objectEntries } from './helpers';
import { VisxChartDatum, VisxChartProps } from './types';
import { VisxChartTooltip } from './VisxChartTooltip';
import { YAxisBackground } from './YAxisBackground';

export const defaultXAxisTickTimeFormatter: NonNullable<VisxChartProps['xAxisTickFormatter']> = (
  xValue,
  options,
) => {
  const { zoomDomain } = options || {};
  let resolutionUnit: keyof typeof allTimeUnits = 'year';
  if (zoomDomain) {
    resolutionUnit =
      objectEntries(allTimeUnits)
        .sort((a, b) => a[1] - b[1])
        .find(([, milliseconds]) => zoomDomain <= milliseconds)?.[0] ?? 'year';
  }

  return formatAbsoluteTime(xValue, {
    locale: window.navigator.language,
    resolutionUnit,
  });
};
export const defaultXAxisTickLinearFormatter: NonNullable<VisxChartProps['yAxisTickFormatter']> = (
  xValue,
) => parseFloat(xValue.toFixed(2)).toString();

export const defaultYAxisTickFormatter: NonNullable<VisxChartProps['yAxisTickFormatter']> = (
  yValue,
) => parseFloat(yValue.toFixed(2)).toString();

const xAccessor = (d: VisxChartDatum) => d.x;
const yAccessor = (d: VisxChartDatum) => d.y;
const defaultDatum = { x: 0, y: 0 };

export { VisxChartDatum, VisxChartProps };
const _VisxChart = ({
  yAxisTickFormatter = defaultYAxisTickFormatter,
  xAxisTickFormatter: xAxisTickFormatterProps,
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
  xAxisOrientation = 'bottom',
  yAxisOrientation = 'right',
  chartType = 'line',
  minZoomDomain = 4 * 60 * 60 * 1000,
  axisDomainLineColorToken,
  axisTicksTextColorToken,
  axisTypographyToken,
  tickLength = 4,
  crosshairColorToken,
  marginLeft = 'auto',
  marginRight = 'auto',
  yRangePercentageOffset = 0,
  disableZoom = false,
  xScaleType = 'time',
}: VisxChartProps) => {
  const theme = useTheme();
  const xAxisTickFormatter =
    typeof xAxisTickFormatterProps === 'function'
      ? xAxisTickFormatterProps
      : xScaleType === 'linear'
      ? defaultXAxisTickLinearFormatter
      : defaultXAxisTickTimeFormatter;

  const { hideTooltip } = useContext(TooltipContext) as TooltipContextType<VisxChartDatum>;
  const { isSmallDesktopDeviceAndUp, isTabletDeviceAndUp, isMobileDeviceAndUp } =
    useResponsiveQuery();

  const renderLineSeries = chartType === 'line';
  const renderAreaSeries = chartType === 'area';
  const renderAreaStack = chartType === 'areastack';
  const renderGlyphSeries = chartType === 'glyph';
  const tooltipShowVerticalCrosshairComputed =
    chartType === 'areastack' || tooltipShowVerticalCrosshair;

  const seriesColors = series.map((s) => getColorFromToken({ colorToken: s.colorToken, theme }));
  const axisDomainLineColor =
    axisDomainLineColorToken === 'transparent'
      ? 'transparent'
      : getColorFromToken({ colorToken: axisDomainLineColorToken, theme });
  const axisTicksTextColor = getColorFromToken({ colorToken: axisTicksTextColorToken, theme });

  const chartTheme = useMemo(() => {
    const axisTypographyConfig = getTypographyFromToken({
      theme,
      token: axisTypographyToken,
    });
    const axisTypography = isMobileDeviceAndUp
      ? axisTypographyConfig.mobileDevice
      : isTabletDeviceAndUp
      ? axisTypographyConfig.tabletDevice
      : isSmallDesktopDeviceAndUp
      ? axisTypographyConfig.smallDesktopDevice
      : axisTypographyConfig.largeDesktopDevice;
    const axisFontSize = parseInt(axisTypography.fontSize, 10);
    const axisFontFamily = axisTypography.fontFamily;

    return {
      axisFontFamily,
      axisFontSize,
      visxTheme: buildChartTheme({
        backgroundColor: 'transparent',
        colors: seriesColors,
        gridColor: 'transparent',
        gridColorDark: 'transparent',
        svgLabelBig: { fill: '#1d1b38' },
        tickLength,
        xAxisLineStyles: {
          stroke: axisDomainLineColor,
        },
        yAxisLineStyles: {
          stroke: axisDomainLineColor,
        },
      }),
    };
  }, [
    theme,
    axisTypographyToken,
    isMobileDeviceAndUp,
    isTabletDeviceAndUp,
    isSmallDesktopDeviceAndUp,
    seriesColors,
    tickLength,
    axisDomainLineColor,
  ]);

  const data = useMemo(
    () => series.reduce((pV, cI) => [...pV, ...cI.data], [] as VisxChartDatum[]),
    [series],
  );
  const earliestDatum = data[0] || defaultDatum;
  const latestDatum = data[data.length - 1] || defaultDatum;

  // Chart state
  const [zoomDomain, setZoomDomain] = useState<number>(latestDatum.x - earliestDatum.x);

  const axisFontFamily = chartTheme.axisFontFamily;
  const axisFontSize = chartTheme.axisFontSize;
  const marginComputationalValue = yAxisOrientation === 'right' ? marginRight : marginLeft;
  // Computations
  const { marginLeftOrRight, zoom, domain, range } = useMemo(() => {
    if (!zoomDomain) return { domain: [0, 0], marginLeftOrRight: 0, range: [0, 0], zoom: 0 };

    const zoomComputed = zoomDomain / minZoomDomain;

    const [xMin, xMax] = [
      clamp(latestDatum.x - zoomDomain, earliestDatum.x, latestDatum.x),
      latestDatum.x,
    ];

    const visibleDataComputed = data.filter((datum) => datum.x >= xMin && datum.x <= xMax);
    const yS = visibleDataComputed.map((d) => d.y);
    const [yMin, yMax] = yS.reduce((r, y) => [Math.min(r[0], y), Math.max(r[1], y)] as const, [
      Infinity,
      -Infinity,
    ] as const);

    const yTickValues = _range(yMin, yMax, axisNumTicks);
    const widths =
      marginComputationalValue === 'auto'
        ? yTickValues.map((d) =>
            getTextWidth({
              domElement: 'svg-text',
              style: {
                fontFamily: axisFontFamily,
                fontSize: `${axisFontSize}px`,
                letterSpacing: '0.4px',
              },
              text: yAxisTickFormatter(d),
            }),
          )
        : [];
    const marginLeftOrRightComputed =
      widths.length > 0
        ? Math.max(...widths)
        : marginComputationalValue !== 'auto'
        ? marginComputationalValue
        : 0;

    return {
      domain: [xMin, xMax],
      marginLeftOrRight: marginLeftOrRightComputed + tickLength * 2,
      range: [
        yMin - (yMin * yRangePercentageOffset) / 100,
        yMax + (yMax * yRangePercentageOffset) / 100,
      ],
      zoom: zoomComputed,
    };
  }, [
    marginComputationalValue,
    tickLength,
    zoomDomain,
    minZoomDomain,
    latestDatum.x,
    earliestDatum.x,
    data,
    axisNumTicks,
    axisFontFamily,
    axisFontSize,
    yAxisTickFormatter,
    yRangePercentageOffset,
  ]);
  const marginTopOrBottom = chartTheme.axisFontSize + tickLength * 2;
  const margin = {
    bottom: xAxisOrientation === 'top' ? 8 : marginTopOrBottom,
    left: yAxisOrientation === 'right' ? 0 : marginLeftOrRight,
    right: yAxisOrientation === 'left' ? 0 : marginLeftOrRight,
    top: xAxisOrientation === 'bottom' ? 8 : marginTopOrBottom,
  };
  const tickLabelProps = {
    fontFamily: axisFontFamily,
    fontSize: axisFontSize,
    letterSpacing: 0.4,
    stroke: axisTicksTextColor,
  };

  const curve = useMemo(() => {
    if (zoom <= 12) return curveStepAfter;
    if (curveType === 'cardinal') return curveCardinal;
    if (curveType === 'step') return curveStep;
    return curveLinear;
  }, [curveType, zoom]);

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
    hideTooltip();
  };

  return (
    <ParentSize onWheel={disableZoom ? undefined : onWheel}>
      {({ width, height }) => {
        return (
          <XYChart
            height={height}
            margin={margin}
            theme={chartTheme.visxTheme}
            width={width}
            xScale={{
              clamp: false,
              domain: [...domain],
              nice: false,
              type: xScaleType,
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
              key="grid"
              columns={showGridColumns}
              lineStyle={{
                stroke: theme.colors.white950,
                strokeDasharray: '4',
                strokeWidth: 1,
              }}
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
                      fillOpacity={0.1}
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
                      fillOpacity={0.2}
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
              stroke={axisDomainLineColor}
              tickFormat={(x: number) =>
                xAxisTickFormatter(x, { numTicks: axisNumTicks, zoom, zoomDomain })
              }
              tickLabelProps={tickLabelProps}
              tickStroke={axisDomainLineColor}
            />
            {yAxisOrientation === 'left' && margin.left > 0 && (
              <YAxisBackground height="100%" width={margin.left} x="0" y="0" />
            )}
            {yAxisOrientation === 'right' && margin.right > 0 && (
              <YAxisBackground height="100%" width={margin.right} x={width - margin.right} y="0" />
            )}
            <Axis
              key="y-axis"
              numTicks={axisNumTicks}
              orientation={yAxisOrientation}
              stroke={axisDomainLineColor}
              tickFormat={
                stackOffset === 'wiggle'
                  ? () => ''
                  : (y: number) =>
                      yAxisTickFormatter(y, { numTicks: axisNumTicks, zoom, zoomDomain })
              }
              tickLabelProps={tickLabelProps}
              tickStroke={axisDomainLineColor}
            />
            {typeof renderTooltip === 'function' ? (
              <VisxChartTooltip
                crosshairColorToken={crosshairColorToken}
                renderGlyph={renderTooltipGlyph}
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

export const VisxChart: React.FunctionComponent<VisxChartProps> = (props) => {
  return (
    <TooltipProvider hideTooltipDebounceMs={0}>
      <_VisxChart {...props} />
    </TooltipProvider>
  );
};
