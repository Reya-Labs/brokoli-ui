import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { MarketToken } from './index';

export default {
  title: 'Components/MarketToken',
  component: MarketToken,
  args: {},
} as ComponentMeta<typeof MarketToken>;

const Template: ComponentStory<typeof MarketToken> = (args) => <MarketToken {...args} />;

export const Default = Template.bind({});
Default.args = {
  token: 'usdc',
  market: 'Aave',
  typographyToken: 'primaryHeader2Black',
  colorToken: 'lavenderWeb',
  iconSize: 30,
};

export const WithSmallerIcon = Template.bind({});
WithSmallerIcon.args = {
  token: 'dai',
  market: 'Lido',
  typographyToken: 'primaryHeader3Bold',
  colorToken: 'lavenderWeb',
  iconSize: 24,
};

export const WithNoIcons = Template.bind({});
WithNoIcons.args = {
  token: 'dai',
  market: 'Lido',
  typographyToken: 'primaryHeader3Bold',
  colorToken: 'lavenderWeb',
  iconSize: 0,
};

export const WithCustomFormatter = Template.bind({});
WithCustomFormatter.args = {
  token: 'dai',
  market: 'Lido',
  typographyToken: 'primaryHeader3Bold',
  colorToken: 'lavenderWeb',
  iconSize: 24,
  infoFormatter: ({ market, token }) => `This is custom formatter ${market} - ${token || ''}`,
};
