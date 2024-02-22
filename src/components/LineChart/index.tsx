import { useTheme } from '@emotion/react';
import { linearGradientDef } from '@nivo/core';
import { Datum, ResponsiveLine } from '@nivo/line';
import { Property } from 'csstype';
import React, { useMemo } from 'react';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';
import { useResponsiveQuery } from '../../foundation/Media';
import { getTypographyFromToken, TypographyTokens } from '../../foundation/Typography';
import { LineChartBox } from './LineChart.styled';
import { Tooltip } from './Tooltip/Tooltip';

type YMarkerConfig = {
  value: number;
  text: string;
  colorToken: ColorTokens;
  typographyToken: TypographyTokens;
};
type TooltipConfig = {
  token: string;
  tokenColorToken: ColorTokens;
};

export type LineChartProps = {
  data: {
    id: string;
    colorToken: ColorTokens;
    tooltip: TooltipConfig;
    data: {
      x: Date;
      y: number;
    }[];
  }[];
  yMarker?: YMarkerConfig;
  axisTypographyToken: TypographyTokens;
  axisBottomFormat: 'minutes' | 'days' | 'hours';
  yScaleStacked?: boolean;
  crosshairColorToken: ColorTokens;
  axisTicksTextColorToken?: ColorTokens;
  axisDomainLineColorToken?: ColorTokens | 'transparent';
  visibleAxis?: ('top' | 'bottom' | 'right' | 'left')[];
};

export const LineChart: React.FunctionComponent<LineChartProps> = ({
  data,
  yMarker,
  axisBottomFormat,
  axisTypographyToken = 'bodyXSmallRegular',
  yScaleStacked = false,
  crosshairColorToken = 'primary500',
  axisTicksTextColorToken = 'white400',
  axisDomainLineColorToken = 'white900',
  visibleAxis = ['left', 'bottom'],
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
  const yScale = useMemo(() => {
    const yS = data.reduce((pV, cI) => {
      const validData: number[] = cI.data
        .filter((d) => d.y !== null && d.y !== undefined)
        .map((d) => d.y);
      return [...pV, ...validData];
    }, [] as number[]);

    const min = Math.min(...yS);
    const max = Math.max(...yS);
    return { max, min };
  }, [data]);
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
    legendOffset: 16,
    tickPadding: 4,
    tickRotation: 0,
    tickSize: 0,
  };
  const axisLeftRightConfig = {
    legendOffset: 32,
    tickPadding: 8,
    tickRotation: 0,
    tickSize: 0,
  };

  return (
    <LineChartBox>
      <ResponsiveLine
        animate={true}
        areaBaselineValue={yScale.min}
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
        fill={gradients.fill}
        margin={{ bottom: 20, left: 40, right: 40, top: 20 }}
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
                fontFamily: axisTypography.fontFamily as Property.FontFamily,
                fontSize: parseInt(axisTypography.fontSize, 10),
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
            fontFamily: axisTypography.fontFamily as Property.FontFamily,
            fontSize: parseInt(axisTypography.fontSize, 10),
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
        yFormat=" >-.2f"
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
