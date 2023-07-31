import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { TokenIcon } from './index';

export default {
  args: {},
  component: TokenIcon,
  title: 'Components/Icons/TokenIcon',
} as ComponentMeta<typeof TokenIcon>;

const Template: ComponentStory<typeof TokenIcon> = (args) => <TokenIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  token: 'eth',
};
