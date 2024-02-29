import { ResponsiveLine } from '@nivo/line';
import React from 'react';

import { LineChartBox } from './LineChart.styled';
import { Tooltip } from './Tooltip/Tooltip';
import { LineChartProps } from './types';
import { useAxisProps } from './useAxisProps';
import { useChartMargin } from './useChartMargin';
import { useChartTheme } from './useChartTheme';
import { useColorsAndGradients } from './useColorsAndGradients';
import { useMinMaxYSeries } from './useMinMaxYSeries';
import { useTooltips } from './useTooltips';
import { useYMarkerProps } from './useYMarkerProps';
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
  const chartTheme = useChartTheme({
    axisDomainLineColorToken,
    axisTicksTextColorToken,
    axisTypographyToken,
    crosshairColorToken,
  });
  const axisFontFamily = chartTheme.axis.ticks.text.fontFamily;
  const axisFontSize = chartTheme.axis.ticks.text.fontSize;
  const { tooltips } = useTooltips(data);
  const { colorTokensMap, colors, gradients } = useColorsAndGradients(data);
  const minMaxYSeries = useMinMaxYSeries(data);
  const yMarkerProps = useYMarkerProps({ yMarker });
  const chartMargin = useChartMargin({
    axisFontFamily,
    axisFontSize,
    axisTickPadding,
    visibleAxis,
    yFormatter,
    yS: minMaxYSeries.yS,
  });
  const axisProps = useAxisProps({
    axisBottomFormat,
    axisTickPadding,
    visibleAxis,
    yFormatter,
  });

  return (
    <LineChartBox>
      <ResponsiveLine
        animate={true}
        areaBaselineValue={minMaxYSeries.min}
        axisBottom={axisProps.bottom}
        axisLeft={axisProps.left}
        axisRight={axisProps.right}
        axisTop={axisProps.top}
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
        margin={chartMargin}
        markers={yMarkerProps ? [yMarkerProps] : []}
        pointBorderColor={{ from: 'serieColor' }}
        pointBorderWidth={3}
        pointColor={colors}
        pointLabelYOffset={-1}
        pointSize={3}
        theme={chartTheme}
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
