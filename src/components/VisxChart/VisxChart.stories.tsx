import styled from '@emotion/styled';
import { Meta, StoryObj } from '@storybook/react';
import { GlyphCross, GlyphDot, GlyphStar } from '@visx/glyph';
import cityTemperature, { CityTemperature } from '@visx/mock-data/lib/mocks/cityTemperature';
import { GlyphProps, ThemeContext } from '@visx/xychart';
import { RenderTooltipGlyphProps } from '@visx/xychart/lib/components/Tooltip';
import React, { useContext } from 'react';

import { defaultXAxisTickFormatter, VisxChart } from '.';
import { VisxChartDatum, VisxChartProps } from './types';

const cityTemperatures = cityTemperature.slice();
const dataMissingValues = cityTemperatures.map((d, i) =>
  i === 10 || i === 11
    ? { ...d, Austin: 'null', 'New York': 'notanumber', 'San Francisco': 'nope' }
    : d,
);
const dataSmall = cityTemperatures.slice(0, 15);
const dataSmallMissingValues = dataMissingValues.slice(0, 15);
const getDate = (d: CityTemperature) => new Date(d.date).valueOf();
const getSfTemperature = (d: CityTemperature) => Number(d['San Francisco']);
const getNegativeSfTemperature = (d: CityTemperature) => -getSfTemperature(d);
const getNyTemperature = (d: CityTemperature) => Number(d['New York']);
const getAustinTemperature = (d: CityTemperature) => Number(d.Austin);
type City = 'San Francisco' | 'New York' | 'Austin';

const Box = styled('div')`
  height: 545px;
  border: 1px solid gainsboro;
  overflow: hidden;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.black900};
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
}: GlyphProps<VisxChartDatum> & Pick<TemplateProps, 'glyphComponent'>) => {
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
}: RenderTooltipGlyphProps<VisxChartDatum> & Pick<TemplateProps, 'tooltipGlyphComponent'>) => {
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
  showTooltipGlyph: boolean;
  showTooltip: boolean;
  negativeValues: boolean;
  missingValues: boolean;
  lessData: boolean;
};
type VisxChartIntegrationProps = Omit<
  VisxChartProps,
  'series' | 'renderTooltip' | 'renderTooltipGlyph' | 'renderGlyph'
> &
  TemplateProps;

const VisxChartIntegration: React.FunctionComponent<VisxChartIntegrationProps> = (args) => {
  const glyphComponent = args.glyphComponent;
  const showTooltipGlyph = args.showTooltipGlyph;
  const showTooltip = args.showTooltip;
  const tooltipGlyphComponent = args.tooltipGlyphComponent;
  const negativeValues = args.negativeValues;
  const missingValues = args.missingValues;
  const lessData = args.lessData;
  const sharedTooltip = args.sharedTooltip;

  const computedData = lessData
    ? missingValues
      ? dataSmallMissingValues
      : dataSmall
    : missingValues
    ? dataMissingValues
    : cityTemperatures;

  const series: VisxChartProps['series'] = [
    {
      colorToken: 'primary500',
      data: computedData.map((d) => ({
        x: getDate(d),
        y: negativeValues ? getNegativeSfTemperature(d) : getSfTemperature(d),
      })),
      id: 'San Francisco',
    },
    {
      colorToken: 'secondary500',
      data: computedData.map((d) => ({
        x: getDate(d),
        y: getNyTemperature(d),
      })),
      id: 'New York',
    },
    {
      colorToken: 'warning500',
      data: computedData.map((d) => ({
        x: getDate(d),
        y: getAustinTemperature(d),
      })),
      id: 'Austin',
    },
  ];

  const renderTooltipGlyph: VisxChartProps['renderTooltipGlyph'] = showTooltipGlyph
    ? (props) => <TooltipGlyph {...props} tooltipGlyphComponent={tooltipGlyphComponent} />
    : undefined;

  const renderTooltip: VisxChartProps['renderTooltip'] = showTooltip
    ? ({ tooltipData, colorScale }) => (
        <div style={{ background: '#E7E7E8', borderRadius: 8, padding: 16 }}>
          {/** date */}
          {tooltipData?.nearestDatum?.datum && tooltipData?.nearestDatum?.datum.x
            ? defaultXAxisTickFormatter(
                tooltipData?.nearestDatum?.datum && tooltipData?.nearestDatum?.datum.x,
              )
            : 'No date'}
          <br />
          <br />
          {/** temperatures */}
          {(
            (sharedTooltip
              ? Object.keys(tooltipData?.datumByKey ?? {})
              : [tooltipData?.nearestDatum?.key]
            ).filter((city) => city) as City[]
          ).map((city) => {
            const temperature = tooltipData?.nearestDatum?.datum.y;

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
        </div>
      )
    : undefined;

  const renderGlyph: VisxChartProps['renderGlyph'] = (props) => (
    <Glyph {...props} glyphComponent={glyphComponent} />
  );

  return (
    <Box>
      <VisxChart
        {...args}
        renderGlyph={renderGlyph}
        renderTooltip={renderTooltip}
        renderTooltipGlyph={renderTooltipGlyph}
        series={series}
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
      options: ['glyph', 'line', 'area', 'areastack', 'none'],
    },
    curveType: {
      control: 'select',
      options: ['linear', 'cardinal', 'step'],
    },
    glyphComponent: {
      control: 'select',
      options: ['star', 'cross', 'circle', '🍍'],
    },
    tooltipGlyphComponent: {
      control: 'select',
      options: ['star', 'cross', 'circle', '🍍'],
    },
    xAxisOrientation: {
      control: 'select',
      options: ['top', 'bottom'],
    },
    yAxisOrientation: {
      control: 'select',
      options: ['left', 'right'],
    },
  },
  args: {
    axisDomainLineColorToken: 'white100',
    axisTicksTextColorToken: 'white100',
    axisTypographyToken: 'bodySmallRegular',
    chartType: 'areastack',
    crosshairColorToken: 'primary500',
    curveType: 'linear',
    glyphComponent: 'star',
    lessData: false,
    missingValues: false,
    negativeValues: false,
    sharedTooltip: true,
    showGridColumns: false,
    showGridRows: false,
    showTooltip: true,
    showTooltipGlyph: false,
    tickLength: 4,
    tooltipGlyphComponent: 'star',
    tooltipShowHorizontalCrosshair: false,
    tooltipShowVerticalCrosshair: false,
    tooltipSnapTooltipToDatumX: true,
    tooltipSnapTooltipToDatumY: false,
    xAxisOrientation: 'bottom',
    yAxisOrientation: 'right',
  } as VisxChartIntegrationProps,
};
