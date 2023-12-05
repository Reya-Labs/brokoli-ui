import { Meta, StoryObj } from '@storybook/react';

import { FromToTokenTypography } from '.';

export default {
  args: {},
  component: FromToTokenTypography,
  title: 'Components/FromToTokenTypography',
} as Meta<typeof FromToTokenTypography>;

export const Default: StoryObj<typeof FromToTokenTypography> = {
  args: {
    fromColorToken: 'primary',
    fromValue: 'From',
    toColorToken: 'secondary',
    toValue: 'To',
    typographyToken: 'bodySmallRegular',
  },
};

export const WithLabel: StoryObj<typeof FromToTokenTypography> = {
  args: {
    fromColorToken: 'primary',
    fromValue: 'From',
    label: 'Label goes here',
    labelColorToken: 'white100',
    labelTypographyToken: 'bodyMediumBold',
    toColorToken: 'secondary',
    toValue: 'To',
    typographyToken: 'bodySmallRegular',
  },
};

export const WithTokens: StoryObj<typeof FromToTokenTypography> = {
  args: {
    fromColorToken: 'white',
    fromPrefixToken: '$',
    fromToken: '%',
    fromValue: 29,
    label: 'Label goes here',
    labelColorToken: 'white100',
    labelTypographyToken: 'bodyXSmallRegular',
    toColorToken: 'white',
    toPrefixToken: '$',
    toToken: '%',
    toValue: 64,
    token: 'percentage',
    typographyToken: 'bodySmallRegular',
  },
};

export const WithTooltip: StoryObj<typeof FromToTokenTypography> = {
  args: {
    fromColorToken: 'white',
    fromToken: '%',
    fromValue: 29,
    label: 'Label goes here',
    labelColorToken: 'white100',
    labelTypographyToken: 'bodyXSmallRegular',
    toColorToken: 'white',
    toToken: '%',
    toValue: 64,
    token: 'percentage',
    tooltip: 'Created with ❤️!',
    typographyToken: 'bodySmallRegular',
  },
};
