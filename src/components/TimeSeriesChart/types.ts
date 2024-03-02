import { AxisScale, LineSeries } from '@visx/xychart';

import { ColorTokens } from '../../foundation/Colors';

type LineSeriesProps<Datum extends {}> = Parameters<
  typeof LineSeries<AxisScale, AxisScale, Datum>
>[0];

export type Datum = {
  x: number;
  y: number;
};

export type TimeSeriesChartProps = {
  series: {
    id: string;
    data: Datum[];
    colorToken: ColorTokens;
  }[];
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
