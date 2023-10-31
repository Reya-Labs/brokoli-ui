import { Meta, StoryObj } from '@storybook/react';

import { FromToTokenTypography } from './index';

export default {
  args: {},
  component: FromToTokenTypography,
  title: 'Components/FromToTokenTypography',
} as Meta<typeof FromToTokenTypography>;

export const Default: StoryObj<typeof FromToTokenTypography> = {
  args: {
    fromColorToken: 'primary100',
    fromValue: 'From',
    toColorToken: 'secondary100',
    toValue: 'To',
    typographyToken: 'secondaryBodySmallRegular',
  },
};

export const WithLabel: StoryObj<typeof FromToTokenTypography> = {
  args: {
    fromColorToken: 'primary100',
    fromValue: 'From',
    label: 'Label goes here',
    labelColorToken: 'white100',
    labelTypographyToken: 'primaryBodyMediumBold',
    toColorToken: 'secondary100',
    toValue: 'To',
    typographyToken: 'secondaryBodySmallRegular',
  },
};

export const WithTokens: StoryObj<typeof FromToTokenTypography> = {
  args: {
    fromColorToken: 'white100',
    fromPrefixToken: '$',
    fromToken: '%',
    fromValue: 29,
    label: 'Label goes here',
    labelColorToken: 'white100',
    labelTypographyToken: 'primaryBodyXSmallRegular',
    toColorToken: 'white100',
    toPrefixToken: '$',
    toToken: '%',
    toValue: 64,
    token: 'percentage',
    typographyToken: 'secondaryBodySmallRegular',
  },
};

export const WithTooltip: StoryObj<typeof FromToTokenTypography> = {
  args: {
    fromColorToken: 'white100',
    fromToken: '%',
    fromValue: 29,
    label: 'Label goes here',
    labelColorToken: 'white100',
    labelTypographyToken: 'primaryBodyXSmallRegular',
    toColorToken: 'white100',
    toToken: '%',
    toValue: 64,
    token: 'percentage',
    tooltip: 'Created with ❤️!',
    typographyToken: 'secondaryBodySmallRegular',
  },
};
