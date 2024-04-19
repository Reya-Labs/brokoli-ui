import type {
  RenderTooltipGlyphProps,
  RenderTooltipParams,
} from '@visx/xychart/lib/components/Tooltip';
import { GlyphProps } from '@visx/xychart/lib/types';
import React from 'react';

import { ColorTokens } from '../../../foundation/Colors';
import { TypographyTokens } from '../../../foundation/Typography';

export type VisxTimelineChartDatum = {
  metadata?: Record<string, unknown>;
  x: number;
  y: number;
};

export type VisxTimelineChartProps = {
  axisDomainLineColorToken?: ColorTokens | 'transparent';
  axisNumTicks?: number;
  axisTicksTextColorToken?: ColorTokens;
  axisTypographyToken: TypographyTokens;
  chartType: 'glyph' | 'line' | 'area' | 'areastack' | 'none';
  crosshairColorToken?: ColorTokens;
  curveType?: 'linear' | 'cardinal' | 'step';
  marginLeft?: 'auto' | number;
  marginRight?: 'auto' | number;
  minZoomDomain?: number;
  renderGlyph?: React.FC<GlyphProps<VisxTimelineChartDatum>>;
  renderTooltip?: (_: RenderTooltipParams<VisxTimelineChartDatum>) => React.ReactNode;
  renderTooltipGlyph?: React.FC<RenderTooltipGlyphProps<VisxTimelineChartDatum>>;
  series: {
    colorToken: ColorTokens;
    data: VisxTimelineChartDatum[];
    id: string;
  }[];
  sharedTooltip?: boolean;
  showGridColumns?: boolean;
  showGridRows?: boolean;
  stackOffset?: 'wiggle' | 'expand' | 'diverging' | 'silhouette';
  tickLength?: number;
  tooltipShowHorizontalCrosshair?: boolean;
  tooltipShowVerticalCrosshair?: boolean;
  tooltipSnapTooltipToDatumX?: boolean;
  tooltipSnapTooltipToDatumY?: boolean;
  xAxisOrientation?: 'top' | 'bottom';
  xAxisTickFormatter?: AxisFormatterFn;
  yAxisOrientation?: 'left' | 'right';
  yAxisTickFormatter?: AxisFormatterFn;
  yRangePercentageOffset?: number;
};

type AxisFormatterFn = (
  axisValue: number,
  _?: { numTicks: number; zoom: number; zoomDomain: number },
) => string;
