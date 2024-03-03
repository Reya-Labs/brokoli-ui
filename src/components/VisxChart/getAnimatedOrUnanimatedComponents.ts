// eslint-disable-next-line
import {
  AnimatedAreaSeries,
  AnimatedAreaStack,
  AnimatedAxis,
  AnimatedBarGroup,
  AnimatedBarSeries,
  AnimatedBarStack,
  AnimatedGlyphSeries,
  AnimatedGrid,
  AnimatedLineSeries,
  AreaSeries,
  AreaStack,
  Axis,
  BarGroup,
  BarSeries,
  BarStack,
  GlyphSeries,
  Grid,
  LineSeries,
  Tooltip,
  XYChart,
} from '@visx/xychart';

export function getAnimatedOrUnanimatedComponents(animated?: boolean) {
  return animated
    ? {
        AreaSeries: AnimatedAreaSeries,
        AreaStack: AnimatedAreaStack,
        Axis: AnimatedAxis,
        BarGroup: AnimatedBarGroup,
        BarSeries: AnimatedBarSeries,
        BarStack: AnimatedBarStack,
        GlyphSeries: AnimatedGlyphSeries,
        Grid: AnimatedGrid,
        LineSeries: AnimatedLineSeries,
        Tooltip,
        XYChart,
      }
    : {
        AreaSeries,
        AreaStack,
        Axis,
        BarGroup,
        BarSeries,
        BarStack,
        GlyphSeries,
        Grid,
        LineSeries,
        Tooltip,
        XYChart,
      };
}
