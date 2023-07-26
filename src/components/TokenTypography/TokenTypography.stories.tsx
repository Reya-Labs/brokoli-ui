import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { TokenTypography } from './index';

export default {
  args: {},
  component: TokenTypography,
  title: 'Components/TokenTypography',
} as ComponentMeta<typeof TokenTypography>;

const Template: ComponentStory<typeof TokenTypography> = (args) => <TokenTypography {...args} />;

export const Default = Template.bind({});
Default.args = {
  colorToken: 'lavenderWeb',
  token: '%',
  typographyToken: 'secondaryBodyMediumRegular',
  value: 100,
};

export const WithPrefixToken = Template.bind({});
WithPrefixToken.args = {
  colorToken: 'lavenderWeb',
  prefixToken: '$',
  token: 'K',
  typographyToken: 'secondaryBodyMediumRegular',
  value: 100,
};

export const WithRangeValues = Template.bind({});
WithRangeValues.args = {
  colorToken: 'lavenderWeb',
  token: '%',
  typographyToken: 'secondaryBodyMediumRegular',
  value: 52,
  value2: 97,
};

export const WithRangeValuesPrefixToken = Template.bind({});
WithRangeValuesPrefixToken.args = {
  colorToken: 'lavenderWeb',
  prefixToken: '$',
  token: 'M',
  typographyToken: 'secondaryBodyMediumRegular',
  value: 52,
  value2: 97,
};

export const WithNegativeDifference = Template.bind({});
WithNegativeDifference.args = {
  colorToken: 'lavenderWeb',
  differenceValue: -2,
  token: '%',
  typographyToken: 'secondaryBodyMediumRegular',
  value: 100,
};

export const WithPositiveDifference = Template.bind({});
WithPositiveDifference.args = {
  colorToken: 'lavenderWeb',
  differenceValue: 2,
  token: '%',
  typographyToken: 'secondaryBodyMediumRegular',
  value: 100,
};

export const WithAttentionIndicator = Template.bind({});
WithAttentionIndicator.args = {
  attentionIndicatorColorToken: 'wildStrawberry',
  colorToken: 'lavenderWeb',
  differenceValue: 2,
  token: '%',
  typographyToken: 'secondaryBodyMediumRegular',
  value: 100,
};
