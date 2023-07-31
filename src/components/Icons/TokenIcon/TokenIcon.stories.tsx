import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { TokenIcon } from '.';

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

export const WithSize = Template.bind({});
WithSize.args = {
  size: 50,
  token: 'eth',
};
