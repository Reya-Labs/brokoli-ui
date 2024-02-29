import React, { useState } from 'react';

import { LineChart, LineChartProps, XDataType, YDataType } from '../LineChart';
import { useMinMaxXYSeries } from './useMinMaxXYSeries';
import { LineChartBox } from './ZoomableLineChart.styled';

export const ZoomableLineChart: React.FunctionComponent<LineChartProps> = (
  props: LineChartProps,
) => {
  const minMaxXYSeries = useMinMaxXYSeries(props.data);
  const initialMaxX = minMaxXYSeries.maxX;
  const initialMinX = minMaxXYSeries.minX;
  const initialMaxY = minMaxXYSeries.maxY;
  const initialMinY = minMaxXYSeries.minY;

  const [xScale, setXScale] = useState<{
    min: XDataType;
    max: XDataType;
  }>({
    max: initialMaxX,
    min: initialMinX,
  });
  const [yScale, setYScale] = useState<{
    min: YDataType;
    max: YDataType;
  }>({
    max: initialMaxY,
    min: initialMinY,
  });

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
        max: new Date(Math.min(initialMaxX.valueOf(), newMaxX)),
        min: new Date(Math.max(initialMinX.valueOf(), newMinX)),
      });
      setYScale({
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
        max: new Date(Math.min(initialMaxX.valueOf(), newMaxX)),
        min: new Date(Math.max(initialMinX.valueOf(), newMinX)),
      });
      setYScale({
        max: Math.min(initialMaxY, newMaxY),
        min: Math.max(initialMinY, newMinY),
      });
    }
  };

  return (
    <LineChartBox onWheel={handleWheel}>
      <LineChart
        {...props}
        xScaleMax={xScale.max}
        xScaleMin={xScale.min}
        yScaleMax={yScale.max}
        yScaleMin={yScale.min}
      />
    </LineChartBox>
  );
};
