import { Meta, StoryObj } from '@storybook/react';

import { Ellipsis } from '.';

export default {
  args: {},
  component: Ellipsis,
  title: 'Components/Ellipsis',
} as Meta<typeof Ellipsis>;

export const Default: StoryObj<typeof Ellipsis> = {
  args: {
    colorToken: 'white100',
  },
};
