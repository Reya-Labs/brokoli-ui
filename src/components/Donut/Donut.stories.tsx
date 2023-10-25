import { Meta, StoryObj } from '@storybook/react';

import { Donut } from './index';

export default {
  args: {},
  component: Donut,
  title: 'Components/Donut',
} as Meta<typeof Donut>;

export const Default: StoryObj<typeof Donut> = {
  args: {
    colorToken: 'orangeYellow',
    percentage: 65,
  },
};

export const WithHoleColorToken: StoryObj<typeof Donut> = {
  args: {
    colorToken: 'orangeYellow',
    holeColorToken: 'lavenderWeb',
    percentage: 23,
  },
};
