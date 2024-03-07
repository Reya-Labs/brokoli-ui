import styled from '@emotion/styled';
import { Meta, StoryObj } from '@storybook/react';
import { GlyphCross, GlyphDot, GlyphStar } from '@visx/glyph';
import cityTemperature, { CityTemperature } from '@visx/mock-data/lib/mocks/cityTemperature';
import { GlyphProps, ThemeContext } from '@visx/xychart';
import { RenderTooltipGlyphProps } from '@visx/xychart/lib/components/Tooltip';
import React, { useContext } from 'react';

import { TokenTypography } from '../TokenTypography';
import { Typography } from '../Typography';
import { VisxChart } from '.';
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

const ParentBox = styled('div')`
  height: 445px;
  border: 1px solid yellow;
  display: flex;
  flex-direction: row;
  gap: 8px;
  background: ${({ theme }) => theme.colors.black900};
  padding: 32px;
`;
const Box = styled('div')`
  height: 100%;
  border: 1px solid gainsboro;
  overflow: hidden;
  border-radius: 8px;
  flex: 5;
  background: ${({ theme }) => theme.colors.black900};
`;

const LeftBox = styled('div')`
  height: 100%;
  border-radius: 8px;
  flex: 1;
  background: ${({ theme }) => theme.colors.black900};
`;

const RightBox = styled('div')`
  height: 100%;
  border-radius: 8px;
  flex: 1;
  background: ${({ theme }) => theme.colors.black900};
`;

const TooltipBox = styled('div')`
  background: ${({ theme }) => theme.colors.secondary900};
  border: 1px solid ${({ theme }) => theme.colors.secondary700};
  border-radius: 8px;
  padding: 16px;
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
    ? ({ tooltipData, colorScale }) => {
        const nearestDatum = tooltipData?.nearestDatum;
        const datum = nearestDatum?.datum;
        if (!datum) {
          return null;
        }
        return (
          <TooltipBox>
            <Typography colorToken="white100" typographyToken="h3Bold">
              {datum.x
                ? new Intl.DateTimeFormat(undefined, {
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  }).format(datum.x)
                : 'No date'}
            </Typography>
            {(
              (sharedTooltip
                ? Object.keys(tooltipData?.datumByKey ?? {})
                : [nearestDatum?.key]
              ).filter((city) => city) as City[]
            ).map((city) => {
              const citySerie = series[city === 'San Francisco' ? 0 : city === 'New York' ? 1 : 2];
              const temperature = citySerie.data[nearestDatum?.index].y;

              return (
                <TokenTypography
                  key={city}
                  colorToken={
                    city === 'New York'
                      ? 'secondary500'
                      : city === 'San Francisco'
                      ? 'primary500'
                      : 'warning500'
                  }
                  token={
                    temperature == null || Number.isNaN(temperature) ? '–' : ` ${temperature}° F`
                  }
                  tokenColorToken={
                    city === 'New York'
                      ? 'secondary300'
                      : city === 'San Francisco'
                      ? 'primary300'
                      : 'warning300'
                  }
                  typographyToken="bodySmallRegular"
                  value={city}
                />
              );
            })}
          </TooltipBox>
        );
      }
    : undefined;

  const renderGlyph: VisxChartProps['renderGlyph'] = (props) => (
    <Glyph {...props} glyphComponent={glyphComponent} />
  );

  return (
    <ParentBox>
      <LeftBox>
        <Typography colorToken="white100" typographyToken="bodySmallRegular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Typography>
      </LeftBox>
      <Box>
        <VisxChart
          {...args}
          renderGlyph={renderGlyph}
          renderTooltip={renderTooltip}
          renderTooltipGlyph={renderTooltipGlyph}
          series={series}
        />
      </Box>
      <RightBox>
        <Typography colorToken="white100" typographyToken="bodySmallRegular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Typography>
      </RightBox>
    </ParentBox>
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
    chartType: 'line',
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
    showTooltipGlyph: true,
    tickLength: 4,
    tooltipGlyphComponent: 'circle',
    tooltipShowHorizontalCrosshair: true,
    tooltipShowVerticalCrosshair: true,
    tooltipSnapTooltipToDatumX: true,
    tooltipSnapTooltipToDatumY: true,
    xAxisOrientation: 'bottom',
    yAxisOrientation: 'right',
  } as VisxChartIntegrationProps,
};
