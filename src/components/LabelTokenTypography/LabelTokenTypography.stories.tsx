import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { LabelTokenTypography } from './index';

export default {
  title: 'Components/LabelTokenTypography',
  component: LabelTokenTypography,
  args: {},
} as ComponentMeta<typeof LabelTokenTypography>;

const Template: ComponentStory<typeof LabelTokenTypography> = (args) => (
  <LabelTokenTypography {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: '+0.00',
  colorToken: 'lavenderWeb',
  token: ' USDC',
  typographyToken: 'secondaryBodyMediumRegular',
  label: 'Additional Cashflow',
  labelColorToken: 'lavenderWeb3',
  labelTypographyToken: 'primaryBodyXSmallRegular',
};

export const WithRangeValues = Template.bind({});
WithRangeValues.args = {
  value: '+0.00',
  value2: '+4.00',
  colorToken: 'lavenderWeb',
  token: ' USDC',
  typographyToken: 'secondaryBodyMediumRegular',
  label: 'Additional Cashflow',
  labelColorToken: 'lavenderWeb3',
  labelTypographyToken: 'primaryBodyXSmallRegular',
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  value: '+0.00',
  colorToken: 'lavenderWeb',
  token: ' USDC',
  typographyToken: 'secondaryBodyMediumRegular',
  label: 'Additional Cashflow',
  labelColorToken: 'lavenderWeb3',
  labelTypographyToken: 'primaryBodyXSmallRegular',
  tooltip: 'We support a nice tooltip as well!',
};
