import { LineProps } from '@nivo/line';
import { useMemo } from 'react';

import { LineChartProps } from '../types';

type UseXScaleConfig = {
  xScaleMax?: LineChartProps['xScaleMax'];
  xScaleMin?: LineChartProps['xScaleMin'];
  xScaleType?: LineChartProps['xScaleType'];
};

const xFormatter = (x: number) => parseFloat(x.toFixed(2)).toString();

export const useXScaleConfig = ({
  xScaleMax,
  xScaleMin,
  xScaleType = 'time',
}: UseXScaleConfig): {
  xFormat: LineProps['xFormat'];
  xScale: LineProps['xScale'];
} => {
  return useMemo(() => {
    if (xScaleType === 'time') {
      const xFormat = 'time:%H:%M - %b %d';
      const xScale: LineProps['xScale'] = {
        format: '%Y-%m-%d',
        max: (xScaleMax as Date) || 'auto',
        min: (xScaleMin as Date) || 'auto',
        precision: 'millisecond',
        type: 'time',
        useUTC: false,
      };

      return {
        xFormat,
        xScale,
      };
    }

    return {
      xFormat: (v) => xFormatter(v as number),
      xScale: {
        max: (xScaleMax as number) || 'auto',
        min: (xScaleMin as number) || 'auto',
        reverse: false,
        type: 'linear',
      },
    };
  }, [xScaleMax, xScaleMin, xScaleType]);
};
