import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '.';

export default {
  component: Typography,
  title: 'Components/Typography',
} as Meta<typeof Typography>;

export const Default: StoryObj<typeof Typography> = {
  args: {
    children: 'Default',
    colorToken: 'white100',
    typographyToken: 'h1xlbold',
  },
};

export const RainbowVariant: StoryObj<typeof Typography> = {
  args: {
    children: 'Rainbow Variant',
    colorToken: 'rainbow',
    typographyToken: 'h1xlbold',
  },
};
