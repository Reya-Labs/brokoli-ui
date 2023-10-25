import { Meta, StoryObj } from '@storybook/react';

import { HorizontalLine } from './index';

export default {
  args: {},
  component: HorizontalLine,
  title: 'Components/HorizontalLine',
} as Meta<typeof HorizontalLine>;

export const Default: StoryObj<typeof HorizontalLine> = {
  args: {},
};
