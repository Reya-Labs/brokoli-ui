import { Meta, StoryObj } from '@storybook/react';

import { Pill } from '.';

export default {
  args: {},
  component: Pill,
  title: 'Components/Pill',
} as Meta<typeof Pill>;

export const Default: StoryObj<typeof Pill> = {
  args: {
    backgroundColorToken: 'error700',
    children: 'Headache pill',
    colorToken: 'error500',
    typographyToken: 'bodySmallRegular',
    variant: 'regular',
  },
};

export const CompactVariant: StoryObj<typeof Pill> = {
  args: {
    backgroundColorToken: 'primary700',
    children: 'Headache pill',
    colorToken: 'primary500',
    typographyToken: 'bodyXSmallBold',
    variant: 'compact',
  },
};
