import { AnimationTrajectory } from '@visx/react-spring';
import type {
  RenderTooltipGlyphProps,
  RenderTooltipParams,
} from '@visx/xychart/lib/components/Tooltip';
import { GlyphProps } from '@visx/xychart/lib/types';
import React from 'react';

type Accessor<Datum> = (d: Datum) => number | string;

type SimpleScaleConfig = { type: 'band' | 'linear'; paddingInner?: number };

export type VisxChartProps<Datum extends object> = {
  animated?: boolean;
  renderTooltip?: (_: RenderTooltipParams<Datum>) => React.ReactNode;
  series: {
    id: string;
    accessors: {
      x: Accessor<Datum>;
      y: Accessor<Datum>;
      colorAccessor?: (
        id: VisxChartProps<Datum>['series'][number]['id'],
        d: Datum,
      ) => string | null;
    };
  }[];
  animationTrajectory?: AnimationTrajectory;
  config: {
    x: SimpleScaleConfig;
    y: SimpleScaleConfig;
  };
  curveType?: 'linear' | 'cardinal' | 'step';
  data: Datum[];
  numTicks: number;
  renderGlyph?: React.FC<GlyphProps<Datum>>;
  renderTooltipGlyph?: React.FC<RenderTooltipGlyphProps<Datum>>;
  renderHorizontally: boolean;
  sharedTooltip: boolean;
  showGridColumns: boolean;
  showGridRows: boolean;
  tooltipShowHorizontalCrosshair: boolean;
  tooltipShowVerticalCrosshair: boolean;
  tooltipSnapTooltipToDatumX: boolean;
  tooltipSnapTooltipToDatumY: boolean;
  stackOffset?: 'wiggle' | 'expand' | 'diverging' | 'silhouette';
  themeName: 'dark' | 'light' | 'reya';
  xAxisOrientation?: 'top' | 'bottom';
  yAxisOrientation?: 'left' | 'right';
  renderAs: 'glyph' | 'bar' | 'barstack' | 'bargroup' | 'line' | 'area' | 'areastack' | 'none';
  customChartBackground?: React.ReactNode;
};
