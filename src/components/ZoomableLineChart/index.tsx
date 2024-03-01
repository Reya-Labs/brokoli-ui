import React, { useState } from 'react';

import { LineChart, LineChartProps, XDataType } from '../LineChart';
import { useMinMaxXYSeries } from './useMinMaxXYSeries';
import { LineChartBox } from './ZoomableLineChart.styled';

export const ZoomableLineChart: React.FunctionComponent<LineChartProps> = (
  props: LineChartProps,
) => {
  const minMaxXYSeries = useMinMaxXYSeries(props.data);
  const initialMaxX = minMaxXYSeries.maxX;
  const initialMinX = minMaxXYSeries.minX;

  const [xScale, setXScale] = useState<{
    min: XDataType;
    max: XDataType;
  }>({
    max: initialMaxX,
    min: initialMinX,
  });

  const handleWheel = (event: React.WheelEvent) => {
    event.preventDefault();

    // calculate the zoom step based on the current scale
    const zoomStepX = 0.01 * (xScale.max.valueOf() - xScale.min.valueOf());

    // get the mouse position relative to the chart container
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;

    // apply the new scales, but ensure they stay within the initial range
    const { deltaY } = event.nativeEvent;
    if (deltaY > 0) {
      // Zooming in

      // calculate the new min and max values based on the zoom step and mouse position
      const newMinX = xScale.min.valueOf() + (x / rect.width) * zoomStepX;
      const newMaxX = xScale.max.valueOf() - ((rect.width - x) / rect.width) * zoomStepX;

      setXScale({
        max: new Date(Math.min(initialMaxX.valueOf(), newMaxX)),
        min: new Date(Math.max(initialMinX.valueOf(), newMinX)),
      });
    } else {
      // Zooming out

      const newMaxX = xScale.max.valueOf() + ((rect.width - x) / rect.width) * zoomStepX;
      const newMinX = xScale.min.valueOf() - (x / rect.width) * zoomStepX;

      setXScale({
        max: new Date(Math.min(initialMaxX.valueOf(), newMaxX)),
        min: new Date(Math.max(initialMinX.valueOf(), newMinX)),
      });
    }
  };

  const filterData = (data: LineChartProps['data']) => {
    const filteredData: LineChartProps['data'] = [];

    data.forEach((group) => {
      let leftMost: LineChartProps['data'][number]['data'][number] | null = null;
      let rightMost: LineChartProps['data'][number]['data'][number] | null = null;

      const filteredGroupData = group.data.filter((datum) => {
        const { x, y } = datum;
        const isInBounds = x >= xScale.min && x <= xScale.max && y >= yScale.min && y <= yScale.max;

        // Update leftMost and rightMost points
        if (x < xScale.min && (!leftMost || x > leftMost.x)) {
          leftMost = datum; // The closest point on the left
        }
        if (x > xScale.max && (!rightMost || x < rightMost.x)) {
          rightMost = datum; // The closest point on the right
        }

        return isInBounds;
      });

      // Add the leftMost and rightMost points if they exist
      if (leftMost) {
        filteredGroupData.unshift(leftMost);
      }
      if (rightMost) {
        filteredGroupData.push(rightMost);
      }

      filteredData.push({ ...group, data: filteredGroupData });
    });

    return filteredData;
  };
  const filteredData = filterData(props.data);

  return (
    <LineChartBox onWheel={handleWheel}>
      <LineChart {...props} data={filteredData} xScaleMax={xScale.max} xScaleMin={xScale.min} />
    </LineChartBox>
  );
};
