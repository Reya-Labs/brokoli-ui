import { ScaleConfig } from '@visx/scale';
import { AxisScale, LineSeries } from '@visx/xychart';
import { RenderTooltipParams } from '@visx/xychart/lib/components/Tooltip';
import React from 'react';

type LineSeriesProps<Datum extends {}> = Parameters<
  typeof LineSeries<AxisScale, AxisScale, Datum>
>[0];

export type TimeSeriesChartProps<Datum extends {}> = {
  yAxisScaleType?: ScaleConfig['type'];
  data: Datum[];
  series: Pick<
    LineSeriesProps<Datum>,
    'dataKey' | 'xAccessor' | 'yAccessor' | 'colorAccessor' | 'onPointerMove' | 'onPointerOut'
  >[];
  renderXAxisLabel?: (_: RenderTooltipParams<Datum>) => React.ReactNode;
  renderYAxisLabel?: (_: RenderTooltipParams<Datum>) => React.ReactNode;
  renderTooltip?: (_: RenderTooltipParams<Datum>) => React.ReactNode;
  children: React.ReactNode;
  className?: string;
} & StyleProps;

type StyleProps = {
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
