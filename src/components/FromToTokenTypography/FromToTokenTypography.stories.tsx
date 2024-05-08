import { Meta, StoryObj } from '@storybook/react';

import { FromToTokenTypography } from '.';

export default {
  args: {},
  component: FromToTokenTypography,
  title: 'Components/FromToTokenTypography',
} as Meta<typeof FromToTokenTypography>;

export const Default: StoryObj<typeof FromToTokenTypography> = {
  args: {
    fromColorToken: 'primary500',
    fromValue: 'From',
    toColorToken: 'secondary500',
    toValue: 'To',
    typographyToken: 'bodySmallMedium',
  },
};

export const WithLabel: StoryObj<typeof FromToTokenTypography> = {
  args: {
    fromColorToken: 'primary500',
    fromValue: 'From',
    label: 'Label goes here',
    labelColorToken: 'white100',
    labelTypographyToken: 'bodyMediumBold',
    toColorToken: 'secondary500',
    toValue: 'To',
    typographyToken: 'bodySmallMedium',
  },
};

export const WithTokens: StoryObj<typeof FromToTokenTypography> = {
  args: {
    fromColorToken: 'white100',
    fromPrefixColorToken: 'error500',
    fromPrefixToken: '$',
    fromToken: '%',
    fromValue: 29,
    label: 'Label goes here',
    labelColorToken: 'white100',
    labelTypographyToken: 'bodyXSmallMedium',
    toColorToken: 'white100',
    toPrefixColorToken: 'primary500',
    toPrefixToken: '$',
    toToken: '%',
    toValue: 64,
    token: 'percentage',
    tokenColorToken: 'white950',
    typographyToken: 'bodySmallMedium',
  },
};

export const WithTooltip: StoryObj<typeof FromToTokenTypography> = {
  args: {
    fromColorToken: 'white100',
    fromToken: '%',
    fromValue: 29,
    label: 'Label goes here',
    labelColorToken: 'white100',
    labelTypographyToken: 'bodyXSmallMedium',
    toColorToken: 'white100',
    toToken: '%',
    toValue: 64,
    token: 'percentage',
    tokenColorToken: 'white950',
    tooltip: 'Created with ❤️!',
    typographyToken: 'bodySmallMedium',
  },
};
