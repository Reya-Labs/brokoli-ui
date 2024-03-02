import { CityTemperature } from '@visx/mock-data/lib/mocks/cityTemperature';
import React from 'react';

import { CustomChartBackground } from './CustomChartBackground';

export const VisxChart: React.FunctionComponent = ({
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
}) => {
  return (
    <XYChart
      captureEvents={!editAnnotationLabelPosition}
      height={Math.min(400, height)}
      theme={theme}
      xScale={config.x}
      yScale={config.y}
      onPointerUp={(d) => {
        setAnnotationDataKey(d.key as 'New York' | 'San Francisco' | 'Austin');
        setAnnotationDataIndex(d.index);
      }}
    >
      <CustomChartBackground />
      <Grid
        key={`grid-${animationTrajectory}`} // force animate on update
        animationTrajectory={animationTrajectory}
        columns={showGridColumns}
        numTicks={numTicks}
        rows={showGridRows}
      />
      {renderBarStack && (
        <BarStack offset={stackOffset}>
          <BarSeries
            data={data}
            dataKey="New York"
            xAccessor={accessors.x['New York']}
            yAccessor={accessors.y['New York']}
          />
          <BarSeries
            data={data}
            dataKey="San Francisco"
            xAccessor={accessors.x['San Francisco']}
            yAccessor={accessors.y['San Francisco']}
          />
          <BarSeries
            data={data}
            dataKey="Austin"
            xAccessor={accessors.x.Austin}
            yAccessor={accessors.y.Austin}
          />
        </BarStack>
      )}
      {renderBarGroup && (
        <BarGroup>
          <BarSeries
            colorAccessor={colorAccessorFactory('New York')}
            data={data}
            dataKey="New York"
            xAccessor={accessors.x['New York']}
            yAccessor={accessors.y['New York']}
          />
          <BarSeries
            colorAccessor={colorAccessorFactory('San Francisco')}
            data={data}
            dataKey="San Francisco"
            xAccessor={accessors.x['San Francisco']}
            yAccessor={accessors.y['San Francisco']}
          />
          <BarSeries
            colorAccessor={colorAccessorFactory('Austin')}
            data={data}
            dataKey="Austin"
            xAccessor={accessors.x.Austin}
            yAccessor={accessors.y.Austin}
          />
        </BarGroup>
      )}
      {renderBarSeries && (
        <BarSeries
          colorAccessor={colorAccessorFactory('New York')}
          data={data}
          dataKey="New York"
          xAccessor={accessors.x['New York']}
          yAccessor={accessors.y['New York']}
        />
      )}
      {renderAreaSeries && (
        <>
          <AreaSeries
            curve={curve}
            data={data}
            dataKey="Austin"
            fillOpacity={0.4}
            xAccessor={accessors.x.Austin}
            yAccessor={accessors.y.Austin}
          />
          <AreaSeries
            curve={curve}
            data={data}
            dataKey="New York"
            fillOpacity={0.4}
            xAccessor={accessors.x['New York']}
            yAccessor={accessors.y['New York']}
          />
          <AreaSeries
            curve={curve}
            data={data}
            dataKey="San Francisco"
            fillOpacity={0.4}
            xAccessor={accessors.x['San Francisco']}
            yAccessor={accessors.y['San Francisco']}
          />
        </>
      )}
      {renderAreaStack && (
        <AreaStack curve={curve} offset={stackOffset} renderLine={stackOffset !== 'wiggle'}>
          <AreaSeries
            data={data}
            dataKey="Austin"
            fillOpacity={0.4}
            xAccessor={accessors.x.Austin}
            yAccessor={accessors.y.Austin}
          />
          <AreaSeries
            data={data}
            dataKey="New York"
            fillOpacity={0.4}
            xAccessor={accessors.x['New York']}
            yAccessor={accessors.y['New York']}
          />
          <AreaSeries
            data={data}
            dataKey="San Francisco"
            fillOpacity={0.4}
            xAccessor={accessors.x['San Francisco']}
            yAccessor={accessors.y['San Francisco']}
          />
        </AreaStack>
      )}
      {renderLineSeries && (
        <>
          <LineSeries
            curve={curve}
            data={data}
            dataKey="Austin"
            xAccessor={accessors.x.Austin}
            yAccessor={accessors.y.Austin}
          />
          {!renderBarSeries && (
            <LineSeries
              curve={curve}
              data={data}
              dataKey="New York"
              xAccessor={accessors.x['New York']}
              yAccessor={accessors.y['New York']}
            />
          )}
          <LineSeries
            curve={curve}
            data={data}
            dataKey="San Francisco"
            xAccessor={accessors.x['San Francisco']}
            yAccessor={accessors.y['San Francisco']}
          />
        </>
      )}
      {renderGlyphSeries && (
        <GlyphSeries
          colorAccessor={colorAccessorFactory('San Francisco')}
          data={data}
          dataKey="San Francisco"
          renderGlyph={renderGlyph}
          xAccessor={accessors.x['San Francisco']}
          yAccessor={accessors.y['San Francisco']}
        />
      )}
      <Axis
        key={`time-axis-${animationTrajectory}-${renderHorizontally}`}
        animationTrajectory={animationTrajectory}
        numTicks={numTicks}
        orientation={renderHorizontally ? yAxisOrientation : xAxisOrientation}
      />
      <Axis
        key={`temp-axis-${animationTrajectory}-${renderHorizontally}`}
        label={
          stackOffset == null
            ? 'Temperature (°F)'
            : stackOffset === 'expand'
            ? 'Fraction of total temperature'
            : ''
        }
        numTicks={numTicks}
        orientation={renderHorizontally ? xAxisOrientation : yAxisOrientation}
        animationTrajectory={animationTrajectory}
        // values don't make sense in stream graph
        tickFormat={stackOffset === 'wiggle' ? () => '' : undefined}
      />
      {annotationDataKey && annotationDatum && (
        <Annotation
          canEditSubject={false}
          dataKey={annotationDataKey}
          datum={annotationDatum}
          dx={annotationLabelPosition.dx}
          dy={annotationLabelPosition.dy}
          editable={editAnnotationLabelPosition}
          onDragEnd={({ dx, dy }) => setAnnotationLabelPosition({ dx, dy })}
        >
          <AnnotationConnector />
          {annotationType === 'circle' ? <AnnotationCircleSubject /> : <AnnotationLineSubject />}
          <AnnotationLabel
            backgroundProps={{
              fillOpacity: 0.8,
              stroke: theme.gridStyles.stroke,
              strokeOpacity: 0.5,
            }}
            subtitle={`${annotationDatum.date}, ${annotationDatum[annotationDataKey]}°F`}
            title={annotationDataKey}
            width={135}
          />
        </Annotation>
      )}
      {showTooltip && (
        <Tooltip<CityTemperature>
          renderGlyph={enableTooltipGlyph ? renderTooltipGlyph : undefined}
          renderTooltip={({ tooltipData, colorScale }) => (
            <>
              {/** date */}
              {(tooltipData?.nearestDatum?.datum &&
                accessors.date(tooltipData?.nearestDatum?.datum)) ||
                'No date'}
              <br />
              <br />
              {/** temperatures */}
              {(
                (sharedTooltip
                  ? Object.keys(tooltipData?.datumByKey ?? {})
                  : [tooltipData?.nearestDatum?.key]
                ).filter((city) => city) as City[]
              ).map((city) => {
                const temperature =
                  tooltipData?.nearestDatum?.datum &&
                  accessors[renderHorizontally ? 'x' : 'y'][city](tooltipData?.nearestDatum?.datum);

                return (
                  <div key={city}>
                    <em
                      style={{
                        color: colorScale?.(city),
                        textDecoration:
                          tooltipData?.nearestDatum?.key === city ? 'underline' : undefined,
                      }}
                    >
                      {city}
                    </em>{' '}
                    {temperature == null || Number.isNaN(temperature) ? '–' : `${temperature}° F`}
                  </div>
                );
              })}
            </>
          )}
          showDatumGlyph={(snapTooltipToDatumX || snapTooltipToDatumY) && !renderBarGroup}
          showHorizontalCrosshair={showHorizontalCrosshair}
          showSeriesGlyphs={sharedTooltip && !renderBarGroup}
          showVerticalCrosshair={showVerticalCrosshair}
          snapTooltipToDatumX={snapTooltipToDatumX}
          snapTooltipToDatumY={snapTooltipToDatumY}
        />
      )}
    </XYChart>
  );
};
