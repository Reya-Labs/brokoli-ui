import { useMemo } from 'react';

import { LineChartProps, XDataType } from '../types';

export type UseMinMaxXSeriesResult = {
  max: XDataType;
  min: XDataType;
  xS: XDataType[];
};

export const useMinMaxXSeries = (data: LineChartProps['data']): UseMinMaxXSeriesResult => {
  return useMemo(() => {
    const xS = data.reduce((pV, cI) => {
      const validData: XDataType[] = cI.data
        .filter((d) => d.x !== null && d.x !== undefined)
        .map((d) => d.x);
      return [...pV, ...validData];
    }, [] as XDataType[]);
    const xSAsNumber = xS.map((x) => x.valueOf());
    const min = new Date(Math.min(...xSAsNumber));
    const max = new Date(Math.max(...xSAsNumber));

    return { max, min, xS };
  }, [data]);
};
