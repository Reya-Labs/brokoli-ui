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
    typographyToken: 'secondaryBodySmallRegular',
  },
};

export const WithLabel: StoryObj<typeof FromToTokenTypography> = {
  args: {
    fromColorToken: 'primary',
    fromValue: 'From',
    label: 'Label goes here',
    labelColorToken: 'white100',
    labelTypographyToken: 'primaryBodyMediumBold',
    toColorToken: 'secondary',
    toValue: 'To',
    typographyToken: 'secondaryBodySmallRegular',
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
    labelTypographyToken: 'primaryBodyXSmallRegular',
    toColorToken: 'white',
    toPrefixToken: '$',
    toToken: '%',
    toValue: 64,
    token: 'percentage',
    typographyToken: 'secondaryBodySmallRegular',
  },
};

export const WithTooltip: StoryObj<typeof FromToTokenTypography> = {
  args: {
    fromColorToken: 'white',
    fromToken: '%',
    fromValue: 29,
    label: 'Label goes here',
    labelColorToken: 'white100',
    labelTypographyToken: 'primaryBodyXSmallRegular',
    toColorToken: 'white',
    toToken: '%',
    toValue: 64,
    token: 'percentage',
    tooltip: 'Created with ❤️!',
    typographyToken: 'secondaryBodySmallRegular',
  },
};
