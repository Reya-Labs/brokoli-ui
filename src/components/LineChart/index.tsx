import { useTheme } from '@emotion/react';
import { linearGradientDef } from '@nivo/core';
import { ResponsiveLine } from '@nivo/line';
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
    data: {
      x: Date;
      y: number;
    }[];
  }[];
  yMarker?: YMarkerConfig;
  tooltip: TooltipConfig;
  colorToken: ColorTokens;
  axisTypographyToken: TypographyTokens;
  axisBottomFormat: 'minutes' | 'days' | 'hours';
};
const GRADIENT_ID = 'gradient';
export const LineChart: React.FunctionComponent<LineChartProps> = ({
  data,
  yMarker,
  axisBottomFormat,
  colorToken = 'secondary100',
  axisTypographyToken = 'bodyXSmallRegular',
  tooltip,
}) => {
  const theme = useTheme();
  const {
    typographyToken: yMarkerTypographyToken = 'bodyXSmallRegular',
    text: yMarkerText,
    colorToken: yMarkerColorToken = 'primary100',
    value: yMarkerValue,
  } = yMarker || {};
  const { tokenColorToken: tooltipTokenColorToken, token: tooltipToken } = tooltip || {};

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

  const color = useMemo(() => getColorFromToken({ colorToken, theme }), [theme, colorToken]);
  const yScale = useMemo(() => {
    const yS = data.reduce((pV, cI) => {
      const validData: number[] = cI.data
        .filter((d) => d.y !== null && d.y !== undefined)
        .map((d) => d.y);
      return [...pV, ...validData];
    }, [] as number[]);

    data[0].data.map((d) => d.y);
    const min = Math.min(...yS);
    const max = Math.max(...yS);
    return { max, min };
  }, [data]);

  return (
    <LineChartBox>
      <ResponsiveLine
        animate={true}
        areaBaselineValue={yScale.min}
        axisBottom={{
          format:
            axisBottomFormat === 'minutes'
              ? '%M:%S'
              : axisBottomFormat === 'hours'
              ? '%H:%M'
              : '%d %b',
          legendOffset: 16,
          tickPadding: 4,
          tickRotation: 0,
          tickSize: 0,
        }}
        axisLeft={{
          legendOffset: 32,
          tickPadding: 8,
          tickRotation: 0,
          tickSize: 0,
        }}
        axisRight={null}
        axisTop={null}
        colors={[color]}
        crosshairType="cross"
        curve="linear"
        data={data}
        defs={[
          linearGradientDef(GRADIENT_ID, [
            { color: color, offset: 0, opacity: 1 },
            { color: theme.colors.black900, offset: 100, opacity: 1 },
          ]),
        ]}
        enableArea={true}
        enableGridX={false}
        enableGridY={false}
        fill={[{ id: GRADIENT_ID, match: '*' }]}
        margin={{ bottom: 20, left: 40, right: 0, top: 40 }}
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
        pointColor={color}
        pointLabelYOffset={-1}
        pointSize={3}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: theme.colors.white900,
                strokeWidth: 1,
              },
            },
            ticks: {
              line: {
                stroke: theme.colors.white400,
                strokeWidth: 1,
              },
              text: {
                fill: theme.colors.white400,
                fontFamily: axisTypography.fontFamily as Property.FontFamily,
                fontSize: parseInt(axisTypography.fontSize, 10),
                fontWeight: parseInt(axisTypography.fontWeight),
              },
            },
          },
          background: 'transparent',
          crosshair: {
            line: {
              stroke: color,
              strokeWidth: 1,
            },
          },
          text: {
            color: theme.colors.white400,
            fontFamily: axisTypography.fontFamily as Property.FontFamily,
            fontSize: parseInt(axisTypography.fontSize, 10),
          },
        }}
        tooltip={(point) => (
          <Tooltip
            colorToken={colorToken}
            tokenColorToken={tooltipTokenColorToken}
            yToken={tooltipToken}
            {...point}
          />
        )}
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
          stacked: true,
          type: 'linear',
        }}
      />
    </LineChartBox>
  );
};
