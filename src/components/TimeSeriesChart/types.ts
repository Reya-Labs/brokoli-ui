import { AxisScale, LineSeries } from '@visx/xychart';
import { RenderTooltipParams } from '@visx/xychart/lib/components/Tooltip';
import React from 'react';

type LineSeriesProps<Datum extends {}> = Parameters<
  typeof LineSeries<AxisScale, AxisScale, Datum>
>[0];

export type Datum = {
  x: number;
  y: number;
};

export type TimeSeriesChartProps = {
  series: Pick<LineSeriesProps<Datum>, 'data' | 'dataKey' | 'colorAccessor'>[];
  renderXAxisLabel?: (_: RenderTooltipParams<Datum>) => React.ReactNode;
  renderYAxisLabel?: (_: RenderTooltipParams<Datum>) => React.ReactNode;
  renderTooltip?: (_: RenderTooltipParams<Datum>) => React.ReactNode;
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
