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
    colorToken: 'wildStrawberry',
    typographyToken: 'primaryBodySmallRegular',
    variant: 'regular',
  },
};

export const CompactVariant: StoryObj<typeof Pill> = {
  args: {
    children: 'Headache pill',
    colorToken: 'skyBlueCrayola',
    typographyToken: 'primaryBodyXSmallBold',
    variant: 'compact',
  },
};
