import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { LineChart } from './index';

export default {
  title: 'Components/LineChart',
  component: LineChart,
  argTypes: {},
} as ComponentMeta<typeof LineChart>;

const Template: ComponentStory<typeof LineChart> = (args) => <LineChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  colorToken: 'ultramarineBlue',
  yMarkerColorToken: 'skyBlueCrayola3',
  yMarker: 2.35,
  yMarkerText: 'Fixed Rate:',
  data: [
    {
      id: 'japan',
      data: [
        {
          x: '2023-01-04',
          y: 2.32,
        },
        {
          x: '2023-01-05',
          y: 2.27,
        },
        {
          x: '2023-01-06',
          y: 2.38,
        },
        {
          x: '2023-01-07',
          y: 2.31,
        },
        {
          x: '2023-01-08',
          y: 2.25,
        },
        {
          x: '2023-01-09',
          y: 2.23,
        },
        {
          x: '2023-01-10',
          y: 2.34,
        },
        {
          x: '2023-01-11',
          y: 2.36,
        },
        {
          x: '2023-01-12',
          y: 2.31,
        },
        {
          x: '2023-01-13',
          y: 2.23,
        },
        {
          x: '2023-01-14',
          y: 2.21,
        },
      ],
    },
  ],
};
