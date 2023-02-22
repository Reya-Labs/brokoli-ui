import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { TokenField } from './index';

export default {
  title: 'Components/TokenField',
  component: TokenField,
  args: {},
} as ComponentMeta<typeof TokenField>;

const Template: ComponentStory<typeof TokenField> = (args) => {
  return <TokenField {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  token: 'usdc',
  label: 'Label',
  tooltip: 'Tooltip message here!',
  bottomLeftText: 'Bottom left text',
  topRightText: 'Top right text',
  bottomRightTextValue: '123',
};
