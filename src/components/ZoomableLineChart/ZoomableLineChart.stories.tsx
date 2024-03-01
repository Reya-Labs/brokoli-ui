import styled from '@emotion/styled';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';

import { ZoomableLineChart } from '.';

export default {
  argTypes: {},
  component: ZoomableLineChart,
  title: 'Components/ZoomableLineChart',
} as Meta<typeof ZoomableLineChart>;

type DataPoint = {
  x: Date;
  y: number;
};

function generateDataForDays(numberOfDays: number): DataPoint[] {
  const startTimestamp = 1677159959000; // Starting timestamp
  const startY = 100.85; // Starting y value
  const data: DataPoint[] = [];
  const millisecondsPerHour = 3600000; // Number of milliseconds in one hour

  for (let day = 0; day < numberOfDays; day++) {
    for (let hour = 0; hour < 24; hour++) {
      const time = startTimestamp + day * 24 * millisecondsPerHour + hour * millisecondsPerHour;
      const yVariance = Math.random() * 0.1 - 0.05; // Adjusts the y value up or down by a small amount
      const newY = startY + yVariance; // New y value for this point

      data.push({
        x: new Date(time),
        y: parseFloat(newY.toFixed(3)),
      });
    }
  }

  return data;
}

const points1 = generateDataForDays(10);

const points2 = points1.map((p) => ({
  ...p,
  y: p.y + Math.random() / 10 + 0.2,
}));

const Box = styled('div')`
  height: 445px;
`;
const Template: StoryFn<typeof ZoomableLineChart> = (args) => (
  <Box>
    <ZoomableLineChart {...args} />
  </Box>
);

export const Default: StoryObj<typeof ZoomableLineChart> = {
  args: {
    axisTypographyToken: 'bodyXSmallRegular',

    data: [
      {
        colorToken: 'secondary500',
        data: points1,
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

export const WithYMarker: StoryObj<typeof ZoomableLineChart> = {
  args: {
    axisTypographyToken: 'bodyXSmallRegular',
    data: [
      {
        colorToken: 'secondary500',
        data: points1,
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
      typographyToken: 'bodyXSmallRegular',
      value: 100.82,
    },
  },
  render: Template,
};

export const WithCrossHairColor: StoryObj<typeof ZoomableLineChart> = {
  args: {
    axisTypographyToken: 'bodyXSmallRegular',
    crosshairColorToken: 'warning500',
    data: [
      {
        colorToken: 'secondary500',
        data: points1,
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

export const WithMultipleLines: StoryObj<typeof ZoomableLineChart> = {
  args: {
    axisTypographyToken: 'bodyXSmallRegular',
    data: [
      {
        colorToken: 'secondary500',
        data: points1,
        id: 'points1',
        tooltip: {
          token: '%',
          tokenColorToken: 'secondary700',
        },
      },
      {
        colorToken: 'primary500',
        data: points2,
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
      typographyToken: 'bodyXSmallRegular',
      value: 100.82,
    },
  },
  render: Template,
};

export const WithDifferentAxisVisible: StoryObj<typeof ZoomableLineChart> = {
  args: {
    axisTypographyToken: 'bodyXSmallRegular',
    data: [
      {
        colorToken: 'secondary500',
        data: points1,
        id: 'points1',
        tooltip: {
          token: '%',
          tokenColorToken: 'secondary700',
        },
      },
      {
        colorToken: 'primary500',
        data: points2,
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
      typographyToken: 'bodyXSmallRegular',
      value: 100.82,
    },
  },
  render: Template,
};

export const WithTransparentAxis: StoryObj<typeof ZoomableLineChart> = {
  args: {
    axisDomainLineColorToken: 'transparent',
    axisTicksTextColorToken: 'warning500',
    axisTypographyToken: 'bodyXSmallRegular',
    data: [
      {
        colorToken: 'secondary500',
        data: points1,
        id: 'points1',
        tooltip: {
          token: '%',
          tokenColorToken: 'secondary700',
        },
      },
      {
        colorToken: 'primary500',
        data: points2,
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
      typographyToken: 'bodyXSmallRegular',
      value: 100.82,
    },
  },
  render: Template,
};
