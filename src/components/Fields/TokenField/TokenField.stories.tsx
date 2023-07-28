import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { TokenField } from './index';

export default {
  args: {},
  component: TokenField,
  title: 'Components/Fields/TokenField',
} as ComponentMeta<typeof TokenField>;

const Template: ComponentStory<typeof TokenField> = (args) => {
  return <TokenField {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  bottomLeftText: 'Bottom left text',
  bottomRightTextValue: '123',
  label: 'Label',
  token: 'usdc',
  tooltip: 'Tooltip message here!',
  topRightText: 'Top right text',
};
