import { linearGradientDef } from '@nivo/core';
import { ResponsiveLine } from '@nivo/line';
import { Property } from 'csstype';
import React, { useMemo } from 'react';

import { colors, ColorTokens, getColorFromToken } from '../../foundation/Colors';
import { typography } from '../../foundation/Typography';
import { TypographyToken } from '../Typography';
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
  axisBottomFormat: 'days' | 'hours';
};
const GRADIENT_ID = 'gradient';
export const LineChart: React.FunctionComponent<LineChartProps> = ({
  data,
  yMarker,
  axisBottomFormat,
  yMarkerText,
  yMarkerColorToken = 'skyBlueCrayola',
  colorToken = 'ultramarineBlue',
  yMarkerTypographyToken = 'secondaryBodyXSmallRegular',
  axisTypographyToken = 'primaryBodyXSmallRegular',
}) => {
  const yMarkerTypography = typography[yMarkerTypographyToken].styleObject;
  const axisTypography = typography[axisTypographyToken].styleObject;
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
    return { max, min };
  }, [data]);

  return (
    <LineChartBox>
      <ResponsiveLine
        animate={true}
        areaBaselineValue={yScale.min}
        axisBottom={{
          format: axisBottomFormat === 'hours' ? '%H:%M' : '%d %b',
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
            { color: colors.liberty8, offset: 100, opacity: 1 },
          ]),
        ]}
        enableArea={true}
        enableGridX={false}
        enableGridY={false}
        fill={[{ id: GRADIENT_ID, match: '*' }]}
        margin={{ bottom: 20, left: 40, right: 0, top: 40 }}
        markers={[
          {
            axis: 'y',
            legend: yMarkerText,
            legendPosition: 'top-left',
            lineStyle: {
              stroke: getColorFromToken(yMarkerColorToken),
              strokeDasharray: 5,
              strokeWidth: 1,
            },
            textStyle: {
              fill: colors.lavenderWeb,
              fontFamily: yMarkerTypography.fontFamily as Property.FontFamily,
              fontSize: parseInt(yMarkerTypography.fontSize, 10),
              fontWeight: parseInt(yMarkerTypography.fontWeight),
            },
            value: yMarker,
          },
        ]}
        pointBorderColor={{ from: 'serieColor' }}
        pointBorderWidth={3}
        pointColor={color}
        pointLabelYOffset={-1}
        pointSize={3}
        theme={{
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
                fill: colors.lavenderWeb3,
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
          fontFamily: axisTypography.fontFamily as Property.FontFamily,
          fontSize: parseInt(axisTypography.fontSize, 10),
          textColor: colors.lavenderWeb3,
        }}
        tooltip={(point) => <Tooltip colorToken={colorToken} {...point} />}
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
