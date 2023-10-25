import { Meta, StoryObj } from '@storybook/react';

import { MarketIcon } from '.';

export default {
  args: {},
  component: MarketIcon,
  title: 'Components/Icons/MarketIcon',
} as Meta<typeof MarketIcon>;

export const Default: StoryObj<typeof MarketIcon> = {
  args: {
    market: 'aave',
  },
};

export const WithSize: StoryObj<typeof MarketIcon> = {
  args: {
    market: 'aave',
    size: 50,
  },
};
