import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { FromToTokenTypography } from './index';

export default {
  title: 'Components/FromToTokenTypography',
  component: FromToTokenTypography,
  args: {},
} as ComponentMeta<typeof FromToTokenTypography>;

const Template: ComponentStory<typeof FromToTokenTypography> = (args) => (
  <FromToTokenTypography {...args} />
);

export const Default = Template.bind({});
Default.args = {
  labelTypographyToken: 'primaryBodyMediumBold',
  labelColorToken: 'lavenderWeb',
  label: 'Label goes here',
  fromColorToken: 'skyBlueCrayola',
  toColorToken: 'ultramarineBlue',
  fromValue: 'From',
  toValue: 'To',
  typographyToken: 'secondaryBodySmallRegular',
};

export const WithTokens = Template.bind({});
WithTokens.args = {
  labelTypographyToken: 'primaryBodyXSmallRegular',
  labelColorToken: 'lavenderWeb',
  label: 'Label goes here',
  fromColorToken: 'lavenderWeb',
  fromToken: '%',
  toColorToken: 'lavenderWeb',
  toToken: '%',
  token: 'percentage',
  fromValue: 29,
  toValue: 64,
  typographyToken: 'secondaryBodySmallRegular',
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  labelTypographyToken: 'primaryBodyXSmallRegular',
  labelColorToken: 'lavenderWeb',
  label: 'Label goes here',
  fromColorToken: 'lavenderWeb',
  fromToken: '%',
  toColorToken: 'lavenderWeb',
  toToken: '%',
  token: 'percentage',
  fromValue: 29,
  toValue: 64,
  typographyToken: 'secondaryBodySmallRegular',
  tooltip: 'Created with ❤️!',
};
