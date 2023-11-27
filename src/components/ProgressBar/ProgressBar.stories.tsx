import { Meta, StoryObj } from '@storybook/react';

import { ProgressBar } from '.';

export default {
  component: ProgressBar,
  title: 'Components/ProgressBar',
} as Meta<typeof ProgressBar>;

export const Default: StoryObj<typeof ProgressBar> = {
  args: {
    percentageComplete: 88,
  },
};
