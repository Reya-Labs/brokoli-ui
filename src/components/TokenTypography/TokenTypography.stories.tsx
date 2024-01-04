import { Meta, StoryObj } from '@storybook/react';

import { TokenTypography } from '.';

export default {
  args: {},
  component: TokenTypography,
  title: 'Components/TokenTypography',
} as Meta<typeof TokenTypography>;

export const Default: StoryObj<typeof TokenTypography> = {
  args: {
    colorToken: 'white100',
    token: '%',
    tokenColorToken: 'white950',
    typographyToken: 'bodyMediumRegular',
    value: 100,
  },
};

export const WithPrefixToken: StoryObj<typeof TokenTypography> = {
  args: {
    colorToken: 'white100',
    prefixColorToken: 'white950',
    prefixToken: '$',
    token: 'K',
    tokenColorToken: 'white950',
    typographyToken: 'bodyMediumRegular',
    value: 100,
  },
};

export const WithRangeValues: StoryObj<typeof TokenTypography> = {
  args: {
    colorToken: 'white100',
    token: '%',
    tokenColorToken: 'white950',
    typographyToken: 'bodyMediumRegular',
    value: 52,
    value2: 97,
  },
};

export const WithRangeValuesPrefixToken: StoryObj<typeof TokenTypography> = {
  args: {
    colorToken: 'white100',
    prefixColorToken: 'white950',
    prefixToken: '$',
    token: 'M',
    tokenColorToken: 'white950',
    typographyToken: 'bodyMediumRegular',
    value: 52,
    value2: 97,
  },
};

export const WithNegativeDifference: StoryObj<typeof TokenTypography> = {
  args: {
    colorToken: 'white100',
    differenceColorToken: 'error500',
    differenceValue: -2,
    token: '%',
    tokenColorToken: 'white950',
    typographyToken: 'bodyMediumRegular',
    value: 100,
  },
};

export const WithPositiveDifference: StoryObj<typeof TokenTypography> = {
  args: {
    colorToken: 'white100',
    differenceColorToken: 'primary500',
    differenceValue: 2,
    token: '%',
    tokenColorToken: 'white950',
    typographyToken: 'bodyMediumRegular',
    value: 100,
  },
};

export const WithAttentionIndicator: StoryObj<typeof TokenTypography> = {
  args: {
    attentionIndicatorColorToken: 'error500',
    colorToken: 'white100',
    differenceColorToken: 'primary500',
    differenceValue: 2,
    token: '%',
    tokenColorToken: 'white950',
    typographyToken: 'bodyMediumRegular',
    value: 100,
  },
};
