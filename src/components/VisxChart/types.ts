import type {
  RenderTooltipGlyphProps,
  RenderTooltipParams,
} from '@visx/xychart/lib/components/Tooltip';
import { GlyphProps } from '@visx/xychart/lib/types';
import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyTokens } from '../../foundation/Typography';

export type VisxChartDatum = {
  x: number;
  y: number;
};

export type VisxChartProps = {
  marginLeft?: 'auto' | number;
  marginRight?: 'auto' | number;
  minZoomDomain?: number;
  renderTooltip?: (_: RenderTooltipParams<VisxChartDatum>) => React.ReactNode;
  series: {
    id: string;
    colorToken: ColorTokens;
    data: VisxChartDatum[];
  }[];
  curveType?: 'linear' | 'cardinal' | 'step';
  axisNumTicks?: number;
  renderGlyph?: React.FC<GlyphProps<VisxChartDatum>>;
  renderTooltipGlyph?: React.FC<RenderTooltipGlyphProps<VisxChartDatum>>;
  sharedTooltip?: boolean;
  showGridColumns?: boolean;
  showGridRows?: boolean;
  tooltipShowHorizontalCrosshair?: boolean;
  tooltipShowVerticalCrosshair?: boolean;
  tooltipSnapTooltipToDatumX?: boolean;
  tooltipSnapTooltipToDatumY?: boolean;
  stackOffset?: 'wiggle' | 'expand' | 'diverging' | 'silhouette';
  xAxisOrientation?: 'top' | 'bottom';
  yAxisOrientation?: 'left' | 'right';
  chartType: 'glyph' | 'line' | 'area' | 'areastack' | 'none';
  axisTypographyToken: TypographyTokens;
  tickLength?: number;
  axisTicksTextColorToken?: ColorTokens;
  axisDomainLineColorToken?: ColorTokens | 'transparent';
  crosshairColorToken?: ColorTokens;
  xAxisTickFormatter?: AxisFormatterFn;
  yAxisTickFormatter?: AxisFormatterFn;
  yRangePercentageOffset?: number;
};

type AxisFormatterFn = (
  axisValue: number,
  _?: { zoom: number; zoomDomain: number; numTicks: number },
) => string;
