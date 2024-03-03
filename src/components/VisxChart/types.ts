import { curveCardinal, curveLinear, curveStep } from '@visx/curve';
import { AnimationTrajectory } from '@visx/react-spring';
import { XYChartTheme } from '@visx/xychart';
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
  renderTooltip: (_: RenderTooltipParams<Datum>) => React.ReactNode;
  series: {
    id: string;
    accessors: {
      x: Accessor<Datum>;
      y: Accessor<Datum>;
      date: Accessor<Datum>;
      colorAccessor: (id: VisxChartProps<Datum>['series'][number]['id'], d: Datum) => string | null;
    };
  }[];
  animationTrajectory?: AnimationTrajectory;
  config: {
    x: SimpleScaleConfig;
    y: SimpleScaleConfig;
  };
  curve: typeof curveLinear | typeof curveCardinal | typeof curveStep;
  data: Datum[];
  numTicks: number;
  renderAreaSeries: boolean;
  renderAreaStack: boolean;
  renderBarGroup: boolean;
  renderBarSeries: boolean;
  renderBarStack: boolean;
  renderGlyph: React.FC<GlyphProps<Datum>>;
  renderGlyphSeries: boolean;
  enableTooltipGlyph: boolean;
  renderTooltipGlyph: React.FC<RenderTooltipGlyphProps<Datum>>;
  renderHorizontally: boolean;
  renderLineSeries: boolean;
  sharedTooltip: boolean;
  showGridColumns: boolean;
  showGridRows: boolean;
  showHorizontalCrosshair: boolean;
  showTooltip: boolean;
  showVerticalCrosshair: boolean;
  snapTooltipToDatumX: boolean;
  snapTooltipToDatumY: boolean;
  stackOffset?: 'wiggle' | 'expand' | 'diverging' | 'silhouette';
  theme: XYChartTheme;
  xAxisOrientation?: 'top' | 'bottom';
  yAxisOrientation?: 'left' | 'right';
};
