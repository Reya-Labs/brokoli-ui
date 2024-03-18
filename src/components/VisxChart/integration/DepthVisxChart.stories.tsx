import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ColorTokens } from '../../../foundation/Colors';
import { Typography } from '../../Typography';
import { VisxTimelineChart, VisxTimelineChartProps } from '../VisxTimelineChart';
import { Glyph } from './components/Glyph';
import { TooltipGlyph } from './components/TooltipGlyph';
import { mockDepthData } from './mock/line-axis-mock-data';
import { Box, LeftBox, ParentBox, RightBox, TooltipBox } from './Stories.styled';
import { SharedIntegrationProps } from './types';

type ChartPosition = 'Left' | 'Right';

type VisxTimelineChartIntegrationProps = Omit<
  VisxTimelineChartProps,
  'series' | 'renderTooltip' | 'renderTooltipGlyph' | 'renderGlyph'
> &
  SharedIntegrationProps;

const VisxTimelineChartIntegration: React.FunctionComponent<VisxTimelineChartIntegrationProps> = (
  args,
) => {
  const glyphComponent = args.glyphComponent;
  const showTooltipGlyph = args.showTooltipGlyph;
  const showTooltip = args.showTooltip;
  const tooltipGlyphComponent = args.tooltipGlyphComponent;
  const sharedTooltip = args.sharedTooltip;

  const computedData = mockDepthData;

  const series: VisxTimelineChartProps['series'] = [
    {
      colorToken: 'primary500' as ColorTokens,
      data: computedData[0],
      id: 'Left',
    },
    {
      colorToken: 'secondary500' as ColorTokens,
      data: computedData[1],
      id: 'Right',
    },
  ];

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
            {(
              (sharedTooltip
                ? Object.keys(tooltipData?.datumByKey ?? {})
                : [nearestDatum?.key]
              ).filter((cP) => cP) as ChartPosition[]
            ).map((chartPosition) => {
              const dataSerie = series[chartPosition === 'Left' ? 0 : 1];
              const size = dataSerie.data[nearestDatum?.index].y;
              const price = dataSerie.data[nearestDatum?.index].x;

              return (
                <div key={chartPosition}>
                  <Typography
                    colorToken={chartPosition === 'Left' ? 'error500' : 'primary500'}
                    typographyToken="bodyLargeBold"
                  >
                    {chartPosition}
                  </Typography>
                  <Typography
                    colorToken={chartPosition === 'Left' ? 'error500' : 'primary500'}
                    typographyToken="bodySmallRegular"
                  >
                    Price: {price == null || Number.isNaN(price) ? '–' : ` ${price.toFixed(2)}`}
                  </Typography>
                  <Typography
                    key={chartPosition}
                    colorToken={chartPosition === 'Left' ? 'error500' : 'primary500'}
                    typographyToken="bodySmallRegular"
                  >
                    Size: {size == null || Number.isNaN(size) ? '–' : ` ${size.toFixed(2)}`}
                  </Typography>
                </div>
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
        <VisxTimelineChart
          {...args}
          renderGlyph={renderGlyph}
          renderTooltip={renderTooltip}
          renderTooltipGlyph={renderTooltipGlyph}
          series={series}
          xAxisTickFormatter={(value) => value.toString()}
          yAxisTickFormatter={(value) => value.toString()}
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
  component: VisxTimelineChartIntegration,
  title: 'Components/VisxTimelineChart',
} as Meta<typeof VisxTimelineChartIntegration>;

export const Depth: StoryObj<typeof VisxTimelineChartIntegration> = {
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
