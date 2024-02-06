import styled from '@emotion/styled';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';

import { LineChart } from '.';

export default {
  argTypes: {},
  component: LineChart,
  title: 'Components/LineChart',
} as Meta<typeof LineChart>;

const points1 = [
  {
    x: new Date(1676036699000),
    y: 1.78,
  },
  {
    x: new Date(1676123099000),
    y: 1.79,
  },
  {
    x: new Date(1676209511000),
    y: 1.81,
  },
  {
    x: new Date(1676295911000),
    y: 1.81,
  },
  {
    x: new Date(1676382311000),
    y: 1.82,
  },
  {
    x: new Date(1676468711000),
    y: 1.82,
  },
  {
    x: new Date(1676555123000),
    y: 1.81,
  },
  {
    x: new Date(1676641523000),
    y: 1.89,
  },
  {
    x: new Date(1676727935000),
    y: 1.9,
  },
  {
    x: new Date(1676814335000),
    y: 1.88,
  },
  {
    x: new Date(1676900735000),
    y: 1.85,
  },
  {
    x: new Date(1676987135000),
    y: 1.85,
  },
  {
    x: new Date(1677073535000),
    y: 1.82,
  },
  {
    x: new Date(1677159959000),
    y: 1.85,
  },
];
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
    axisTypographyToken: 'bodyXSmallRegular',
    colorToken: 'secondary100',
    data: [
      {
        data: points1,
        id: 'points1',
      },
    ],
    tooltip: {
      token: '%',
      tokenColorToken: 'secondary500',
    },
  },
  render: Template,
};

export const WithYMarker: StoryObj<typeof LineChart> = {
  args: {
    axisTypographyToken: 'bodyXSmallRegular',
    colorToken: 'secondary100',
    data: [
      {
        data: points1,
        id: 'points1',
      },
    ],
    tooltip: {
      token: '%',
      tokenColorToken: 'secondary500',
    },
    yMarker: {
      colorToken: 'primary400',
      text: 'Fixed Rate:',
      typographyToken: 'bodyXSmallRegular',
      value: 1.82,
    },
  },
  render: Template,
};
