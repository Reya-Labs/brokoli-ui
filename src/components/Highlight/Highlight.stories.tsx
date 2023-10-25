import { Meta, StoryObj } from '@storybook/react';

import { Highlight } from './index';

export default {
  args: {},
  component: Highlight,
  title: 'Components/Highlight',
} as Meta<typeof Highlight>;

export const Default: StoryObj<typeof Highlight> = {
  args: {
    children: 'What a good day for hello! Indeed sir!',
    highlight: 'Hello',
  },
};
