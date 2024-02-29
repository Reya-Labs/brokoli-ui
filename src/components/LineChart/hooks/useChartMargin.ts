import { useMemo } from 'react';

import { getTextWidth } from '../../../utils/get-text-width';
import { LineChartProps } from '../types';
import { useAxisVisible } from './useAxisVisible';

type UseChartMarginParams = {
  visibleAxis: LineChartProps['visibleAxis'];
  yS: number[];
  axisTickPadding: LineChartProps['axisTickPadding'];
  yFormatter: (y: LineChartProps['data'][number]['data'][number]['y']) => string;
  axisFontSize: number;
  axisFontFamily: string;
};

export const useChartMargin = ({
  visibleAxis = ['left', 'bottom'],
  yS,
  axisTickPadding = 8,
  yFormatter,
  axisFontSize,
  axisFontFamily,
}: UseChartMarginParams): {
  bottom: number;
  left: number;
  right: number;
  top: number;
} => {
  const axisVisible = useAxisVisible(visibleAxis);

  const yAxisUI = useMemo(() => {
    if ((yS || []).length === 0) {
      return { yMargin: 2 * axisTickPadding };
    }

    const yMargin =
      Math.max(
        ...yS.map((y) =>
          getTextWidth({
            fontFamily: axisFontFamily,
            fontSize: axisFontSize,
            text: yFormatter(y),
          }),
        ),
      ) +
      2 * axisTickPadding;
    return { yMargin };
  }, [yFormatter, axisFontFamily, axisTickPadding, axisFontSize, yS]);

  return useMemo(
    () => ({
      bottom: axisVisible.bottom ? axisFontSize * 2 : 0,
      left: axisVisible.left ? yAxisUI.yMargin : 0,
      right: axisVisible.right ? yAxisUI.yMargin : 0,
      top: axisVisible.top ? axisFontSize * 2 : axisFontSize,
    }),
    [axisVisible, yAxisUI.yMargin, axisFontSize],
  );
};
