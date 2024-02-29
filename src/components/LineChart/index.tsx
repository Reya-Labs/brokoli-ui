import { ResponsiveLine } from '@nivo/line';
import { ScaleLinearSpec, ScaleTimeSpec } from '@nivo/scales/dist/types/types';
import React, { useState } from 'react';

import { useAxisProps } from './hooks/useAxisProps';
import { useChartMargin } from './hooks/useChartMargin';
import { useChartTheme } from './hooks/useChartTheme';
import { useColorsAndGradients } from './hooks/useColorsAndGradients';
import { useMinMaxXSeries } from './hooks/useMinMaxXSeries';
import { useMinMaxYSeries } from './hooks/useMinMaxYSeries';
import { useTooltips } from './hooks/useTooltips';
import { useYMarkerProps } from './hooks/useYMarkerProps';
import { LineChartBox } from './LineChart.styled';
import { Tooltip } from './Tooltip/Tooltip';
import { LineChartProps, XDataType, YDataType } from './types';
export * from './types';

const yFormatter = (y: YDataType) => parseFloat(y.toFixed(2)).toString();

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
  const minMaxXSeries = useMinMaxXSeries(data);
  const minMaxYSeries = useMinMaxYSeries(data);
  const initialXScale: { min: XDataType; max: XDataType } & ScaleTimeSpec = {
    format: '%Y-%m-%d',
    max: minMaxXSeries.max,
    min: minMaxXSeries.min,
    precision: 'millisecond',
    type: 'time',
    useUTC: false,
  };
  const initialYScale: { min: YDataType; max: YDataType } & ScaleLinearSpec = {
    max: minMaxYSeries.max,
    min: minMaxYSeries.min,
    reverse: false,
    stacked: yScaleStacked,
    type: 'linear',
  };
  const initialMaxX = initialXScale.max;
  const initialMinX = initialXScale.min;
  const initialMaxY = initialYScale.max;
  const initialMinY = initialYScale.min;

  const [xScale, setXScale] = useState(initialXScale);
  const [yScale, setYScale] = useState(initialYScale);

  const handleWheel = (event: React.WheelEvent) => {
    event.preventDefault();

    // calculate the zoom step based on the current scale
    const zoomStepX = 0.01 * (xScale.max.valueOf() - xScale.min.valueOf());
    const zoomStepY = 0.01 * (yScale.max - yScale.min);

    // get the mouse position relative to the chart container
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // apply the new scales, but ensure they stay within the initial range
    const { deltaY } = event.nativeEvent;
    if (deltaY > 0) {
      // Zooming in

      // calculate the new min and max values based on the zoom step and mouse position
      const newMinX = xScale.min.valueOf() + (x / rect.width) * zoomStepX;
      const newMaxX = xScale.max.valueOf() - ((rect.width - x) / rect.width) * zoomStepX;

      const newMinY = yScale.min + (y / rect.height) * zoomStepY;
      const newMaxY = yScale.max - ((rect.height - y) / rect.height) * zoomStepY;

      setXScale({
        ...xScale,
        max: new Date(Math.min(initialMaxX.valueOf(), newMaxX)),
        min: new Date(Math.max(initialMinX.valueOf(), newMinX)),
      });
      setYScale({
        ...yScale,
        max: Math.min(initialMaxY, newMaxY),
        min: Math.max(initialMinY, newMinY),
      });
    } else {
      // Zooming out

      const newMaxX = xScale.max.valueOf() + ((rect.width - x) / rect.width) * zoomStepX;
      const newMinX = xScale.min.valueOf() - (x / rect.width) * zoomStepX;
      const newMaxY = yScale.max + ((rect.height - y) / rect.height) * zoomStepY;
      const newMinY = yScale.min - (y / rect.height) * zoomStepY;

      setXScale({
        ...xScale,
        max: new Date(Math.min(initialMaxX.valueOf(), newMaxX)),
        min: new Date(Math.max(initialMinX.valueOf(), newMinX)),
      });
      setYScale({
        ...yScale,
        max: Math.min(initialMaxY, newMaxY),
        min: Math.max(initialMinY, newMinY),
      });
    }
  };
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
  console.log('### x', xScale.max.valueOf(), xScale.min.valueOf());
  console.log('### y', yScale.max, yScale.min);
  return (
    <LineChartBox onWheel={handleWheel}>
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
        xScale={xScale}
        yFormat={(c) => yFormatter(c as number)}
        yScale={yScale}
      />
    </LineChartBox>
  );
};
