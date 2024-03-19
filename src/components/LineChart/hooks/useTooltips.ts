import { useMemo } from 'react';

import { LineChartProps, LineChartTooltip } from '../types';

export const useTooltips = (
  data: LineChartProps['data'],
): {
  tooltips: Record<string, LineChartTooltip>;
} => {
  return useMemo(() => {
    return {
      tooltips: data.reduce(
        (pV, cI, index) => ({
          ...pV,
          [data[index].id]: data[index].tooltip,
        }),
        {} as Record<string, LineChartTooltip>,
      ),
    };
  }, [data]);
};
