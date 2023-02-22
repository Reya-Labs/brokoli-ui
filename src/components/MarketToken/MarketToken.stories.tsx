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
  market: 'aave',
};
