import { useMemo } from 'react';

import { LineChartProps, XDataType, YDataType } from '../LineChart';

export type UseMinMaxXSeriesResult = {
  maxX: XDataType;
  minX: XDataType;
  maxY: YDataType;
  minY: YDataType;
};

export const useMinMaxXYSeries = (data: LineChartProps['data']): UseMinMaxXSeriesResult => {
  return useMemo(() => {
    const xS = data.reduce((pV, cI) => {
      const validData: XDataType[] = cI.data
        .filter((d) => d.x !== null && d.x !== undefined)
        .map((d) => d.x);
      return [...pV, ...validData];
    }, [] as XDataType[]);
    const yS = data.reduce((pV, cI) => {
      const validData: YDataType[] = cI.data
        .filter((d) => d.y !== null && d.y !== undefined)
        .map((d) => d.y);
      return [...pV, ...validData];
    }, [] as YDataType[]);
    const xSAsNumber = xS.map((x) => x.valueOf());
    const minX = new Date(Math.min(...xSAsNumber));
    const maxX = new Date(Math.max(...xSAsNumber));
    const minY = Math.min(...yS);
    const maxY = Math.max(...yS);

    return { maxX, maxY, minX, minY };
  }, [data]);
};
