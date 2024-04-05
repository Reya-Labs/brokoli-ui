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
    typographyToken: 'h1XLBold',
  },
};

export const RainbowVariant: StoryObj<typeof Typography> = {
  args: {
    children: 'Rainbow Variant',
    colorToken: 'rainbow',
    typographyToken: 'h1XLBold',
  },
};

export const WithBackgroundColor: StoryObj<typeof Typography> = {
  args: {
    backgroundColorToken: 'primary500',
    children: 'With Background Color',
    colorToken: 'white100',
    typographyToken: 'h1XLBold',
  },
};

export const WithAsSpan: StoryObj<typeof Typography> = {
  args: {
    as: 'span',
    children: 'I should be <p />, but I am a <span />',
    colorToken: 'white100',
    typographyToken: 'bodyMediumRegular',
  },
};
