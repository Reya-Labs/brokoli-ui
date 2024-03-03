import styled from '@emotion/styled';
import { Meta, StoryObj } from '@storybook/react';
import { GlyphCross, GlyphDot, GlyphStar } from '@visx/glyph';
import cityTemperature, { CityTemperature } from '@visx/mock-data/lib/mocks/cityTemperature';
import { GlyphProps, ThemeContext } from '@visx/xychart';
import { RenderTooltipGlyphProps } from '@visx/xychart/lib/components/Tooltip';
import React, { useContext, useMemo, useState } from 'react';

import { Typography } from '../Typography';
import { VisxChart } from '.';
import { CustomChartBackground } from './CustomChartBackground';
import { VisxChartProps } from './types';

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
`;

const Glyph = ({
  x,
  y,
  size,
  color,
  onPointerMove,
  onPointerOut,
  onPointerUp,
  glyphComponent,
}: GlyphProps<CityTemperature> & Pick<TemplateProps, 'glyphComponent'>) => {
  const theme = useContext(ThemeContext);
  const glyphOutline = theme.gridStyles.stroke;
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
      <GlyphDot fill={color} left={x} r={size / 2} stroke={glyphOutline} top={y} {...handlers} />
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
};

const TooltipGlyph = ({
  x,
  y,
  size,
  color,
  onPointerMove,
  onPointerOut,
  onPointerUp,
  isNearestDatum,
  tooltipGlyphComponent,
}: RenderTooltipGlyphProps<CityTemperature> & Pick<TemplateProps, 'tooltipGlyphComponent'>) => {
  const handlers = { onPointerMove, onPointerOut, onPointerUp };
  const theme = useContext(ThemeContext);
  const glyphOutline = theme.gridStyles.stroke;
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
    return <GlyphDot fill={color} left={x} r={size} stroke={glyphOutline} top={y} {...handlers} />;
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
};
type TemplateProps = {
  glyphComponent: 'star' | 'cross' | 'circle' | '🍍';
  tooltipGlyphComponent: 'star' | 'cross' | 'circle' | '🍍';
  enableTooltipGlyph: boolean;
  showTooltip: boolean;
  negativeValues: boolean;
  missingValues: boolean;
  fewerDatum: boolean;
  withCustomBackground: boolean;
};
const Template: React.FunctionComponent<VisxChartProps<CityTemperature> & TemplateProps> = (
  args,
) => {
  const glyphComponent = args.glyphComponent || 'star';
  const enableTooltipGlyph = args.enableTooltipGlyph;
  const showTooltip = args.showTooltip;
  const tooltipGlyphComponent = args.tooltipGlyphComponent || 'star';
  const negativeValues = args.negativeValues || false;
  const missingValues = args.missingValues || false;
  const withCustomBackground = args.withCustomBackground || false;
  const fewerDatum = args.fewerDatum || false;
  const themeName = args.themeName;
  const sharedTooltip = args.sharedTooltip;

  const [renderHorizontally, setRenderHorizontally] = useState(false);

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
  const computedData = fewerDatum
    ? missingValues
      ? dataSmallMissingValues
      : dataSmall
    : missingValues
    ? dataMissingValues
    : data;

  return (
    <>
      <Box>
        <VisxChart<CityTemperature>
          {...{
            animated: args.animated,
            animationTrajectory: args.animationTrajectory,
            config,
            curveType: args.curveType,
            customChartBackground: withCustomBackground ? <CustomChartBackground /> : null,
            data: computedData,
            numTicks,
            renderAs: args.renderAs,
            renderGlyph: (props) => <Glyph {...props} glyphComponent={glyphComponent} />,
            renderHorizontally,
            renderTooltip: showTooltip
              ? ({ tooltipData, colorScale }) => (
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
                          {temperature == null || Number.isNaN(temperature)
                            ? '–'
                            : `${temperature}° F`}
                        </div>
                      );
                    })}
                  </>
                )
              : undefined,
            renderTooltipGlyph: enableTooltipGlyph
              ? (props) => <TooltipGlyph {...props} tooltipGlyphComponent={tooltipGlyphComponent} />
              : undefined,
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
            showGridColumns: args.showGridColumns,
            showGridRows: args.showGridRows,
            stackOffset: args.stackOffset,
            themeName,
            tooltipShowHorizontalCrosshair: args.tooltipShowHorizontalCrosshair,
            tooltipShowVerticalCrosshair: args.tooltipShowVerticalCrosshair,
            tooltipSnapTooltipToDatumX: args.tooltipSnapTooltipToDatumX,
            tooltipSnapTooltipToDatumY: args.tooltipSnapTooltipToDatumY,
            xAxisOrientation: args.xAxisOrientation,
            yAxisOrientation: args.yAxisOrientation,
          }}
        />
      </Box>
      <div className="controls">
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
      </div>
    </>
  );
};

export const Default: StoryObj<typeof Template> = {
  args: {},
};
