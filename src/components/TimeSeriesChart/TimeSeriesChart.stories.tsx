import styled from '@emotion/styled';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { curveMonotoneX, curveStepAfter } from '@visx/curve';
import React from 'react';

import { Pill } from '../Pill';
import { TimeSeriesChart } from '.';
import { Tooltip } from './Tooltip/Tooltip';

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
  time: number;
  fundingRate: number;
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
        fundingRate,
        time: date.getTime(),
      });
    }
  }

  return data; // The array is already in chronological order
}

// Usage
const fundingDataPerHour = generateFundingDataPerHour();
const FUNDING_RATE_TIME_RESOLUTION = 60 * 60 * 1000; // 1 hour
const Box = styled('div')`
  height: 445px;
`;
const Template: StoryFn<typeof TimeSeriesChart> = (args) => {
  const data = fundingDataPerHour;
  const latestDatum = data?.[data.length - 1];
  return (
    <Box>
      <TimeSeriesChart
        data={data}
        margin={{
          bottom: 32,
          left: 88,
          right: 0,
          top: 60,
        }}
        minZoomDomain={FUNDING_RATE_TIME_RESOLUTION * 4}
        numGridLines={1}
        padding={{
          bottom: 0.05,
          left: 0.025,
          right: 0.025,
          top: 0.05,
        }}
        renderTooltip={({ tooltipData }) => (
          <Tooltip
            colorToken={'black950'}
            point={{
              data: {
                xFormatted: tooltipData?.nearestDatum?.datum.time.toLocaleString(),
                yFormatted: tooltipData?.nearestDatum?.datum.fundingRate.toFixed(3),
              },
            }}
            tokenColorToken={'black950'}
            yToken={''}
          />
        )}
        renderXAxisLabel={({ tooltipData }) => {
          const tooltipDatum = tooltipData!.nearestDatum?.datum ?? latestDatum;

          return (
            <Pill colorToken="secondary" typographyToken="bodySmallRegular" variant="compact">
              {`${new Date(tooltipDatum.time).toLocaleString()}`}
            </Pill>
          );
        }}
        renderYAxisLabel={({ tooltipData }) => {
          const tooltipDatum = tooltipData!.nearestDatum?.datum ?? latestDatum;

          return (
            <Pill colorToken="primary" typographyToken="bodySmallRegular" variant="compact">
              {`${tooltipDatum.fundingRate.toLocaleString()}%`}
            </Pill>
          );
        }}
        series={[
          {
            colorAccessor: () => 'var(--brokoli-ui-primary500)',
            dataKey: 'funding-rate',
            getCurve: ({ zoom }) => (zoom > 12 ? curveMonotoneX : curveStepAfter),
            xAccessor: (datum) => datum?.time,
            yAccessor: (datum) => datum?.fundingRate,
          },
        ]}
        slotEmpty={<div id="funding-chart-loading">Loading...</div>}
        yAxisScaleType="symlog"
      >
        Hello
      </TimeSeriesChart>
    </Box>
  );
};

export const Default: StoryObj<typeof TimeSeriesChart> = {
  args: {},
  render: Template,
};
