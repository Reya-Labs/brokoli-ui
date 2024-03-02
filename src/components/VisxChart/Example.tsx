import { CityTemperature } from '@visx/mock-data/lib/mocks/cityTemperature';
import React from 'react';

import { CustomChartBackground } from './CustomChartBackground';
import ExampleControls from './ExampleControls';

export type XYChartProps = {
  width: number;
  height: number;
};

type City = 'San Francisco' | 'New York' | 'Austin';

export default function Example({ height }: XYChartProps) {
  return (
    <ExampleControls>
      {({
        accessors,
        animationTrajectory,
        annotationDataKey,
        annotationDatum,
        annotationLabelPosition,
        annotationType,
        colorAccessorFactory,
        config,
        curve,
        data,
        editAnnotationLabelPosition,
        numTicks,
        renderAreaSeries,
        renderAreaStack,
        renderBarGroup,
        renderBarSeries,
        renderBarStack,
        renderGlyph,
        renderGlyphSeries,
        enableTooltipGlyph,
        renderTooltipGlyph,
        renderHorizontally,
        renderLineSeries,
        setAnnotationDataIndex,
        setAnnotationDataKey,
        setAnnotationLabelPosition,
        sharedTooltip,
        showGridColumns,
        showGridRows,
        showHorizontalCrosshair,
        showTooltip,
        showVerticalCrosshair,
        snapTooltipToDatumX,
        snapTooltipToDatumY,
        stackOffset,
        theme,
        xAxisOrientation,
        yAxisOrientation,

        // components are animated or not depending on selection
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
        AnnotationCircleSubject,
        AnnotationConnector,
        AnnotationLabel,
        AnnotationLineSubject,
        Tooltip,
        XYChart,
      }) => (

      )}
    </ExampleControls>
  );
}
