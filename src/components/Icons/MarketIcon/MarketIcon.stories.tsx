import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { MarketIcon } from '.';

export default {
  args: {},
  component: MarketIcon,
  title: 'Components/Icons/MarketIcon',
} as ComponentMeta<typeof MarketIcon>;

const Template: ComponentStory<typeof MarketIcon> = (args) => <MarketIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  market: 'aave',
};

export const WithSize = Template.bind({});
WithSize.args = {
  market: 'aave',
  size: 50,
};
