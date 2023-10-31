import { Meta, StoryObj } from '@storybook/react';

import { LabelTokenTypography } from './index';

export default {
  args: {},
  component: LabelTokenTypography,
  title: 'Components/LabelTokenTypography',
} as Meta<typeof LabelTokenTypography>;

export const Default: StoryObj<typeof LabelTokenTypography> = {
  args: {
    colorToken: 'lavenderWeb',
    label: 'Additional Cashflow',
    labelColorToken: 'white400',
    labelTypographyToken: 'primaryBodyXSmallRegular',
    prefixToken: '+',
    token: ' USDC',
    typographyToken: 'secondaryBodyMediumRegular',
    value: '0.00',
  },
};

export const WithRangeValues: StoryObj<typeof LabelTokenTypography> = {
  args: {
    colorToken: 'lavenderWeb',
    label: 'Additional Cashflow',
    labelColorToken: 'white400',
    labelTypographyToken: 'primaryBodyXSmallRegular',
    prefixToken: '+',
    token: ' USDC',
    typographyToken: 'secondaryBodyMediumRegular',
    value: '0.00',
    value2: '4.00',
  },
};

export const WithTooltip: StoryObj<typeof LabelTokenTypography> = {
  args: {
    colorToken: 'lavenderWeb',
    label: 'Additional Cashflow',
    labelColorToken: 'white400',
    labelTypographyToken: 'primaryBodyXSmallRegular',
    token: ' USDC',
    tooltip: 'We support a nice tooltip as well!',
    typographyToken: 'secondaryBodyMediumRegular',
    value: '+0.00',
  },
};

export const WithAttentionIndicator: StoryObj<typeof LabelTokenTypography> = {
  args: {
    attentionIndicatorColorToken: 'wildStrawberry',
    colorToken: 'lavenderWeb',
    label: 'Additional Cashflow',
    labelColorToken: 'white400',
    labelTypographyToken: 'primaryBodyXSmallRegular',
    token: ' USDC',
    tooltip: 'We support a nice tooltip as well!',
    typographyToken: 'secondaryBodyMediumRegular',
    value: '+0.00',
  },
};
