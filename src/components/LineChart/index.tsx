import { linearGradientDef } from '@nivo/core';
import { ResponsiveLine } from '@nivo/line';
import { Property } from 'csstype';
import React, { useMemo } from 'react';

import { colors, ColorTokens, getColorFromToken } from '../../foundation/Colors';
import { TypographyToken } from '../Typography';
import { TypographyTokenConfigMap } from '../Typography/typography-token-config-map';
import { LineChartBox } from './LineChart.styled';
import { Tooltip } from './Tooltip/Tooltip';

export type LineChartProps = {
  data: {
    id: string;
    data: {
      x: Date;
      y: number;
    }[];
  }[];
  yMarker: number;
  yMarkerText: string;
  colorToken: ColorTokens;
  yMarkerColorToken: ColorTokens;
  yMarkerTypographyToken: TypographyToken;
  axisTypographyToken: TypographyToken;
};
const GRADIENT_ID = 'gradient';
export const LineChart: React.FunctionComponent<LineChartProps> = ({
  data,
  yMarker,
  yMarkerText,
  yMarkerColorToken = 'skyBlueCrayola',
  colorToken = 'ultramarineBlue',
  yMarkerTypographyToken = 'secondaryBodyXSmallRegular',
  axisTypographyToken = 'primaryBodyXSmallRegular',
}) => {
  const yMarkerTypography = TypographyTokenConfigMap[yMarkerTypographyToken].styleObject;
  const axisTypography = TypographyTokenConfigMap[axisTypographyToken].styleObject;
  const color = useMemo(() => getColorFromToken(colorToken), [colorToken]);
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
    return { min, max };
  }, [data]);

  return (
    <LineChartBox>
      <ResponsiveLine
        animate={true}
        areaBaselineValue={yScale.min}
        axisBottom={{
          format: '%d %b',
          tickSize: 0,
          tickPadding: 4,
          tickRotation: 0,
          legendOffset: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 8,
          tickRotation: 0,
          legendOffset: 32,
        }}
        axisRight={null}
        axisTop={null}
        colors={[color]}
        crosshairType="cross"
        curve="linear"
        data={data}
        defs={[
          linearGradientDef(GRADIENT_ID, [
            { offset: 0, color: color, opacity: 1 },
            { offset: 100, color: colors.liberty8, opacity: 1 },
          ]),
        ]}
        enableArea={true}
        enableGridX={false}
        enableGridY={false}
        fill={[{ match: '*', id: GRADIENT_ID }]}
        margin={{ top: 40, right: 0, bottom: 20, left: 40 }}
        markers={[
          {
            axis: 'y',
            value: yMarker,
            textStyle: {
              fontSize: parseInt(yMarkerTypography.fontSize as string, 10),
              fontFamily: yMarkerTypography.fontFamily as Property.FontFamily,
              fontWeight: parseInt(yMarkerTypography.fontWeight as string),
              fill: colors.lavenderWeb,
            },
            lineStyle: {
              stroke: getColorFromToken(yMarkerColorToken),
              strokeDasharray: 5,
              strokeWidth: 1,
            },
            legend: yMarkerText,
            legendPosition: 'top-left',
          },
        ]}
        pointBorderColor={{ from: 'serieColor' }}
        pointBorderWidth={3}
        pointColor={color}
        pointLabelYOffset={-1}
        pointSize={3}
        theme={{
          background: 'transparent',
          textColor: colors.lavenderWeb3,
          fontSize: parseInt(axisTypography.fontSize as string, 10),
          fontFamily: axisTypography.fontFamily as Property.FontFamily,
          crosshair: {
            line: {
              stroke: color,
              strokeWidth: 1,
            },
          },
          axis: {
            domain: {
              line: {
                stroke: colors.lavenderWeb8,
                strokeWidth: 1,
              },
            },
            ticks: {
              line: {
                stroke: colors.lavenderWeb3,
                strokeWidth: 1,
              },
              text: {
                fontSize: parseInt(axisTypography.fontSize as string, 10),
                fontFamily: axisTypography.fontFamily as Property.FontFamily,
                fontWeight: parseInt(axisTypography.fontWeight as string),
                fill: colors.lavenderWeb3,
              },
            },
          },
        }}
        tooltip={(point) => <Tooltip colorToken={colorToken} {...point} />}
        useMesh={true}
        xFormat="time:%H:%M - %b %d"
        xScale={{
          type: 'time',
          format: '%Y-%m-%d',
          useUTC: false,
          precision: 'millisecond',
        }}
        yFormat=" >-.2f"
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false,
        }}
      />
    </LineChartBox>
  );
};
