import { useMemo } from 'react';

import { LineChartProps } from '../types';

export const useAxisVisible = (visibleAxis: LineChartProps['visibleAxis'] = ['left', 'bottom']) => {
  return useMemo(() => {
    return {
      bottom: visibleAxis.indexOf('bottom') !== -1,
      left: visibleAxis.indexOf('left') !== -1,
      right: visibleAxis.indexOf('right') !== -1,
      top: visibleAxis.indexOf('top') !== -1,
    };
  }, [visibleAxis]);
};
