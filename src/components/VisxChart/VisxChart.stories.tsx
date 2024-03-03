import styled from '@emotion/styled';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { curveCardinal, curveLinear, curveStep } from '@visx/curve';
import { GlyphCross, GlyphDot, GlyphStar } from '@visx/glyph';
import cityTemperature, { CityTemperature } from '@visx/mock-data/lib/mocks/cityTemperature';
import { AnimationTrajectory } from '@visx/react-spring';
import { darkTheme, GlyphProps, lightTheme, XYChartTheme } from '@visx/xychart';
import { RenderTooltipGlyphProps } from '@visx/xychart/lib/components/Tooltip';
import React, { useCallback, useMemo, useState } from 'react';

import { Typography } from '../Typography';
import { VisxChart } from '.';
import { customTheme } from './customTheme';
import { VisxChartProps } from './types';
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
type City = 'San Francisco' | 'New York' | 'Austin';

export default {
  args: {},
  component: VisxChart,
  title: 'Components/VisxChart',
} as Meta<typeof VisxChart>;

const Box = styled('div')`
  height: 445px;
  position: relative;
`;

const Template: StoryFn<typeof VisxChart> = (args) => {
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
  const [stackOffset, setStackOffset] = useState<VisxChartProps<CityTemperature>['stackOffset']>();
  const [renderGlyphSeries, setRenderGlyphSeries] = useState(false);
  const [editAnnotationLabelPosition, setEditAnnotationLabelPosition] = useState(false);
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
      <Box>
        <VisxChart<CityTemperature>
          {...{
            animated: useAnimatedComponents,
            animationTrajectory,
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
            renderTooltip: ({ tooltipData, colorScale }) => (
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
                    accessors[renderHorizontally ? 'x' : 'y'][city](
                      tooltipData?.nearestDatum?.datum,
                    );

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
            ),
            renderTooltipGlyph,
            series: [
              {
                accessors: {
                  colorAccessor: () => null,
                  date: accessors.date,
                  x: accessors.x['San Francisco'],
                  y: accessors.y['San Francisco'],
                },
                id: 'San Francisco',
              },
              {
                accessors: {
                  colorAccessor: () => null,
                  date: accessors.date,
                  x: accessors.x['New York'],
                  y: accessors.y['New York'],
                },
                id: 'New York',
              },
              {
                accessors: {
                  colorAccessor: () => null,
                  date: accessors.date,
                  x: accessors.x['Austin'],
                  y: accessors.y['Austin'],
                },
                id: 'Austin',
              },
            ],
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
          }}
        />
      </Box>
      <div className="controls">
        {/** data */}
        <div>
          <Typography colorToken="white100" typographyToken="h3Bold">
            data
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            {' '}
            <input
              checked={negativeValues}
              type="checkbox"
              onChange={() => setNegativeValues(!negativeValues)}
            />
            negative values (SF)
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={missingValues}
              type="checkbox"
              onChange={() => setMissingValues(!missingValues)}
            />
            missing values
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={fewerDatum}
              type="checkbox"
              onChange={() => setFewerDatum(!fewerDatum)}
            />
            fewer datum
          </Typography>
        </div>

        {/** theme */}
        <div>
          <Typography colorToken="white100" typographyToken="h3Bold">
            theme
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={theme === lightTheme}
              type="radio"
              onChange={() => setTheme(lightTheme)}
            />
            light
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={theme === darkTheme}
              type="radio"
              onChange={() => setTheme(darkTheme)}
            />
            dark
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={theme === customTheme}
              type="radio"
              onChange={() => setTheme(customTheme)}
            />
            custom
          </Typography>
        </div>

        <br />

        {/** series */}
        {/** orientation */}
        <div>
          <Typography colorToken="white100" typographyToken="h3Bold">
            series orientation
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={!renderHorizontally}
              type="radio"
              onChange={() => setRenderHorizontally(false)}
            />
            vertical
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={renderHorizontally}
              type="radio"
              onChange={() => setRenderHorizontally(true)}
            />
            horizontal
          </Typography>
        </div>
        <div>
          <Typography colorToken="white100" typographyToken="h3Bold">
            line series
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
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
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
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
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={renderAreaLineOrStack === 'areastack'}
              type="radio"
              onChange={() => {
                setRenderBarStackOrGroup('none');
                setRenderAreaLineOrStack('areastack');
              }}
            />
            area stack
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={renderAreaLineOrStack === 'none'}
              type="radio"
              onChange={() => setRenderAreaLineOrStack('none')}
            />
            none
          </Typography>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Typography colorToken="white100" typographyToken="h3Bold">
            curve shape
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={curveType === 'linear'}
              disabled={renderAreaLineOrStack === 'none'}
              type="radio"
              onChange={() => setCurveType('linear')}
            />
            linear
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={curveType === 'cardinal'}
              disabled={renderAreaLineOrStack === 'none'}
              type="radio"
              onChange={() => setCurveType('cardinal')}
            />
            cardinal (smooth)
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={curveType === 'step'}
              disabled={renderAreaLineOrStack === 'none'}
              type="radio"
              onChange={() => setCurveType('step')}
            />
            step
          </Typography>
        </div>
        {/** glyph */}
        <div>
          <Typography colorToken="white100" typographyToken="h3Bold">
            glyph series
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={renderGlyphSeries}
              type="checkbox"
              onChange={() => setRenderGlyphSeries(!renderGlyphSeries)}
            />
            render glyphs
          </Typography>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={glyphComponent === 'circle'}
              disabled={!renderGlyphSeries}
              type="radio"
              onChange={() => setGlyphComponent('circle')}
            />
            circle
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={glyphComponent === 'star'}
              disabled={!renderGlyphSeries}
              type="radio"
              onChange={() => setGlyphComponent('star')}
            />
            star
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={glyphComponent === 'cross'}
              disabled={!renderGlyphSeries}
              type="radio"
              onChange={() => setGlyphComponent('cross')}
            />
            cross
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={glyphComponent === '🍍'}
              disabled={!renderGlyphSeries}
              type="radio"
              onChange={() => setGlyphComponent('🍍')}
            />
            🍍
          </Typography>
        </div>
        <div>
          <Typography colorToken="white100" typographyToken="h3Bold">
            bar series
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
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
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={renderBarStackOrGroup === 'barstack'}
              type="radio"
              onChange={() => {
                setRenderAreaLineOrStack('none');
                setRenderBarStackOrGroup('barstack');
              }}
            />
            bar stack
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={renderBarStackOrGroup === 'bargroup'}
              type="radio"
              onChange={() => {
                setRenderAreaLineOrStack('none');
                setRenderBarStackOrGroup('bargroup');
              }}
            />
            bar group
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={renderBarStackOrGroup === 'none'}
              type="radio"
              onChange={() => setRenderBarStackOrGroup('none')}
            />
            none
          </Typography>
        </div>
        <div>
          <Typography colorToken="white100" typographyToken="h3Bold">
            stack series offset
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={stackOffset == null}
              disabled={
                renderAreaLineOrStack !== 'areastack' && renderBarStackOrGroup !== 'barstack'
              }
              type="radio"
              onChange={() => setStackOffset(undefined)}
            />
            auto (zero-baseline)
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={stackOffset === 'expand'}
              disabled={
                renderAreaLineOrStack !== 'areastack' && renderBarStackOrGroup !== 'barstack'
              }
              type="radio"
              onChange={() => setStackOffset('expand')}
            />
            expand (values sum to 1)
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={stackOffset === 'wiggle'}
              disabled={
                renderAreaLineOrStack !== 'areastack' && renderBarStackOrGroup !== 'barstack'
              }
              type="radio"
              onChange={() => setStackOffset('wiggle')}
            />
            wiggle (stream graph)
          </Typography>
        </div>

        <br />
        {/** tooltip */}
        <div>
          <Typography colorToken="white100" typographyToken="h3Bold">
            tooltip
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={showTooltip}
              type="checkbox"
              onChange={() => setShowTooltip(!showTooltip)}
            />
            show tooltip
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={showTooltip && snapTooltipToDatumX}
              disabled={!showTooltip || !canSnapTooltipToDatum}
              type="checkbox"
              onChange={() => setSnapTooltipToDatumX(!snapTooltipToDatumX)}
            />
            snap tooltip to datum x
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={showTooltip && snapTooltipToDatumY}
              disabled={!showTooltip || !canSnapTooltipToDatum}
              type="checkbox"
              onChange={() => setSnapTooltipToDatumY(!snapTooltipToDatumY)}
            />
            snap tooltip to datum y
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={showTooltip && showVerticalCrosshair}
              disabled={!showTooltip}
              type="checkbox"
              onChange={() => setShowVerticalCrosshair(!showVerticalCrosshair)}
            />
            vertical crosshair
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={showTooltip && showHorizontalCrosshair}
              disabled={!showTooltip}
              type="checkbox"
              onChange={() => setShowHorizontalCrosshair(!showHorizontalCrosshair)}
            />
            horizontal crosshair
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={showTooltip && sharedTooltip}
              disabled={!showTooltip}
              type="checkbox"
              onChange={() => setSharedTooltip(!sharedTooltip)}
            />
            shared tooltip
          </Typography>
        </div>
        <div>
          <Typography colorToken="white100" typographyToken="h3Bold">
            tooltip glyph
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={enableTooltipGlyph}
              disabled={!canSnapTooltipToDatum}
              type="checkbox"
              onChange={() => setEnableTooltipGlyph(!enableTooltipGlyph)}
            />
            show custom tooltip glyph
          </Typography>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={tooltipGlyphComponent === 'circle'}
              disabled={!enableTooltipGlyph || !canSnapTooltipToDatum}
              type="radio"
              onChange={() => setTooltipGlyphComponent('circle')}
            />
            circle
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={tooltipGlyphComponent === 'star'}
              disabled={!enableTooltipGlyph || !canSnapTooltipToDatum}
              type="radio"
              onChange={() => setTooltipGlyphComponent('star')}
            />
            star
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={tooltipGlyphComponent === 'cross'}
              disabled={!enableTooltipGlyph || !canSnapTooltipToDatum}
              type="radio"
              onChange={() => setTooltipGlyphComponent('cross')}
            />
            cross
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={tooltipGlyphComponent === '🍍'}
              disabled={!enableTooltipGlyph || !canSnapTooltipToDatum}
              type="radio"
              onChange={() => setTooltipGlyphComponent('🍍')}
            />
            🍍
          </Typography>
        </div>

        <br />

        {/** axes */}
        <div>
          <Typography colorToken="white100" typographyToken="h3Bold">
            axes
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={xAxisOrientation === 'bottom'}
              type="radio"
              onChange={() => setXAxisOrientation('bottom')}
            />
            bottom
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={xAxisOrientation === 'top'}
              type="radio"
              onChange={() => setXAxisOrientation('top')}
            />
            top
          </Typography>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={yAxisOrientation === 'left'}
              type="radio"
              onChange={() => setYAxisOrientation('left')}
            />
            left
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={yAxisOrientation === 'right'}
              type="radio"
              onChange={() => setYAxisOrientation('right')}
            />
            right
          </Typography>
        </div>

        {/** grid */}
        <div>
          <Typography colorToken="white100" typographyToken="h3Bold">
            grid
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={showGridRows && !showGridColumns}
              type="radio"
              onChange={() => setGridProps([true, false])}
            />
            rows
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={!showGridRows && showGridColumns}
              type="radio"
              onChange={() => setGridProps([false, true])}
            />
            columns
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={showGridRows && showGridColumns}
              type="radio"
              onChange={() => setGridProps([true, true])}
            />
            both
          </Typography>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={!showGridRows && !showGridColumns}
              type="radio"
              onChange={() => setGridProps([false, false])}
            />
            none
          </Typography>
        </div>
        {/** animation trajectory */}
        <div>
          <Typography colorToken="white100" typographyToken="bodySmallRegular">
            <input
              checked={useAnimatedComponents}
              type="checkbox"
              onChange={() => setUseAnimatedComponents(!useAnimatedComponents)}
            />
            use animated components
          </Typography>

          {useAnimatedComponents && (
            <>
              &nbsp;&nbsp;&nbsp;
              <strong>axis + grid animation</strong>
              <Typography colorToken="white100" typographyToken="bodySmallRegular">
                <input
                  checked={animationTrajectory === 'center'}
                  type="radio"
                  onChange={() => setAnimationTrajectory('center')}
                />
                from center
              </Typography>
              <Typography colorToken="white100" typographyToken="bodySmallRegular">
                <input
                  checked={animationTrajectory === 'outside'}
                  type="radio"
                  onChange={() => setAnimationTrajectory('outside')}
                />
                from outside
              </Typography>
              <Typography colorToken="white100" typographyToken="bodySmallRegular">
                <input
                  checked={animationTrajectory === 'min'}
                  type="radio"
                  onChange={() => setAnimationTrajectory('min')}
                />
                from min
              </Typography>
              <Typography colorToken="white100" typographyToken="bodySmallRegular">
                <input
                  checked={animationTrajectory === 'max'}
                  type="radio"
                  onChange={() => setAnimationTrajectory('max')}
                />
                from max
              </Typography>
            </>
          )}
        </div>
      </div>
      <style>{`
        .controls > div {
          margin-bottom: 4px;
          display: flex;
          gap: 8px;
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
};

export const Default: StoryObj<typeof VisxChart> = {
  args: {},
  render: Template,
};
