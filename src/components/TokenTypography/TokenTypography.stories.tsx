import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { TokenTypography } from './index';

export default {
  title: 'Components/TokenTypography',
  component: TokenTypography,
  args: {},
} as ComponentMeta<typeof TokenTypography>;

const Template: ComponentStory<typeof TokenTypography> = (args) => <TokenTypography {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 100,
  colorToken: 'lavenderWeb',
  token: '%',
  typographyToken: 'secondaryBodyMediumRegular',
};

export const WithPrefixToken = Template.bind({});
WithPrefixToken.args = {
  value: 100,
  colorToken: 'lavenderWeb',
  token: 'K',
  prefixToken: '$',
  typographyToken: 'secondaryBodyMediumRegular',
};

export const WithRangeValues = Template.bind({});
WithRangeValues.args = {
  value: 52,
  value2: 97,
  colorToken: 'lavenderWeb',
  token: '%',
  typographyToken: 'secondaryBodyMediumRegular',
};

export const WithRangeValuesPrefixToken = Template.bind({});
WithRangeValuesPrefixToken.args = {
  value: 52,
  value2: 97,
  colorToken: 'lavenderWeb',
  prefixToken: '$',
  token: 'M',
  typographyToken: 'secondaryBodyMediumRegular',
};

export const WithNegativeDifference = Template.bind({});
WithNegativeDifference.args = {
  value: 100,
  colorToken: 'lavenderWeb',
  token: '%',
  differenceValue: -2,
  typographyToken: 'secondaryBodyMediumRegular',
};

export const WithPositiveDifference = Template.bind({});
WithPositiveDifference.args = {
  value: 100,
  colorToken: 'lavenderWeb',
  token: '%',
  differenceValue: 2,
  typographyToken: 'secondaryBodyMediumRegular',
};

export const WithAttentionIndicator = Template.bind({});
WithAttentionIndicator.args = {
  value: 100,
  colorToken: 'lavenderWeb',
  attentionIndicatorColorToken: 'wildStrawberry',
  token: '%',
  differenceValue: 2,
  typographyToken: 'secondaryBodyMediumRegular',
};
