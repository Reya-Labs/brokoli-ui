import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { MarketToken } from './index';

export default {
  args: {},
  component: MarketToken,
  title: 'Components/MarketToken',
} as ComponentMeta<typeof MarketToken>;

const Template: ComponentStory<typeof MarketToken> = (args) => <MarketToken {...args} />;

export const Default = Template.bind({});
Default.args = {
  colorToken: 'lavenderWeb',
  iconSize: 30,
  market: 'Aave',
  token: 'usdc',
  typographyToken: 'primaryHeader2Black',
};

export const WithSmallerIcon = Template.bind({});
WithSmallerIcon.args = {
  colorToken: 'lavenderWeb',
  iconSize: 24,
  market: 'Lido',
  token: 'dai',
  typographyToken: 'primaryHeader3Bold',
};

export const WithNoIcons = Template.bind({});
WithNoIcons.args = {
  colorToken: 'lavenderWeb',
  iconSize: 0,
  market: 'Lido',
  token: 'dai',
  typographyToken: 'primaryHeader3Bold',
};

export const WithNoMarket = Template.bind({});
WithNoMarket.args = {
  colorToken: 'lavenderWeb',
  iconSize: 24,
  token: 'dai',
  typographyToken: 'primaryHeader3Bold',
};

export const WithNoToken = Template.bind({});
WithNoToken.args = {
  colorToken: 'lavenderWeb',
  iconSize: 24,
  market: 'Aave',
  typographyToken: 'primaryHeader3Bold',
};

export const WithCustomFormatter = Template.bind({});
WithCustomFormatter.args = {
  colorToken: 'lavenderWeb',
  iconSize: 24,
  infoFormatter: ({ market, token }) => `This is custom formatter ${market!} - ${token || ''}`,
  market: 'Lido',
  token: 'dai',
  typographyToken: 'primaryHeader3Bold',
};
