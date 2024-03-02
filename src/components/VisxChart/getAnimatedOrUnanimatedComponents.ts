// eslint-disable-next-line
import {
  // animated
  AnimatedAnnotation,
  AnimatedAreaSeries,
  AnimatedAreaStack,
  AnimatedAxis,
  AnimatedBarGroup,
  AnimatedBarSeries,
  AnimatedBarStack,
  AnimatedGlyphSeries,
  AnimatedGrid,
  AnimatedLineSeries,

  // not animated
  Annotation,
  AreaSeries,
  AreaStack,
  Axis,
  BarGroup,
  BarSeries,
  BarStack,
  GlyphSeries,
  Grid,
  LineSeries,

  // no animated equivalents
  AnnotationCircleSubject,
  AnnotationConnector,
  AnnotationLabel,
  AnnotationLineSubject,
  Tooltip,
  XYChart,
} from '@visx/xychart';

export function getAnimatedOrUnanimatedComponents(animated?: boolean) {
  return animated
    ? {
        Annotation: AnimatedAnnotation,
        AnnotationCircleSubject,
        AnnotationConnector,
        AreaSeries: AnimatedAreaSeries,
        AnnotationLabel,
        AreaStack: AnimatedAreaStack,
        AnnotationLineSubject,
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
        Annotation,
        AnnotationCircleSubject,
        AnnotationConnector,
        AreaSeries,
        AnnotationLabel,
        AreaStack,
        AnnotationLineSubject,
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
