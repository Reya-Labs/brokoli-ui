import { Meta, StoryObj } from '@storybook/react';

import { Pill } from '.';

export default {
  args: {},
  component: Pill,
  title: 'Components/Pill',
} as Meta<typeof Pill>;

export const Default: StoryObj<typeof Pill> = {
  args: {
    children: 'Headache pill',
    colorToken: 'error',
    typographyToken: 'bodySmallRegular',
    variant: 'regular',
  },
};

export const CompactVariant: StoryObj<typeof Pill> = {
  args: {
    children: 'Headache pill',
    colorToken: 'primary',
    typographyToken: 'bodyXSmallBold',
    variant: 'compact',
  },
};
