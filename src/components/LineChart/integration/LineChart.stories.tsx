import styled from '@emotion/styled';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';

import { LineChart } from '../index';
import { CustomChartTooltip } from './CustomChartTooltip';
import { mockedScatterData, mockedTimelineData } from './mock/scatter';

export default {
  argTypes: {},
  component: LineChart,
  title: 'Components/LineChart',
} as Meta<typeof LineChart>;

const Box = styled('div')`
  height: 445px;
`;
const Template: StoryFn<typeof LineChart> = (args) => (
  <Box>
    <LineChart {...args} />
  </Box>
);

export const Default: StoryObj<typeof LineChart> = {
  args: {
    axisTypographyToken: 'bodyXSmallMedium',

    data: [
      {
        colorToken: 'secondary500',
        data: mockedTimelineData[0],
        id: 'points1',
        tooltip: {
          token: '%',
          tokenColorToken: 'secondary700',
        },
      },
    ],
  },
  render: Template,
};

export const WithYMarker: StoryObj<typeof LineChart> = {
  args: {
    axisTypographyToken: 'bodyXSmallMedium',
    data: [
      {
        colorToken: 'secondary500',
        data: mockedTimelineData[0],
        id: 'points1',
        tooltip: {
          token: '%',
          tokenColorToken: 'secondary700',
        },
      },
    ],
    yMarker: {
      colorToken: 'primary400',
      text: 'Fixed Rate:',
      typographyToken: 'bodyXSmallMedium',
      value: 100.82,
    },
  },
  render: Template,
};

export const WithCrossHairColor: StoryObj<typeof LineChart> = {
  args: {
    axisTypographyToken: 'bodyXSmallMedium',
    crosshairColorToken: 'warning500',
    data: [
      {
        colorToken: 'secondary500',
        data: mockedTimelineData[0],
        id: 'points1',
        tooltip: {
          token: '%',
          tokenColorToken: 'secondary700',
        },
      },
    ],
  },
  render: Template,
};

export const WithMultipleLines: StoryObj<typeof LineChart> = {
  args: {
    axisTypographyToken: 'bodyXSmallMedium',
    data: [
      {
        colorToken: 'secondary500',
        data: mockedTimelineData[0],
        id: 'points1',
        tooltip: {
          token: '%',
          tokenColorToken: 'secondary700',
        },
      },
      {
        colorToken: 'primary500',
        data: mockedTimelineData[1],
        id: 'points2',
        tooltip: {
          token: '%',
          tokenColorToken: 'primary700',
        },
      },
    ],
    yMarker: {
      colorToken: 'primary400',
      text: 'Fixed Rate:',
      typographyToken: 'bodyXSmallMedium',
      value: 100.82,
    },
  },
  render: Template,
};

export const WithDifferentAxisVisible: StoryObj<typeof LineChart> = {
  args: {
    axisTypographyToken: 'bodyXSmallMedium',
    data: [
      {
        colorToken: 'secondary500',
        data: mockedTimelineData[0],
        id: 'points1',
        tooltip: {
          token: '%',
          tokenColorToken: 'secondary700',
        },
      },
      {
        colorToken: 'primary500',
        data: mockedTimelineData[1],
        id: 'points2',
        tooltip: {
          token: '%',
          tokenColorToken: 'primary700',
        },
      },
    ],
    visibleAxis: ['top', 'right', 'left', 'bottom'],
    yMarker: {
      colorToken: 'primary400',
      text: 'Fixed Rate:',
      typographyToken: 'bodyXSmallMedium',
      value: 100.82,
    },
  },
  render: Template,
};

export const WithNoYAxisOffset: StoryObj<typeof LineChart> = {
  args: {
    axisTypographyToken: 'bodyXSmallMedium',
    data: [
      {
        colorToken: 'secondary500',
        data: mockedTimelineData[0],
        id: 'points1',
        tooltip: {
          token: '%',
          tokenColorToken: 'secondary700',
        },
      },
      {
        colorToken: 'primary500',
        data: mockedTimelineData[1],
        id: 'points2',
        tooltip: {
          token: '%',
          tokenColorToken: 'primary700',
        },
      },
    ],
    visibleAxis: ['top', 'right', 'left', 'bottom'],
    yAxisTopOffsetPercentage: 0,
    yMarker: {
      colorToken: 'primary400',
      text: 'Fixed Rate:',
      typographyToken: 'bodyXSmallMedium',
      value: 100.82,
    },
  },
  render: Template,
};

export const WithTransparentAxis: StoryObj<typeof LineChart> = {
  args: {
    axisDomainLineColorToken: 'transparent',
    axisTicksTextColorToken: 'warning500',
    axisTypographyToken: 'bodyXSmallMedium',
    data: [
      {
        colorToken: 'secondary500',
        data: mockedTimelineData[0],
        id: 'points1',
        tooltip: {
          token: '%',
          tokenColorToken: 'secondary700',
        },
      },
      {
        colorToken: 'primary500',
        data: mockedTimelineData[1],
        id: 'points2',
        tooltip: {
          token: '%',
          tokenColorToken: 'primary700',
        },
      },
    ],
    visibleAxis: ['bottom', 'right'],
    yMarker: {
      colorToken: 'primary400',
      text: 'Fixed Rate:',
      typographyToken: 'bodyXSmallMedium',
      value: 100.82,
    },
  },
  render: Template,
};

export const WithScatter: StoryObj<typeof LineChart> = {
  args: {
    axisTypographyToken: 'bodyXSmallMedium',
    data: [
      {
        colorToken: 'error500',
        data: mockedScatterData[0],
        id: 'points1',
        tooltip: (props) => (
          <CustomChartTooltip {...props} quoteToken="eth" underlyingAsset="rusd" />
        ),
      },
      {
        colorToken: 'primary500',
        data: mockedScatterData[1],
        id: 'points2',
        tooltip: (props) => (
          <CustomChartTooltip {...props} quoteToken="btc" underlyingAsset="usdc" />
        ),
      },
    ],
    xScaleType: 'linear',
  },
  render: Template,
};
