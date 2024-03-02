import styled from '@emotion/styled';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';

import { TimeSeriesChart } from '.';

export default {
  args: {},
  component: TimeSeriesChart,
  title: 'Components/TimeSeriesChart',
} as Meta<typeof TimeSeriesChart>;

export enum FundingDirection {
  ToShort = 'ToShort',
  ToLong = 'ToLong',
  None = 'None',
}

export type FundingChartDatum = {
  x: number;
  y: number;
  direction: FundingDirection;
};

function generateFundingDataPerHour(): FundingChartDatum[] {
  const data: FundingChartDatum[] = [];
  const oneHour = 60 * 60 * 1000; // milliseconds in one hour
  const startDate = new Date();
  startDate.setHours(0, 0, 0, 0); // normalize to start of today

  for (let day = 0; day < 7; day++) {
    // 7 days for a week
    for (let hour = 0; hour < 24; hour++) {
      // 24 hours for each day
      const date = new Date(startDate.getTime() + day * 24 * oneHour + hour * oneHour);
      const fundingRate = parseFloat((Math.random() * 0.1).toFixed(4)); // Example rate between 0 and 0.1
      const direction =
        Object.values(FundingDirection)[
          Math.floor(Math.random() * Object.values(FundingDirection).length)
        ];

      data.push({
        direction,
        x: date.getTime(),
        y: fundingRate,
      });
    }
  }

  return data; // The array is already in chronological order
}

// Usage
const fundingDataPerHour1 = generateFundingDataPerHour();
const fundingDataPerHour2 = generateFundingDataPerHour();
const FUNDING_RATE_TIME_RESOLUTION = 60 * 60 * 1000; // 1 hour
const Box = styled('div')`
  height: 445px;
`;

const Template: StoryFn<typeof TimeSeriesChart> = (args) => {
  return (
    <Box>
      <TimeSeriesChart
        minZoomDomain={FUNDING_RATE_TIME_RESOLUTION * 4}
        numGridLines={1}
        series={[
          {
            colorToken: 'primary500',
            data: fundingDataPerHour1,
            id: 'funding-rate1',
          },
          {
            colorToken: 'secondary500',
            data: fundingDataPerHour2,
            id: 'funding-rate2',
          },
        ]}
      />
    </Box>
  );
};

export const Default: StoryObj<typeof TimeSeriesChart> = {
  args: {},
  render: Template,
};
