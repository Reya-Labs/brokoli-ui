import { Meta, StoryObj } from '@storybook/react';

import { TokenIcon } from '.';

export default {
  args: {},
  component: TokenIcon,
  title: 'Components/Icons/TokenIcon',
} as Meta<typeof TokenIcon>;

export const Default: StoryObj<typeof TokenIcon> = {
  args: {
    token: 'eth',
  },
};

export const WithSize: StoryObj<typeof TokenIcon> = {
  args: {
    size: 50,
    token: 'eth',
  },
};
