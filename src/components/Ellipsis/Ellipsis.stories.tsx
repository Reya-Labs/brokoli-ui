import { Meta, StoryObj } from '@storybook/react';

import { Ellipsis } from './index';

export default {
  args: {},
  component: Ellipsis,
  title: 'Components/Ellipsis',
} as Meta<typeof Ellipsis>;

export const Default: StoryObj<typeof Ellipsis> = {
  args: {
    colorToken: 'lavenderWeb',
  },
};
