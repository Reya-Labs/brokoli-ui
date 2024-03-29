import { Meta, StoryObj } from '@storybook/react';

import { AttentionIndicator } from '.';

export default {
  argTypes: {},
  component: AttentionIndicator,
  title: 'Components/AttentionIndicator',
} as Meta<typeof AttentionIndicator>;

export const Default: StoryObj<typeof AttentionIndicator> = {
  args: {
    colorToken: 'error100',
  },
};
