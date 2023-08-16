import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { FromToTokenTypography } from './index';

export default {
  args: {},
  component: FromToTokenTypography,
  title: 'Components/FromToTokenTypography',
} as ComponentMeta<typeof FromToTokenTypography>;

const Template: ComponentStory<typeof FromToTokenTypography> = (args) => (
  <FromToTokenTypography {...args} />
);

export const Default = Template.bind({});
Default.args = {
  fromColorToken: 'skyBlueCrayola',
  fromValue: 'From',
  toColorToken: 'ultramarineBlue',
  toValue: 'To',
  typographyToken: 'secondaryBodySmallRegular',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  fromColorToken: 'skyBlueCrayola',
  fromValue: 'From',
  label: 'Label goes here',
  labelColorToken: 'lavenderWeb',
  labelTypographyToken: 'primaryBodyMediumBold',
  toColorToken: 'ultramarineBlue',
  toValue: 'To',
  typographyToken: 'secondaryBodySmallRegular',
};

export const WithTokens = Template.bind({});
WithTokens.args = {
  fromColorToken: 'lavenderWeb',
  fromPrefixToken: '$',
  fromToken: '%',
  fromValue: 29,
  label: 'Label goes here',
  labelColorToken: 'lavenderWeb',
  labelTypographyToken: 'primaryBodyXSmallRegular',
  toColorToken: 'lavenderWeb',
  toPrefixToken: '$',
  toToken: '%',
  toValue: 64,
  token: 'percentage',
  typographyToken: 'secondaryBodySmallRegular',
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  fromColorToken: 'lavenderWeb',
  fromToken: '%',
  fromValue: 29,
  label: 'Label goes here',
  labelColorToken: 'lavenderWeb',
  labelTypographyToken: 'primaryBodyXSmallRegular',
  toColorToken: 'lavenderWeb',
  toToken: '%',
  toValue: 64,
  token: 'percentage',
  tooltip: 'Created with ❤️!',
  typographyToken: 'secondaryBodySmallRegular',
};
