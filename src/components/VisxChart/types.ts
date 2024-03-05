import type {
  RenderTooltipGlyphProps,
  RenderTooltipParams,
} from '@visx/xychart/lib/components/Tooltip';
import { GlyphProps } from '@visx/xychart/lib/types';
import React from 'react';

export type VisxChartDatum = {
  x: number;
  y: number;
};

export type VisxChartProps = {
  minZoomDomain?: number;
  renderTooltip?: (_: RenderTooltipParams<VisxChartDatum>) => React.ReactNode;
  series: {
    id: string;
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
  themeName: 'dark' | 'light' | 'reya';
  xAxisOrientation?: 'top' | 'bottom';
  yAxisOrientation?: 'left' | 'right';
  chartType: 'glyph' | 'bar' | 'barstack' | 'bargroup' | 'line' | 'area' | 'areastack' | 'none';
  customChartBackground?: React.ReactNode;
};

export type AxisFormatterFn = (
  axisValue: number,
  _: { zoom: number; zoomDomain: number; numTicks: number },
) => string;
