import { useMemo } from 'react';

import { LineChartProps } from '../types';

export type UseMinMaxYSeriesResult = {
  max: number;
  min: number;
  yS: number[];
};

export const useMinMaxYSeries = (data: LineChartProps['data']): UseMinMaxYSeriesResult => {
  return useMemo(() => {
    const yS = data.reduce((pV, cI) => {
      const validData: number[] = cI.data
        .filter((d) => d.y !== null && d.y !== undefined)
        .map((d) => d.y);
      return [...pV, ...validData];
    }, [] as number[]);

    const min = Math.min(...yS);
    const max = Math.max(...yS);
    return { max, min, yS };
  }, [data]);
};
