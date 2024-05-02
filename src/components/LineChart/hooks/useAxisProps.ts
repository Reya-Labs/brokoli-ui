import { AxisProps } from '@nivo/axes';
import { useMemo } from 'react';

import { LineChartProps, XDataType, YDataType } from '../types';
import { useAxisVisible } from './useAxisVisible';

type UseAxisPropsParams = {
  axisBottomFormat: LineChartProps['axisBottomFormat'];
  axisTickPadding: LineChartProps['axisTickPadding'];
  visibleAxis: LineChartProps['visibleAxis'];
  xFormatter: (x: XDataType) => string;
  xScaleType: LineChartProps['xScaleType'];
  yFormatter: (y: YDataType) => string;
};

export const useAxisProps = ({
  visibleAxis = ['left', 'bottom'],
  yFormatter,
  axisTickPadding,
  xFormatter,
  axisBottomFormat,
  xScaleType,
}: UseAxisPropsParams): {
  bottom?: AxisProps | null;
  left?: AxisProps | null;
  right?: AxisProps | null;
  top?: AxisProps | null;
} => {
  const axisVisible = useAxisVisible(visibleAxis);

  return useMemo(() => {
    const axisTopBottomConfig = {
      format:
        xScaleType === 'time'
          ? axisBottomFormat === 'minutes' || axisBottomFormat === 'hours'
            ? '%H:%M'
            : '%d %b'
          : xFormatter,
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
