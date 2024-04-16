import { Meta, StoryObj } from '@storybook/react';

import { LabelTokenTypography } from '.';

export default {
  args: {},
  component: LabelTokenTypography,
  title: 'Components/LabelTokenTypography',
} as Meta<typeof LabelTokenTypography>;

export const Default: StoryObj<typeof LabelTokenTypography> = {
  args: {
    colorToken: 'white100',
    label: 'Additional Cashflow',
    labelColorToken: 'white400',
    labelTypographyToken: 'bodyXSmallRegular',
    prefixColorToken: 'white950',
    prefixToken: '+',
    token: ' USDC',
    tokenColorToken: 'white950',
    typographyToken: 'bodyMediumMedium',
    value: '0.00',
  },
};

export const WithRangeValues: StoryObj<typeof LabelTokenTypography> = {
  args: {
    colorToken: 'white100',
    label: 'Additional Cashflow',
    labelColorToken: 'white400',
    labelTypographyToken: 'bodyXSmallRegular',
    prefixColorToken: 'white950',
    prefixToken: '+',
    token: ' USDC',
    tokenColorToken: 'white950',
    typographyToken: 'bodyMediumMedium',
    value: '0.00',
    value2: '4.00',
  },
};

export const WithTooltip: StoryObj<typeof LabelTokenTypography> = {
  args: {
    colorToken: 'white100',
    label: 'Additional Cashflow',
    labelColorToken: 'white400',
    labelTypographyToken: 'bodyXSmallRegular',
    token: ' USDC',
    tokenColorToken: 'white950',
    tooltip: 'We support a nice tooltip as well!',
    typographyToken: 'bodyMediumMedium',
    value: '+0.00',
  },
};

export const WithAttentionIndicator: StoryObj<typeof LabelTokenTypography> = {
  args: {
    attentionIndicatorColorToken: 'error100',
    colorToken: 'white100',
    label: 'Additional Cashflow',
    labelColorToken: 'white400',
    labelTypographyToken: 'bodyXSmallRegular',
    token: ' USDC',
    tokenColorToken: 'white950',
    tooltip: 'We support a nice tooltip as well!',
    typographyToken: 'bodyMediumMedium',
    value: '+0.00',
  },
};
