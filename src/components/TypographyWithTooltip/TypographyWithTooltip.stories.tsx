import { Meta, StoryObj } from '@storybook/react';

import { TypographyWithTooltip } from '.';

export default {
  args: {},
  component: TypographyWithTooltip,
  title: 'Components/TypographyWithTooltip',
} as Meta<typeof TypographyWithTooltip>;

export const Default: StoryObj<typeof TypographyWithTooltip> = {
  args: {
    children: 'What a wonderful UI library!',
    colorToken: 'white100',
    tooltip: 'Created with ❤️!',
    typographyToken: 'bodyMediumMedium',
  },
};

export const WithCustomColors: StoryObj<typeof TypographyWithTooltip> = {
  args: {
    children: 'What a wonderful UI library!',
    colorToken: 'white100',
    tooltip: 'Created with ❤️!',
    tooltipColorToken: 'primary500',
    tooltipIconColorToken: 'error500',
    tooltipTypographyToken: 'bodyLargeRegular',
    typographyToken: 'bodyMediumMedium',
  },
};

export const WithTextAsTrigger: StoryObj<typeof TypographyWithTooltip> = {
  args: {
    children: 'What a wonderful UI library!',
    colorToken: 'white100',
    textDecorationColorToken: 'white950',
    tooltip: 'Created with ❤️!',
    trigger: 'text',
    typographyToken: 'bodyMediumMedium',
  },
};
