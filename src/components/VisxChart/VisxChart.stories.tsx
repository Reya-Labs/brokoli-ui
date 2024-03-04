import styled from '@emotion/styled';
import { Meta, StoryObj } from '@storybook/react';
import { GlyphCross, GlyphDot, GlyphStar } from '@visx/glyph';
import cityTemperature, { CityTemperature } from '@visx/mock-data/lib/mocks/cityTemperature';
import { GlyphProps, ThemeContext } from '@visx/xychart';
import { RenderTooltipGlyphProps } from '@visx/xychart/lib/components/Tooltip';
import React, { useContext } from 'react';

import { VisxChart } from '.';
import { CustomChartBackground } from './CustomChartBackground';
import { VisxChartProps } from './types';

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
  console.log('### rendering');
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
  lessData: boolean;
  withCustomBackground: boolean;
};
const VisxChartIntegration: React.FunctionComponent<
  VisxChartProps<CityTemperature> & TemplateProps
> = (args) => {
  const glyphComponent = args.glyphComponent;
  const enableTooltipGlyph = args.enableTooltipGlyph;
  const showTooltip = args.showTooltip;
  const tooltipGlyphComponent = args.tooltipGlyphComponent;
  const negativeValues = args.negativeValues;
  const missingValues = args.missingValues;
  const withCustomBackground = args.withCustomBackground;
  const lessData = args.lessData;
  const sharedTooltip = args.sharedTooltip;
  const renderHorizontally = args.seriesOrientation === 'horizontal';

  const computedData = lessData
    ? missingValues
      ? dataSmallMissingValues
      : dataSmall
    : missingValues
    ? dataMissingValues
    : data;

  const series = [
    {
      accessors: {
        x: negativeValues ? getNegativeSfTemperature : getSfTemperature,
        y: getDate,
      },
      id: 'San Francisco',
    },
    {
      accessors: {
        x: getNyTemperature,
        y: getDate,
      },
      id: 'New York',
    },
    {
      accessors: {
        x: getAustinTemperature,
        y: getDate,
      },
      id: 'Austin',
    },
  ];

  const renderTooltipGlyph: VisxChartProps<CityTemperature>['renderTooltipGlyph'] =
    enableTooltipGlyph
      ? (props) => <TooltipGlyph {...props} tooltipGlyphComponent={tooltipGlyphComponent} />
      : undefined;

  const renderTooltip: VisxChartProps<CityTemperature>['renderTooltip'] = showTooltip
    ? ({ tooltipData, colorScale }) => (
        <>
          {/** date */}
          {(tooltipData?.nearestDatum?.datum && getDate(tooltipData?.nearestDatum?.datum)) ||
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
            const accessorY = getDate;
            const accessorX =
              city === 'New York'
                ? getNyTemperature
                : city === 'Austin'
                ? getAustinTemperature
                : getSfTemperature;
            const accessor = renderHorizontally ? accessorX : accessorY;
            const temperature =
              tooltipData?.nearestDatum?.datum && accessor(tooltipData?.nearestDatum?.datum);

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
      )
    : undefined;

  const renderGlyph: VisxChartProps<CityTemperature>['renderGlyph'] = (props) => (
    <Glyph {...props} glyphComponent={glyphComponent} />
  );

  return (
    <Box>
      <VisxChart<CityTemperature>
        animated={args.animated}
        animationTrajectory={args.animationTrajectory}
        axisNumTicks={args.axisNumTicks}
        chartType={args.chartType}
        curveType={args.curveType}
        customChartBackground={withCustomBackground ? <CustomChartBackground /> : null}
        data={computedData}
        renderGlyph={renderGlyph}
        renderTooltip={renderTooltip}
        renderTooltipGlyph={renderTooltipGlyph}
        series={series}
        seriesOrientation={renderHorizontally}
        sharedTooltip={sharedTooltip}
        showGridColumns={args.showGridColumns}
        showGridRows={args.showGridRows}
        stackOffset={args.stackOffset}
        themeName={args.themeName}
        tooltipShowHorizontalCrosshair={args.tooltipShowHorizontalCrosshair}
        tooltipShowVerticalCrosshair={args.tooltipShowVerticalCrosshair}
        tooltipSnapTooltipToDatumX={args.tooltipSnapTooltipToDatumX}
        tooltipSnapTooltipToDatumY={args.tooltipSnapTooltipToDatumY}
        xAxisOrientation={args.xAxisOrientation}
        yAxisOrientation={args.yAxisOrientation}
      />
    </Box>
  );
};

export default {
  args: {},
  component: VisxChartIntegration,
  title: 'Components/VisxChart',
} as Meta<typeof VisxChartIntegration>;

export const Default: StoryObj<typeof VisxChartIntegration> = {
  argTypes: {
    chartType: {
      control: 'select',
      options: ['glyph', 'bar', 'barstack', 'bargroup', 'line', 'area', 'areastack', 'none'],
    },
    curveType: {
      control: 'select',
      options: ['linear', 'cardinal', 'step'],
    },
    glyphComponent: {
      control: 'select',
      options: ['star', 'cross', 'circle', '🍍'],
    },
    themeName: {
      control: 'select',
      options: ['dark', 'light', 'reya'],
    },
    tooltipGlyphComponent: {
      control: 'select',
      options: ['star', 'cross', 'circle', '🍍'],
    },
  },
  args: {
    chartType: 'line',
    curveType: 'linear',
    enableTooltipGlyph: false,
    glyphComponent: 'star',
    lessData: false,
    missingValues: false,
    negativeValues: false,
    seriesOrientation: false,
    sharedTooltip: false,
    showGridColumns: false,
    showGridRows: false,
    showTooltip: false,
    themeName: 'dark',
    tooltipGlyphComponent: 'star',
    tooltipShowHorizontalCrosshair: false,
    tooltipShowVerticalCrosshair: false,
    tooltipSnapTooltipToDatumX: false,
    tooltipSnapTooltipToDatumY: false,
    withCustomBackground: false,
  },
};
