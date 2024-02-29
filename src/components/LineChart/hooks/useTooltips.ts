import { useMemo } from 'react';

import { LineChartProps, TooltipConfig } from '../types';

export const useTooltips = (
  data: LineChartProps['data'],
): {
  tooltips: Record<string, TooltipConfig>;
} => {
  return useMemo(() => {
    return {
      tooltips: data.reduce(
        (pV, cI, index) => ({
          ...pV,
          [data[index].id]: data[index].tooltip,
        }),
        {} as Record<string, TooltipConfig>,
      ),
    };
  }, [data]);
};
