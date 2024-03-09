import { Meta, StoryObj } from '@storybook/react';

import { ChainIcon } from '.';

export default {
  args: {},
  component: ChainIcon,
  title: 'Components/Icons/ChainIcon',
} as Meta<typeof ChainIcon>;

export const Default: StoryObj<typeof ChainIcon> = {
  args: {
    chainId: 89346161,
  },
};

export const WithSize: StoryObj<typeof ChainIcon> = {
  args: {
    chainId: 89346161,
    size: 50,
  },
};
