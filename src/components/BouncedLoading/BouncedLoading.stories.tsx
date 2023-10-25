import { Meta, StoryObj } from '@storybook/react';

import { BouncedLoading } from './index';

export default {
  args: {},
  component: BouncedLoading,
  title: 'Components/BouncedLoading',
} as Meta<typeof BouncedLoading>;

export const Default: StoryObj<typeof BouncedLoading> = {
  args: {},
};
