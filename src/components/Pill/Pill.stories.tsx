import { Meta, StoryObj } from '@storybook/react';

import { Pill } from './index';

export default {
  args: {},
  component: Pill,
  title: 'Components/Pill',
} as Meta<typeof Pill>;

export const Default: StoryObj<typeof Pill> = {
  args: {
    children: 'Headache pill',
    colorToken: 'error',
    typographyToken: 'primaryBodySmallRegular',
    variant: 'regular',
  },
};

export const CompactVariant: StoryObj<typeof Pill> = {
  args: {
    children: 'Headache pill',
    colorToken: 'primary',
    typographyToken: 'primaryBodyXSmallBold',
    variant: 'compact',
  },
};
