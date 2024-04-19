import { Meta, StoryObj } from '@storybook/react';
import cityTemperature, { CityTemperature } from '@visx/mock-data/lib/mocks/cityTemperature';
import React from 'react';

import { ColorTokens } from '../../../foundation/Colors';
import { TokenTypography } from '../../TokenTypography';
import { Typography } from '../../Typography';
import { VisxTimelineChart, VisxTimelineChartProps } from '../VisxTimelineChart';
import { Glyph } from './components/Glyph';
import { TooltipGlyph } from './components/TooltipGlyph';
import { Box, LeftBox, ParentBox, RightBox, TooltipBox } from './Stories.styled';
import { SharedIntegrationProps } from './types';

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

type VisxTimelineChartIntegrationProps = Omit<
  VisxTimelineChartProps,
  'series' | 'renderTooltip' | 'renderTooltipGlyph' | 'renderGlyph'
> &
  SharedIntegrationProps & {
    lessData: boolean;
    manyDecimals: boolean;
    missingValues: boolean;
    negativeValues: boolean;
  };

const VisxTimelineChartIntegration: React.FunctionComponent<VisxTimelineChartIntegrationProps> = (
  args,
) => {
  const glyphComponent = args.glyphComponent;
  const showTooltipGlyph = args.showTooltipGlyph;
  const showTooltip = args.showTooltip;
  const tooltipGlyphComponent = args.tooltipGlyphComponent;
  const negativeValues = args.negativeValues;
  const missingValues = args.missingValues;
  const lessData = args.lessData;
  const sharedTooltip = args.sharedTooltip;
  const manyDecimals = args.manyDecimals;

  const computedData = lessData
    ? missingValues
      ? dataSmallMissingValues
      : dataSmall
    : missingValues
    ? dataMissingValues
    : cityTemperatures;

  const series: VisxTimelineChartProps['series'] = [
    {
      colorToken: 'primary500' as ColorTokens,
      data: computedData.map((d) => ({
        x: getDate(d),
        y: negativeValues ? getNegativeSfTemperature(d) : getSfTemperature(d),
      })),
      id: 'San Francisco',
    },
    {
      colorToken: 'secondary500' as ColorTokens,
      data: computedData.map((d) => ({
        x: getDate(d),
        y: getNyTemperature(d),
      })),
      id: 'New York',
    },
    {
      colorToken: 'warning500' as ColorTokens,
      data: computedData.map((d) => ({
        x: getDate(d),
        y: getAustinTemperature(d),
      })),
      id: 'Austin',
    },
  ].map((s) =>
    manyDecimals ? { ...s, data: s.data.map((d) => ({ ...d, y: d.y / 10000000 })) } : s,
  );

  const renderTooltipGlyph: VisxTimelineChartProps['renderTooltipGlyph'] = showTooltipGlyph
    ? (props) => <TooltipGlyph {...props} tooltipGlyphComponent={tooltipGlyphComponent} />
    : undefined;

  const renderTooltip: VisxTimelineChartProps['renderTooltip'] = showTooltip
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
                  typographyToken="bodySmallMedium"
                  value={city}
                />
              );
            })}
          </TooltipBox>
        );
      }
    : undefined;

  const renderGlyph: VisxTimelineChartProps['renderGlyph'] = (props) => (
    <Glyph {...props} glyphComponent={glyphComponent} />
  );

  return (
    <ParentBox>
      <LeftBox>
        <Typography colorToken="white100" typographyToken="bodySmallMedium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Typography>
      </LeftBox>
      <Box>
        <VisxTimelineChart
          {...args}
          renderGlyph={renderGlyph}
          renderTooltip={renderTooltip}
          renderTooltipGlyph={renderTooltipGlyph}
          series={series}
          yAxisTickFormatter={manyDecimals ? (value: number) => value.toString() : undefined}
        />
      </Box>
      <RightBox>
        <Typography colorToken="white100" typographyToken="bodySmallMedium">
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
  component: VisxTimelineChartIntegration,
  title: 'Components/VisxTimelineChart',
} as Meta<typeof VisxTimelineChartIntegration>;

export const Temperature: StoryObj<typeof VisxTimelineChartIntegration> = {
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
    axisTypographyToken: 'bodySmallMedium',
    chartType: 'line',
    crosshairColorToken: 'primary500',
    curveType: 'linear',
    glyphComponent: 'star',
    lessData: false,
    manyDecimals: true,
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
    yRangePercentageOffset: 0,
  } as VisxTimelineChartIntegrationProps,
};
