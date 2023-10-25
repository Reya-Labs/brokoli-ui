import { Meta, StoryObj } from '@storybook/react';

import { TokenTypography } from './index';

export default {
  args: {},
  component: TokenTypography,
  title: 'Components/TokenTypography',
} as Meta<typeof TokenTypography>;

export const Default: StoryObj<typeof TokenTypography> = {
  args: {
    colorToken: 'lavenderWeb',
    token: '%',
    typographyToken: 'secondaryBodyMediumRegular',
    value: 100,
  },
};

export const WithPrefixToken: StoryObj<typeof TokenTypography> = {
  args: {
    colorToken: 'lavenderWeb',
    prefixToken: '$',
    token: 'K',
    typographyToken: 'secondaryBodyMediumRegular',
    value: 100,
  },
};

export const WithRangeValues: StoryObj<typeof TokenTypography> = {
  args: {
    colorToken: 'lavenderWeb',
    token: '%',
    typographyToken: 'secondaryBodyMediumRegular',
    value: 52,
    value2: 97,
  },
};

export const WithRangeValuesPrefixToken: StoryObj<typeof TokenTypography> = {
  args: {
    colorToken: 'lavenderWeb',
    prefixToken: '$',
    token: 'M',
    typographyToken: 'secondaryBodyMediumRegular',
    value: 52,
    value2: 97,
  },
};

export const WithNegativeDifference: StoryObj<typeof TokenTypography> = {
  args: {
    colorToken: 'lavenderWeb',
    differenceValue: -2,
    token: '%',
    typographyToken: 'secondaryBodyMediumRegular',
    value: 100,
  },
};

export const WithPositiveDifference: StoryObj<typeof TokenTypography> = {
  args: {
    colorToken: 'lavenderWeb',
    differenceValue: 2,
    token: '%',
    typographyToken: 'secondaryBodyMediumRegular',
    value: 100,
  },
};

export const WithAttentionIndicator: StoryObj<typeof TokenTypography> = {
  args: {
    attentionIndicatorColorToken: 'wildStrawberry',
    colorToken: 'lavenderWeb',
    differenceValue: 2,
    token: '%',
    typographyToken: 'secondaryBodyMediumRegular',
    value: 100,
  },
};
