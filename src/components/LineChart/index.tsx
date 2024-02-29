import { useTheme } from '@emotion/react';
import { linearGradientDef } from '@nivo/core';
import { Datum, ResponsiveLine } from '@nivo/line';
import { Property } from 'csstype';
import React, { useMemo } from 'react';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';
import { useResponsiveQuery } from '../../foundation/Media';
import { getTypographyFromToken } from '../../foundation/Typography';
import { getTextWidth } from '../../utils/get-text-width';
import { LineChartBox } from './LineChart.styled';
import { Tooltip } from './Tooltip/Tooltip';
import { LineChartProps, TooltipConfig } from './types';
import { useMinMaxYSeries } from './useMinMaxYSeries';
export * from './types';

const yFormatter = (y: LineChartProps['data'][number]['data'][number]['y']) =>
  parseFloat(y.toFixed(2)).toString();
export const LineChart: React.FunctionComponent<LineChartProps> = ({
  data,
  yMarker,
  axisBottomFormat,
  axisTypographyToken = 'bodyXSmallRegular',
  yScaleStacked = false,
  enablePoints = false,
  crosshairColorToken = 'primary500',
  axisTicksTextColorToken = 'white400',
  axisDomainLineColorToken = 'white900',
  visibleAxis = ['left', 'bottom'],
  axisTickPadding = 8,
}) => {
  const theme = useTheme();
  const {
    typographyToken: yMarkerTypographyToken = 'bodyXSmallRegular',
    text: yMarkerText,
    colorToken: yMarkerColorToken = 'primary100',
    value: yMarkerValue,
  } = yMarker || {};

  const yMarkerTypographyConfig = getTypographyFromToken({
    theme,
    token: yMarkerTypographyToken,
  });
  const axisTypographyConfig = getTypographyFromToken({
    theme,
    token: axisTypographyToken,
  });
  const { isSmallDesktopDeviceAndUp, isTabletDeviceAndUp, isMobileDeviceAndUp } =
    useResponsiveQuery();
  const yMarkerTypography = isMobileDeviceAndUp
    ? yMarkerTypographyConfig.mobileDevice
    : isTabletDeviceAndUp
    ? yMarkerTypographyConfig.tabletDevice
    : isSmallDesktopDeviceAndUp
    ? yMarkerTypographyConfig.smallDesktopDevice
    : yMarkerTypographyConfig.largeDesktopDevice;
  const axisTypography = isMobileDeviceAndUp
    ? axisTypographyConfig.mobileDevice
    : isTabletDeviceAndUp
    ? axisTypographyConfig.tabletDevice
    : isSmallDesktopDeviceAndUp
    ? axisTypographyConfig.smallDesktopDevice
    : axisTypographyConfig.largeDesktopDevice;
  const axisFontSize = parseInt(axisTypography.fontSize, 10);
  const axisFontFamily = axisTypography.fontFamily;

  const { tooltips, colorTokensMap, colors, gradients } = useMemo(() => {
    const memoColors = data.map((d) => getColorFromToken({ colorToken: d.colorToken, theme }));
    const memoGradients = data.map((d, index) => {
      return linearGradientDef(d.id, [
        { color: memoColors[index], offset: 0, opacity: 1 },
        { color: theme.colors.black300, offset: 100, opacity: 1 },
      ]);
    });
    return {
      colorTokensMap: data.reduce(
        (pV, cI, index) => ({
          ...pV,
          [data[index].id]: data[index].colorToken,
        }),
        {} as Record<string, ColorTokens>,
      ),
      colors: memoColors,
      gradients: {
        defs: memoGradients,
        fill: memoGradients.map((g) => ({ id: g.id, match: (point: Datum) => point.id === g.id })),
        ids: memoGradients.map((g) => g.id),
      },
      tooltips: data.reduce(
        (pV, cI, index) => ({
          ...pV,
          [data[index].id]: data[index].tooltip,
        }),
        {} as Record<string, TooltipConfig>,
      ),
    };
  }, [theme, data]);

  const minMaxYSeries = useMinMaxYSeries(data);
  const yS = minMaxYSeries.yS;

  const yAxisUI = useMemo(() => {
    if ((yS || []).length === 0) {
      return { yMargin: 2 * axisTickPadding };
    }

    const yMargin =
      Math.max(
        ...yS.map((y) =>
          getTextWidth({
            fontFamily: axisFontFamily,
            fontSize: axisFontSize,
            text: yFormatter(y),
          }),
        ),
      ) +
      2 * axisTickPadding;
    return { yMargin };
  }, [axisFontFamily, axisTickPadding, axisFontSize, yS]);

  const crossHairColor = getColorFromToken({ colorToken: crosshairColorToken, theme });
  const axisTicksTextColor = getColorFromToken({ colorToken: axisTicksTextColorToken, theme });
  const axisDomainLineColor =
    axisDomainLineColorToken === 'transparent'
      ? 'transparent'
      : getColorFromToken({ colorToken: axisDomainLineColorToken, theme });
  const axisVisible = useMemo(() => {
    return {
      bottom: visibleAxis.indexOf('bottom') !== -1,
      left: visibleAxis.indexOf('left') !== -1,
      right: visibleAxis.indexOf('right') !== -1,
      top: visibleAxis.indexOf('top') !== -1,
    };
  }, [visibleAxis]);

  const axisTopBottomConfig = {
    format:
      axisBottomFormat === 'minutes' ? '%M:%S' : axisBottomFormat === 'hours' ? '%H:%M' : '%d %b',
    legendOffset: 0,
    tickPadding: axisTickPadding,
    tickRotation: 0,
    tickSize: 0,
  };
  const axisLeftRightConfig = {
    format: yFormatter,
    legendOffset: 0,
    tickPadding: axisTickPadding,
    tickRotation: 0,
    tickSize: 0,
  };

  return (
    <LineChartBox>
      <ResponsiveLine
        animate={true}
        areaBaselineValue={minMaxYSeries.min}
        axisBottom={axisVisible.bottom ? axisTopBottomConfig : null}
        axisLeft={axisVisible.left ? axisLeftRightConfig : null}
        axisRight={axisVisible.right ? axisLeftRightConfig : null}
        axisTop={axisVisible.top ? axisTopBottomConfig : null}
        colors={colors}
        crosshairType="cross"
        curve="linear"
        data={data}
        defs={gradients.defs}
        enableArea={true}
        enableGridX={false}
        enableGridY={false}
        enablePoints={enablePoints}
        fill={gradients.fill}
        margin={{
          bottom: axisVisible.bottom ? axisFontSize * 2 : 0,
          left: axisVisible.left ? yAxisUI.yMargin : 0,
          right: axisVisible.right ? yAxisUI.yMargin : 0,
          top: axisVisible.top ? axisFontSize * 2 : axisFontSize,
        }}
        markers={
          yMarker
            ? [
                {
                  axis: 'y',
                  legend: yMarkerText,
                  legendPosition: 'top-left',
                  lineStyle: {
                    stroke: getColorFromToken({ colorToken: yMarkerColorToken, theme }),
                    strokeDasharray: 5,
                    strokeWidth: 1,
                  },
                  textStyle: {
                    fill: theme.colors.white100,
                    fontFamily: yMarkerTypography.fontFamily as Property.FontFamily,
                    fontSize: parseInt(yMarkerTypography.fontSize, 10),
                    fontWeight: parseInt(yMarkerTypography.fontWeight),
                  },
                  value: yMarkerValue!,
                },
              ]
            : []
        }
        pointBorderColor={{ from: 'serieColor' }}
        pointBorderWidth={3}
        pointColor={colors}
        pointLabelYOffset={-1}
        pointSize={3}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: axisDomainLineColor,
                strokeWidth: 1,
              },
            },
            ticks: {
              line: {
                stroke: theme.colors.white400,
                strokeWidth: 1,
              },
              text: {
                fill: axisTicksTextColor,
                fontFamily: axisFontFamily as Property.FontFamily,
                fontSize: axisFontSize,
                fontWeight: parseInt(axisTypography.fontWeight),
              },
            },
          },
          background: 'transparent',
          crosshair: {
            line: {
              stroke: crossHairColor,
              strokeWidth: 1,
            },
          },
          text: {
            color: theme.colors.white400,
            fontFamily: axisFontFamily as Property.FontFamily,
            fontSize: axisFontSize,
          },
        }}
        tooltip={(point) => {
          const tooltip = tooltips[point.point.serieId] || {};
          const { tokenColorToken: tooltipTokenColorToken, token: tooltipToken } = tooltip;
          return (
            <Tooltip
              colorToken={colorTokensMap[point.point.serieId]}
              tokenColorToken={tooltipTokenColorToken}
              yToken={tooltipToken}
              {...point}
            />
          );
        }}
        useMesh={true}
        xFormat="time:%H:%M - %b %d"
        xScale={{
          format: '%Y-%m-%d',
          precision: 'millisecond',
          type: 'time',
          useUTC: false,
        }}
        yFormat={(c) => yFormatter(c as number)}
        yScale={{
          max: 'auto',
          min: 'auto',
          reverse: false,
          stacked: yScaleStacked,
          type: 'linear',
        }}
      />
    </LineChartBox>
  );
};
