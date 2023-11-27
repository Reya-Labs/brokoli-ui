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
    typographyToken: 'primaryHeader1Black',
  },
};

export const RainbowVariant: StoryObj<typeof Typography> = {
  args: {
    children: 'Rainbow Variant',
    colorToken: 'rainbow',
    typographyToken: 'primaryHeader1Black',
  },
};
