/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { curveCardinal, curveLinear, curveStep } from '@visx/curve';
import { GlyphCross, GlyphDot, GlyphStar } from '@visx/glyph';
import cityTemperature, { CityTemperature } from '@visx/mock-data/lib/mocks/cityTemperature';
import { PatternLines } from '@visx/pattern';
import { AnimationTrajectory } from '@visx/react-spring/lib/types';
import { darkTheme, lightTheme, XYChartTheme } from '@visx/xychart';
import { RenderTooltipGlyphProps } from '@visx/xychart/lib/components/Tooltip';
import { GlyphProps } from '@visx/xychart/lib/types';
import React, { useCallback, useMemo, useState } from 'react';

import { customTheme } from './customTheme';
import { getAnimatedOrUnanimatedComponents } from './getAnimatedOrUnanimatedComponents';
import { userPrefersReducedMotion } from './userPrefersReducedMotion';

const dateScaleConfig = { paddingInner: 0.3, type: 'band' } as const;
const temperatureScaleConfig = { type: 'linear' } as const;
const numTicks = 4;
const data = cityTemperature.slice(225, 275);
const dataMissingValues = data.map((d, i) =>
  i === 10 || i === 11
    ? { ...d, Austin: 'null', 'New York': 'notanumber', 'San Francisco': 'nope' }
    : d,
);
const dataSmall = data.slice(0, 15);
const dataSmallMissingValues = dataMissingValues.slice(0, 15);
const getDate = (d: CityTemperature) => d.date;
const getSfTemperature = (d: CityTemperature) => Number(d['San Francisco']);
const getNegativeSfTemperature = (d: CityTemperature) => -getSfTemperature(d);
const getNyTemperature = (d: CityTemperature) => Number(d['New York']);
const getAustinTemperature = (d: CityTemperature) => Number(d.Austin);
const defaultAnnotationDataIndex = 13;
const selectedDatumPatternId = 'xychart-selected-datum';

type Accessor = (d: CityTemperature) => number | string;

interface Accessors {
  'San Francisco': Accessor;
  'New York': Accessor;
  Austin: Accessor;
}

type DataKey = keyof Accessors;

type SimpleScaleConfig = { type: 'band' | 'linear'; paddingInner?: number };

type ProvidedProps = {
  accessors: {
    x: Accessors;
    y: Accessors;
    date: Accessor;
  };
  animationTrajectory?: AnimationTrajectory;
  annotationDataKey: DataKey | null;
  annotationDatum?: CityTemperature;
  annotationLabelPosition: { dx: number; dy: number };
  annotationType?: 'line' | 'circle';
  colorAccessorFactory: (key: DataKey) => (d: CityTemperature) => string | null;
  config: {
    x: SimpleScaleConfig;
    y: SimpleScaleConfig;
  };
  curve: typeof curveLinear | typeof curveCardinal | typeof curveStep;
  data: CityTemperature[];
  editAnnotationLabelPosition: boolean;
  numTicks: number;
  setAnnotationDataIndex: (index: number) => void;
  setAnnotationDataKey: (key: DataKey | null) => void;
  setAnnotationLabelPosition: (position: { dx: number; dy: number }) => void;
  renderAreaSeries: boolean;
  renderAreaStack: boolean;
  renderBarGroup: boolean;
  renderBarSeries: boolean;
  renderBarStack: boolean;
  renderGlyph: React.FC<GlyphProps<CityTemperature>>;
  renderGlyphSeries: boolean;
  enableTooltipGlyph: boolean;
  renderTooltipGlyph: React.FC<RenderTooltipGlyphProps<CityTemperature>>;
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
  xAxisOrientation: 'top' | 'bottom';
  yAxisOrientation: 'left' | 'right';
} & ReturnType<typeof getAnimatedOrUnanimatedComponents>;

type ControlsProps = {
  children: (props: ProvidedProps) => React.ReactNode;
};

export default function ExampleControls({ children }: ControlsProps) {
  const [useAnimatedComponents, setUseAnimatedComponents] = useState(!userPrefersReducedMotion());
  const [theme, setTheme] = useState<XYChartTheme>(darkTheme);
  const [animationTrajectory, setAnimationTrajectory] = useState<AnimationTrajectory | undefined>(
    'center',
  );
  const [gridProps, setGridProps] = useState<[boolean, boolean]>([false, false]);
  const [showGridRows, showGridColumns] = gridProps;
  const [xAxisOrientation, setXAxisOrientation] = useState<'top' | 'bottom'>('bottom');
  const [yAxisOrientation, setYAxisOrientation] = useState<'left' | 'right'>('right');
  const [renderHorizontally, setRenderHorizontally] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [annotationDataKey, setAnnotationDataKey] =
    useState<ProvidedProps['annotationDataKey']>(null);
  const [annotationType, setAnnotationType] = useState<ProvidedProps['annotationType']>('circle');
  const [showVerticalCrosshair, setShowVerticalCrosshair] = useState(true);
  const [showHorizontalCrosshair, setShowHorizontalCrosshair] = useState(false);
  const [snapTooltipToDatumX, setSnapTooltipToDatumX] = useState(true);
  const [snapTooltipToDatumY, setSnapTooltipToDatumY] = useState(true);
  const [sharedTooltip, setSharedTooltip] = useState(true);
  const [renderBarStackOrGroup, setRenderBarStackOrGroup] = useState<
    'bar' | 'barstack' | 'bargroup' | 'none'
  >('none');
  const [renderAreaLineOrStack, setRenderAreaLineOrStack] = useState<
    'line' | 'area' | 'areastack' | 'none'
  >('areastack');
  const [stackOffset, setStackOffset] = useState<ProvidedProps['stackOffset']>();
  const [renderGlyphSeries, setRenderGlyphSeries] = useState(false);
  const [editAnnotationLabelPosition, setEditAnnotationLabelPosition] = useState(false);
  const [annotationLabelPosition, setAnnotationLabelPosition] = useState({ dx: -40, dy: -20 });
  const [annotationDataIndex, setAnnotationDataIndex] = useState(defaultAnnotationDataIndex);
  const [negativeValues, setNegativeValues] = useState(false);
  const [fewerDatum, setFewerDatum] = useState(false);
  const [missingValues, setMissingValues] = useState(false);
  const [glyphComponent, setGlyphComponent] = useState<'star' | 'cross' | 'circle' | '🍍'>('star');
  const [curveType, setCurveType] = useState<'linear' | 'cardinal' | 'step'>('linear');
  const glyphOutline = theme.gridStyles.stroke;
  const renderGlyph = useCallback(
    ({
      x,
      y,
      size,
      color,
      onPointerMove,
      onPointerOut,
      onPointerUp,
    }: GlyphProps<CityTemperature>) => {
      const handlers = { onPointerMove, onPointerOut, onPointerUp };
      if (glyphComponent === 'star') {
        return (
          <GlyphStar
            fill={color}
            left={x}
            size={size * 10}
            stroke={glyphOutline}
            top={y}
            {...handlers}
          />
        );
      }
      if (glyphComponent === 'circle') {
        return (
          <GlyphDot
            fill={color}
            left={x}
            r={size / 2}
            stroke={glyphOutline}
            top={y}
            {...handlers}
          />
        );
      }
      if (glyphComponent === 'cross') {
        return (
          <GlyphCross
            fill={color}
            left={x}
            size={size * 10}
            stroke={glyphOutline}
            top={y}
            {...handlers}
          />
        );
      }
      return (
        <text dx="-0.75em" dy="0.25em" fontSize={14} x={x} y={y} {...handlers}>
          🍍
        </text>
      );
    },
    [glyphComponent, glyphOutline],
  );
  const [enableTooltipGlyph, setEnableTooltipGlyph] = useState(false);
  const [tooltipGlyphComponent, setTooltipGlyphComponent] = useState<
    'star' | 'cross' | 'circle' | '🍍'
  >('star');
  const renderTooltipGlyph = useCallback(
    ({
      x,
      y,
      size,
      color,
      onPointerMove,
      onPointerOut,
      onPointerUp,
      isNearestDatum,
    }: RenderTooltipGlyphProps<CityTemperature>) => {
      const handlers = { onPointerMove, onPointerOut, onPointerUp };
      if (tooltipGlyphComponent === 'star') {
        return (
          <GlyphStar
            fill={color}
            left={x}
            size={size * 10}
            stroke={glyphOutline}
            top={y}
            {...handlers}
          />
        );
      }
      if (tooltipGlyphComponent === 'circle') {
        return (
          <GlyphDot fill={color} left={x} r={size} stroke={glyphOutline} top={y} {...handlers} />
        );
      }
      if (tooltipGlyphComponent === 'cross') {
        return (
          <GlyphCross
            fill={color}
            left={x}
            size={size * 10}
            stroke={glyphOutline}
            top={y}
            {...handlers}
          />
        );
      }
      return (
        <text dx="-0.75em" dy="0.25em" fontSize={14} x={x} y={y} {...handlers}>
          {isNearestDatum ? '🍍' : '🍌'}
        </text>
      );
    },
    [tooltipGlyphComponent, glyphOutline],
  );
  // for series that support it, return a colorAccessor which returns a custom color if the datum is selected
  const colorAccessorFactory = useCallback(
    (dataKey: DataKey) => (d: CityTemperature) =>
      annotationDataKey === dataKey && d === data[annotationDataIndex]
        ? `url(#${selectedDatumPatternId})`
        : null,
    [annotationDataIndex, annotationDataKey],
  );

  const accessors = useMemo(
    () => ({
      date: getDate,
      x: {
        Austin: renderHorizontally ? getAustinTemperature : getDate,
        'New York': renderHorizontally ? getNyTemperature : getDate,
        'San Francisco': renderHorizontally
          ? negativeValues
            ? getNegativeSfTemperature
            : getSfTemperature
          : getDate,
      },
      y: {
        Austin: renderHorizontally ? getDate : getAustinTemperature,
        'New York': renderHorizontally ? getDate : getNyTemperature,
        'San Francisco': renderHorizontally
          ? getDate
          : negativeValues
          ? getNegativeSfTemperature
          : getSfTemperature,
      },
    }),
    [renderHorizontally, negativeValues],
  );

  const config = useMemo(
    () => ({
      x: renderHorizontally ? temperatureScaleConfig : dateScaleConfig,
      y: renderHorizontally ? dateScaleConfig : temperatureScaleConfig,
    }),
    [renderHorizontally],
  );

  // cannot snap to a stack position
  const canSnapTooltipToDatum =
    renderBarStackOrGroup !== 'barstack' && renderAreaLineOrStack !== 'areastack';

  return (
    <>
      {children({
        accessors,
        animationTrajectory,
        annotationDataKey,
        annotationDatum: data[annotationDataIndex],
        annotationLabelPosition,
        annotationType,
        colorAccessorFactory,
        config,
        curve:
          (curveType === 'cardinal' && curveCardinal) ||
          (curveType === 'step' && curveStep) ||
          curveLinear,
        data: fewerDatum
          ? missingValues
            ? dataSmallMissingValues
            : dataSmall
          : missingValues
          ? dataMissingValues
          : data,
        editAnnotationLabelPosition,
        enableTooltipGlyph,
        numTicks,
        renderAreaSeries: renderAreaLineOrStack === 'area',
        renderAreaStack: renderAreaLineOrStack === 'areastack',
        renderBarGroup: renderBarStackOrGroup === 'bargroup',
        renderBarSeries: renderBarStackOrGroup === 'bar',
        renderBarStack: renderBarStackOrGroup === 'barstack',
        renderGlyph,
        renderGlyphSeries,
        renderHorizontally,
        renderLineSeries: renderAreaLineOrStack === 'line',
        renderTooltipGlyph,
        setAnnotationDataIndex,
        setAnnotationDataKey,
        setAnnotationLabelPosition,
        sharedTooltip,
        showGridColumns,
        showGridRows,
        showHorizontalCrosshair,
        showTooltip,
        showVerticalCrosshair,
        snapTooltipToDatumX: canSnapTooltipToDatum && snapTooltipToDatumX,
        snapTooltipToDatumY: canSnapTooltipToDatum && snapTooltipToDatumY,
        stackOffset,
        theme,
        xAxisOrientation,
        yAxisOrientation,
        ...getAnimatedOrUnanimatedComponents(useAnimatedComponents),
      })}
      {/** This style is used for annotated elements via colorAccessor. */}
      <svg className="pattern-lines">
        <PatternLines
          height={6}
          id={selectedDatumPatternId}
          orientation={['diagonalRightToLeft']}
          stroke={theme?.axisStyles.x.bottom.axisLine.stroke}
          strokeWidth={1.5}
          width={6}
        />
      </svg>
      <div className="controls">
        {/** data */}
        <div>
          <strong>data</strong>
          <label>
            <input
              checked={negativeValues}
              type="checkbox"
              onChange={() => setNegativeValues(!negativeValues)}
            />
            negative values (SF)
          </label>
          <label>
            <input
              checked={missingValues}
              type="checkbox"
              onChange={() => setMissingValues(!missingValues)}
            />
            missing values
          </label>
          <label>
            <input
              checked={fewerDatum}
              type="checkbox"
              onChange={() => setFewerDatum(!fewerDatum)}
            />
            fewer datum
          </label>
        </div>

        {/** theme */}
        <div>
          <strong>theme</strong>
          <label>
            <input
              checked={theme === lightTheme}
              type="radio"
              onChange={() => setTheme(lightTheme)}
            />
            light
          </label>
          <label>
            <input
              checked={theme === darkTheme}
              type="radio"
              onChange={() => setTheme(darkTheme)}
            />
            dark
          </label>
          <label>
            <input
              checked={theme === customTheme}
              type="radio"
              onChange={() => setTheme(customTheme)}
            />
            custom
          </label>
        </div>

        <br />

        {/** series */}
        {/** orientation */}
        <div>
          <strong>series orientation</strong>
          <label>
            <input
              checked={!renderHorizontally}
              type="radio"
              onChange={() => setRenderHorizontally(false)}
            />
            vertical
          </label>
          <label>
            <input
              checked={renderHorizontally}
              type="radio"
              onChange={() => setRenderHorizontally(true)}
            />
            horizontal
          </label>
        </div>
        <div>
          <strong>line series</strong>
          <label>
            <input
              checked={renderAreaLineOrStack === 'line'}
              type="radio"
              onChange={() => {
                if (renderBarStackOrGroup === 'barstack' || renderBarStackOrGroup === 'bargroup') {
                  setRenderBarStackOrGroup('none');
                }
                setRenderAreaLineOrStack('line');
              }}
            />
            line
          </label>
          <label>
            <input
              checked={renderAreaLineOrStack === 'area'}
              type="radio"
              onChange={() => {
                if (renderBarStackOrGroup === 'barstack' || renderBarStackOrGroup === 'bargroup') {
                  setRenderBarStackOrGroup('none');
                }
                setRenderAreaLineOrStack('area');
              }}
            />
            area
          </label>
          <label>
            <input
              checked={renderAreaLineOrStack === 'areastack'}
              type="radio"
              onChange={() => {
                setRenderBarStackOrGroup('none');
                setRenderAreaLineOrStack('areastack');
              }}
            />
            area stack
          </label>
          <label>
            <input
              checked={renderAreaLineOrStack === 'none'}
              type="radio"
              onChange={() => setRenderAreaLineOrStack('none')}
            />
            none
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <strong>curve shape</strong>
          <label>
            <input
              checked={curveType === 'linear'}
              disabled={renderAreaLineOrStack === 'none'}
              type="radio"
              onChange={() => setCurveType('linear')}
            />
            linear
          </label>
          <label>
            <input
              checked={curveType === 'cardinal'}
              disabled={renderAreaLineOrStack === 'none'}
              type="radio"
              onChange={() => setCurveType('cardinal')}
            />
            cardinal (smooth)
          </label>
          <label>
            <input
              checked={curveType === 'step'}
              disabled={renderAreaLineOrStack === 'none'}
              type="radio"
              onChange={() => setCurveType('step')}
            />
            step
          </label>
        </div>
        {/** glyph */}
        <div>
          <strong>glyph series</strong>
          <label>
            <input
              checked={renderGlyphSeries}
              type="checkbox"
              onChange={() => setRenderGlyphSeries(!renderGlyphSeries)}
            />
            render glyphs
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            <input
              checked={glyphComponent === 'circle'}
              disabled={!renderGlyphSeries}
              type="radio"
              onChange={() => setGlyphComponent('circle')}
            />
            circle
          </label>
          <label>
            <input
              checked={glyphComponent === 'star'}
              disabled={!renderGlyphSeries}
              type="radio"
              onChange={() => setGlyphComponent('star')}
            />
            star
          </label>
          <label>
            <input
              checked={glyphComponent === 'cross'}
              disabled={!renderGlyphSeries}
              type="radio"
              onChange={() => setGlyphComponent('cross')}
            />
            cross
          </label>
          <label>
            <input
              checked={glyphComponent === '🍍'}
              disabled={!renderGlyphSeries}
              type="radio"
              onChange={() => setGlyphComponent('🍍')}
            />
            🍍
          </label>
        </div>
        <div>
          <strong>bar series</strong>
          <label>
            <input
              checked={renderBarStackOrGroup === 'bar'}
              type="radio"
              onChange={() => {
                if (renderAreaLineOrStack === 'areastack') {
                  setRenderAreaLineOrStack('none');
                }
                setRenderBarStackOrGroup('bar');
              }}
            />
            bar
          </label>
          <label>
            <input
              checked={renderBarStackOrGroup === 'barstack'}
              type="radio"
              onChange={() => {
                setRenderAreaLineOrStack('none');
                setRenderBarStackOrGroup('barstack');
              }}
            />
            bar stack
          </label>
          <label>
            <input
              checked={renderBarStackOrGroup === 'bargroup'}
              type="radio"
              onChange={() => {
                setRenderAreaLineOrStack('none');
                setRenderBarStackOrGroup('bargroup');
              }}
            />
            bar group
          </label>
          <label>
            <input
              checked={renderBarStackOrGroup === 'none'}
              type="radio"
              onChange={() => setRenderBarStackOrGroup('none')}
            />
            none
          </label>
        </div>
        <div>
          <strong>stack series offset</strong>
          <label>
            <input
              checked={stackOffset == null}
              disabled={
                renderAreaLineOrStack !== 'areastack' && renderBarStackOrGroup !== 'barstack'
              }
              type="radio"
              onChange={() => setStackOffset(undefined)}
            />
            auto (zero-baseline)
          </label>
          <label>
            <input
              checked={stackOffset === 'expand'}
              disabled={
                renderAreaLineOrStack !== 'areastack' && renderBarStackOrGroup !== 'barstack'
              }
              type="radio"
              onChange={() => setStackOffset('expand')}
            />
            expand (values sum to 1)
          </label>
          <label>
            <input
              checked={stackOffset === 'wiggle'}
              disabled={
                renderAreaLineOrStack !== 'areastack' && renderBarStackOrGroup !== 'barstack'
              }
              type="radio"
              onChange={() => setStackOffset('wiggle')}
            />
            wiggle (stream graph)
          </label>
        </div>

        <br />
        {/** tooltip */}
        <div>
          <strong>tooltip</strong>
          <label>
            <input
              checked={showTooltip}
              type="checkbox"
              onChange={() => setShowTooltip(!showTooltip)}
            />
            show tooltip
          </label>
          <label>
            <input
              checked={showTooltip && snapTooltipToDatumX}
              disabled={!showTooltip || !canSnapTooltipToDatum}
              type="checkbox"
              onChange={() => setSnapTooltipToDatumX(!snapTooltipToDatumX)}
            />
            snap tooltip to datum x
          </label>
          <label>
            <input
              checked={showTooltip && snapTooltipToDatumY}
              disabled={!showTooltip || !canSnapTooltipToDatum}
              type="checkbox"
              onChange={() => setSnapTooltipToDatumY(!snapTooltipToDatumY)}
            />
            snap tooltip to datum y
          </label>
          <label>
            <input
              checked={showTooltip && showVerticalCrosshair}
              disabled={!showTooltip}
              type="checkbox"
              onChange={() => setShowVerticalCrosshair(!showVerticalCrosshair)}
            />
            vertical crosshair
          </label>
          <label>
            <input
              checked={showTooltip && showHorizontalCrosshair}
              disabled={!showTooltip}
              type="checkbox"
              onChange={() => setShowHorizontalCrosshair(!showHorizontalCrosshair)}
            />
            horizontal crosshair
          </label>
          <label>
            <input
              checked={showTooltip && sharedTooltip}
              disabled={!showTooltip}
              type="checkbox"
              onChange={() => setSharedTooltip(!sharedTooltip)}
            />
            shared tooltip
          </label>
        </div>
        <div>
          <strong>tooltip glyph</strong>
          <label>
            <input
              checked={enableTooltipGlyph}
              disabled={!canSnapTooltipToDatum}
              type="checkbox"
              onChange={() => setEnableTooltipGlyph(!enableTooltipGlyph)}
            />
            show custom tooltip glyph
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            <input
              checked={tooltipGlyphComponent === 'circle'}
              disabled={!enableTooltipGlyph || !canSnapTooltipToDatum}
              type="radio"
              onChange={() => setTooltipGlyphComponent('circle')}
            />
            circle
          </label>
          <label>
            <input
              checked={tooltipGlyphComponent === 'star'}
              disabled={!enableTooltipGlyph || !canSnapTooltipToDatum}
              type="radio"
              onChange={() => setTooltipGlyphComponent('star')}
            />
            star
          </label>
          <label>
            <input
              checked={tooltipGlyphComponent === 'cross'}
              disabled={!enableTooltipGlyph || !canSnapTooltipToDatum}
              type="radio"
              onChange={() => setTooltipGlyphComponent('cross')}
            />
            cross
          </label>
          <label>
            <input
              checked={tooltipGlyphComponent === '🍍'}
              disabled={!enableTooltipGlyph || !canSnapTooltipToDatum}
              type="radio"
              onChange={() => setTooltipGlyphComponent('🍍')}
            />
            🍍
          </label>
        </div>
        {/** annotation */}
        <div>
          <strong>annotation</strong> (click chart to update)
          <label>
            <input
              checked={annotationDataKey == null}
              type="radio"
              onChange={() => setAnnotationDataKey(null)}
            />
            none
          </label>
          <label>
            <input
              checked={annotationDataKey === 'San Francisco'}
              type="radio"
              onChange={() => setAnnotationDataKey('San Francisco')}
            />
            SF
          </label>
          <label>
            <input
              checked={annotationDataKey === 'New York'}
              type="radio"
              onChange={() => setAnnotationDataKey('New York')}
            />
            NY
          </label>
          <label>
            <input
              checked={annotationDataKey === 'Austin'}
              type="radio"
              onChange={() => setAnnotationDataKey('Austin')}
            />
            Austin
          </label>
          &nbsp;&nbsp;&nbsp;
          <strong>type</strong>
          <label>
            <input
              checked={annotationType === 'circle'}
              type="radio"
              onChange={() => setAnnotationType('circle')}
            />
            circle
          </label>
          <label>
            <input
              checked={annotationType === 'line'}
              type="radio"
              onChange={() => setAnnotationType('line')}
            />
            line
          </label>
          &nbsp;&nbsp;&nbsp;
          <label>
            <input
              checked={editAnnotationLabelPosition}
              type="checkbox"
              onChange={() => setEditAnnotationLabelPosition(!editAnnotationLabelPosition)}
            />
            edit label position
          </label>
        </div>

        <br />

        {/** axes */}
        <div>
          <strong>axes</strong>
          <label>
            <input
              checked={xAxisOrientation === 'bottom'}
              type="radio"
              onChange={() => setXAxisOrientation('bottom')}
            />
            bottom
          </label>
          <label>
            <input
              checked={xAxisOrientation === 'top'}
              type="radio"
              onChange={() => setXAxisOrientation('top')}
            />
            top
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            <input
              checked={yAxisOrientation === 'left'}
              type="radio"
              onChange={() => setYAxisOrientation('left')}
            />
            left
          </label>
          <label>
            <input
              checked={yAxisOrientation === 'right'}
              type="radio"
              onChange={() => setYAxisOrientation('right')}
            />
            right
          </label>
        </div>

        {/** grid */}
        <div>
          <strong>grid</strong>
          <label>
            <input
              checked={showGridRows && !showGridColumns}
              type="radio"
              onChange={() => setGridProps([true, false])}
            />
            rows
          </label>
          <label>
            <input
              checked={!showGridRows && showGridColumns}
              type="radio"
              onChange={() => setGridProps([false, true])}
            />
            columns
          </label>
          <label>
            <input
              checked={showGridRows && showGridColumns}
              type="radio"
              onChange={() => setGridProps([true, true])}
            />
            both
          </label>
          <label>
            <input
              checked={!showGridRows && !showGridColumns}
              type="radio"
              onChange={() => setGridProps([false, false])}
            />
            none
          </label>
        </div>
        {/** animation trajectory */}
        <div>
          <label>
            <input
              checked={useAnimatedComponents}
              type="checkbox"
              onChange={() => setUseAnimatedComponents(!useAnimatedComponents)}
            />
            use animated components
          </label>

          {useAnimatedComponents && (
            <>
              &nbsp;&nbsp;&nbsp;
              <strong>axis + grid animation</strong>
              <label>
                <input
                  checked={animationTrajectory === 'center'}
                  type="radio"
                  onChange={() => setAnimationTrajectory('center')}
                />
                from center
              </label>
              <label>
                <input
                  checked={animationTrajectory === 'outside'}
                  type="radio"
                  onChange={() => setAnimationTrajectory('outside')}
                />
                from outside
              </label>
              <label>
                <input
                  checked={animationTrajectory === 'min'}
                  type="radio"
                  onChange={() => setAnimationTrajectory('min')}
                />
                from min
              </label>
              <label>
                <input
                  checked={animationTrajectory === 'max'}
                  type="radio"
                  onChange={() => setAnimationTrajectory('max')}
                />
                from max
              </label>
            </>
          )}
        </div>
      </div>
      <style jsx>{`
        .controls {
          font-size: 13px;
          line-height: 1.5em;
        }
        .controls > div {
          margin-bottom: 4px;
        }
        label {
          font-size: 12px;
        }
        input[type='radio'] {
          height: 10px;
        }
        .pattern-lines {
          position: absolute;
          pointer-events: none;
          opacity: 0;
        }
      `}</style>
    </>
  );
}
