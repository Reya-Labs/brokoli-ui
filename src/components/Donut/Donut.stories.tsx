import { Meta, StoryObj } from '@storybook/react';

import { Donut } from '.';

export default {
  args: {},
  component: Donut,
  title: 'Components/Donut',
} as Meta<typeof Donut>;

export const Default: StoryObj<typeof Donut> = {
  args: {
    colorToken: 'warning100',
    percentage: 65,
  },
};

export const WithHoleColorToken: StoryObj<typeof Donut> = {
  args: {
    colorToken: 'warning100',
    holeColorToken: 'white100',
    percentage: 23,
  },
};
