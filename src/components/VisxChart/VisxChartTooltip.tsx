import { useTheme } from '@emotion/react';
import { Tooltip } from '@visx/xychart';
import React, { useMemo } from 'react';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';
import { VisxChartDatum, VisxChartProps } from './types';

type VisxChartTooltipProps = {
  renderTooltip: NonNullable<VisxChartProps['renderTooltip']>;
  renderGlyph: VisxChartProps['renderTooltipGlyph'];
  showDatumGlyph: boolean;
  showHorizontalCrosshair: boolean;
  showSeriesGlyphs: boolean;
  showVerticalCrosshair: boolean;
  snapTooltipToDatumX: boolean;
  snapTooltipToDatumY: boolean;
  crosshairColorToken?: ColorTokens;
};

export const VisxChartTooltip: React.FunctionComponent<VisxChartTooltipProps> = ({
  crosshairColorToken,
  renderGlyph,
  renderTooltip,
  showDatumGlyph,
  showHorizontalCrosshair,
  snapTooltipToDatumY,
  showSeriesGlyphs,
  showVerticalCrosshair,
  snapTooltipToDatumX,
}) => {
  const theme = useTheme();
  const crosshairColor = getColorFromToken({ colorToken: crosshairColorToken, theme });
  const crosshairStyle = useMemo(
    () => ({
      opacity: 0.7,
      stroke: crosshairColor,
      strokeDasharray: '5 5',
      strokeWidth: 1,
    }),
    [crosshairColor],
  );

  return (
    <Tooltip<VisxChartDatum>
      horizontalCrosshairStyle={crosshairStyle}
      renderGlyph={typeof renderGlyph === 'function' ? renderGlyph : undefined}
      renderTooltip={renderTooltip}
      showDatumGlyph={showDatumGlyph}
      showHorizontalCrosshair={showHorizontalCrosshair}
      showSeriesGlyphs={showSeriesGlyphs}
      showVerticalCrosshair={showVerticalCrosshair}
      snapTooltipToDatumX={snapTooltipToDatumX}
      snapTooltipToDatumY={snapTooltipToDatumY}
      verticalCrosshairStyle={crosshairStyle}
    />
  );
};
