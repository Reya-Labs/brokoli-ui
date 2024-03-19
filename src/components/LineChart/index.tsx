import { ResponsiveLine } from '@nivo/line';
import React from 'react';

import { useAxisProps } from './hooks/useAxisProps';
import { useChartMargin } from './hooks/useChartMargin';
import { useChartTheme } from './hooks/useChartTheme';
import { useColorsAndGradients } from './hooks/useColorsAndGradients';
import { useMinMaxYSeries } from './hooks/useMinMaxYSeries';
import { useTooltips } from './hooks/useTooltips';
import { useXScaleConfig } from './hooks/useXScaleConfig';
import { useYMarkerProps } from './hooks/useYMarkerProps';
import { LineChartBox } from './LineChart.styled';
import { Tooltip } from './Tooltip/Tooltip';
import { LineChartProps, XDataType, YDataType } from './types';
export * from './types';

const yFormatter = (y: YDataType) => parseFloat(y.toFixed(2)).toString();
const xFormatter = (x: XDataType) =>
  typeof x === 'number' ? parseFloat(x.toFixed(2)).toString() : x.toLocaleString();

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
  yScaleMax,
  yScaleMin,
  xScaleMax,
  xScaleMin,
  curveType = 'linear',
  xScaleType = 'time',
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
    xFormatter,
    xScaleType,
    yFormatter,
  });
  const xScaleProps = useXScaleConfig({
    xScaleMax,
    xScaleMin,
    xScaleType,
  });

  return (
    <LineChartBox>
      <ResponsiveLine
        areaBaselineValue={minMaxYSeries.min}
        axisBottom={axisProps.bottom}
        axisLeft={axisProps.left}
        axisRight={axisProps.right}
        axisTop={axisProps.top}
        colors={colors}
        crosshairType="cross"
        curve={curveType}
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
        xFormat={xScaleProps.xFormat}
        xScale={xScaleProps.xScale}
        yFormat={(c) => yFormatter(c as number)}
        yScale={{
          max: yScaleMax || 'auto',
          min: yScaleMin || 'auto',
          reverse: false,
          stacked: yScaleStacked,
          type: 'linear',
        }}
      />
    </LineChartBox>
  );
};
