import { ScaleConfig } from '@visx/scale';
import { AxisScale, GlyphSeries, LineSeries, Margin } from '@visx/xychart';
import { RenderTooltipParams } from '@visx/xychart/lib/components/Tooltip';
import React from 'react';

import { Threshold } from './XYChartThreshold';

type LineSeriesProps<Datum extends {}> = Parameters<
  typeof LineSeries<AxisScale, AxisScale, Datum>
>[0];

type GlyphSeriesProps<Datum extends {} = {}> = Parameters<
  typeof GlyphSeries<AxisScale, AxisScale, Datum>
>[0];

type ThresholdProps<Datum extends {} = {}> = Parameters<typeof Threshold<Datum>>[0];

export type TimeSeriesChartProps<Datum extends {}> = {
  yAxisScaleType?: ScaleConfig['type'];
  data: Datum[];
  series: (Pick<
    LineSeriesProps<Datum>,
    | 'dataKey'
    // | 'xAccessor'
    // | 'yAccessor'
    | 'colorAccessor'
    // | 'curve'
    | 'onPointerMove'
    | 'onPointerOut'
  > &
    Pick<ThresholdProps<Datum>, 'curve'> & {
      colorAccessor: GlyphSeriesProps<Datum>['colorAccessor'];
      xAccessor: (_: Datum) => number;
      yAccessor: (_: Datum) => number;
      getCurve?: (_: { zoom: number; zoomDomain: number }) => ThresholdProps<Datum>['curve']; // LineSeriesProps<Datum>['curve'];
      glyphSize?: GlyphSeriesProps<Datum>['size'];
      getGlyphSize?: (_: { datum: Datum; zoom: number }) => number;
      threshold?: Pick<ThresholdProps<Datum>, 'aboveAreaProps' | 'belowAreaProps'> & {
        yAccessor: LineSeriesProps<Datum>['yAccessor'];
      };
    })[];
  renderXAxisLabel?: (_: RenderTooltipParams<Datum>) => React.ReactNode;
  renderYAxisLabel?: (_: RenderTooltipParams<Datum>) => React.ReactNode;
  renderTooltip?: (_: RenderTooltipParams<Datum>) => React.ReactNode;
  slotEmpty: React.ReactNode;
  children: React.ReactNode;
  className?: string;
} & StyleProps;

type StyleProps = {
  margin?: Margin;
  padding?: Margin;
  defaultZoomDomain?: number;
  minZoomDomain: number;
  numGridLines?: number;
  withGridRows?: boolean;
  withGridColumns?: boolean;
  tickSpacingX?: number;
  tickSpacingY?: number;
};

export type AxisFormatterFn = (
  axisValue: number,
  _: { zoom: number; zoomDomain: number; numTicks: number },
) => string;
