import { useTheme } from '@emotion/react';
import { Tooltip } from '@visx/xychart';
import React, { useMemo } from 'react';

import { ColorTokens, getColorFromToken } from '../../../foundation/Colors';
import { VisxTimelineChartDatum, VisxTimelineChartProps } from './types';

type VisxTimelineChartTooltipProps = {
  crosshairColorToken?: ColorTokens;
  renderGlyph: VisxTimelineChartProps['renderTooltipGlyph'];
  renderTooltip: NonNullable<VisxTimelineChartProps['renderTooltip']>;
  showDatumGlyph: boolean;
  showHorizontalCrosshair: boolean;
  showSeriesGlyphs: boolean;
  showVerticalCrosshair: boolean;
  snapTooltipToDatumX: boolean;
  snapTooltipToDatumY: boolean;
};

export const VisxTimelineChartTooltip: React.FunctionComponent<VisxTimelineChartTooltipProps> = ({
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
    <Tooltip<VisxTimelineChartDatum>
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
