import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { MarketIcon } from './index';

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
