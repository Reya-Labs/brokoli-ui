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
  yMarker: 1.82,
  yMarkerText: 'Fixed Rate:',
  data: [
    {
      id: 'points1',
      data: [
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
      ],
    },
  ],
};
