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
    typographyToken: 'bodyMediumRegular',
  },
};
