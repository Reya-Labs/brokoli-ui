import { useTheme } from '@emotion/react';
import { linearGradientDef } from '@nivo/core';
import { Datum } from '@nivo/line';
import { useMemo } from 'react';

import { ColorTokens, getColorFromToken } from '../../../foundation/Colors';
import { LineChartProps } from '../types';

export const useColorsAndGradients = (data: LineChartProps['data']) => {
  const theme = useTheme();
  return useMemo(() => {
    const memoColors = data.map((d) => getColorFromToken({ colorToken: d.colorToken, theme }));
    const memoGradients = data.map((d, index) => {
      return linearGradientDef(d.id, [
        { color: memoColors[index], offset: 0, opacity: 1 },
        { color: theme.colors.black300, offset: 100, opacity: 1 },
      ]);
    });
    return {
      colorTokensMap: data.reduce(
        (pV, cI, index) => ({
          ...pV,
          [data[index].id]: data[index].colorToken,
        }),
        {} as Record<string, ColorTokens>,
      ),
      colors: memoColors,
      gradients: {
        defs: memoGradients,
        fill: memoGradients.map((g) => ({ id: g.id, match: (point: Datum) => point.id === g.id })),
        ids: memoGradients.map((g) => g.id),
      },
    };
  }, [theme, data]);
};
