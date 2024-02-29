import { AxisProps } from '@nivo/axes';
import { useMemo } from 'react';

import { LineChartProps } from '../types';
import { useAxisVisible } from './useAxisVisible';

type UseAxisPropsParams = {
  visibleAxis: LineChartProps['visibleAxis'];
  yFormatter: (y: LineChartProps['data'][number]['data'][number]['y']) => string;
  axisTickPadding: LineChartProps['axisTickPadding'];
  axisBottomFormat: LineChartProps['axisBottomFormat'];
};

export const useAxisProps = ({
  visibleAxis = ['left', 'bottom'],
  yFormatter,
  axisTickPadding,
  axisBottomFormat,
}: UseAxisPropsParams): {
  top?: AxisProps | null;
  right?: AxisProps | null;
  bottom?: AxisProps | null;
  left?: AxisProps | null;
} => {
  const axisVisible = useAxisVisible(visibleAxis);

  return useMemo(() => {
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
    return {
      bottom: axisVisible.bottom ? axisTopBottomConfig : null,
      left: axisVisible.left ? axisLeftRightConfig : null,
      right: axisVisible.right ? axisLeftRightConfig : null,
      top: axisVisible.top ? axisTopBottomConfig : null,
    };
  }, [visibleAxis, yFormatter, axisTickPadding, axisBottomFormat, axisVisible]);
};
