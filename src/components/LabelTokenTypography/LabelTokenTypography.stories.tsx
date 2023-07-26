import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { LabelTokenTypography } from './index';

export default {
  args: {},
  component: LabelTokenTypography,
  title: 'Components/LabelTokenTypography',
} as ComponentMeta<typeof LabelTokenTypography>;

const Template: ComponentStory<typeof LabelTokenTypography> = (args) => (
  <LabelTokenTypography {...args} />
);

export const Default = Template.bind({});
Default.args = {
  colorToken: 'lavenderWeb',
  label: 'Additional Cashflow',
  labelColorToken: 'lavenderWeb3',
  labelTypographyToken: 'primaryBodyXSmallRegular',
  prefixToken: '+',
  token: ' USDC',
  typographyToken: 'secondaryBodyMediumRegular',
  value: '0.00',
};

export const WithRangeValues = Template.bind({});
WithRangeValues.args = {
  colorToken: 'lavenderWeb',
  label: 'Additional Cashflow',
  labelColorToken: 'lavenderWeb3',
  labelTypographyToken: 'primaryBodyXSmallRegular',
  prefixToken: '+',
  token: ' USDC',
  typographyToken: 'secondaryBodyMediumRegular',
  value: '0.00',
  value2: '4.00',
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  colorToken: 'lavenderWeb',
  label: 'Additional Cashflow',
  labelColorToken: 'lavenderWeb3',
  labelTypographyToken: 'primaryBodyXSmallRegular',
  token: ' USDC',
  tooltip: 'We support a nice tooltip as well!',
  typographyToken: 'secondaryBodyMediumRegular',
  value: '+0.00',
};

export const WithAttentionIndicator = Template.bind({});
WithAttentionIndicator.args = {
  attentionIndicatorColorToken: 'wildStrawberry',
  colorToken: 'lavenderWeb',
  label: 'Additional Cashflow',
  labelColorToken: 'lavenderWeb3',
  labelTypographyToken: 'primaryBodyXSmallRegular',
  token: ' USDC',
  tooltip: 'We support a nice tooltip as well!',
  typographyToken: 'secondaryBodyMediumRegular',
  value: '+0.00',
};
