import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { MarginAmountTokenField } from './index';

export default {
  args: {},
  component: MarginAmountTokenField,
  title: 'Components/Fields/MarginAmountTokenField',
} as ComponentMeta<typeof MarginAmountTokenField>;

const Template: ComponentStory<typeof MarginAmountTokenField> = (args) => {
  return <MarginAmountTokenField {...args} />;
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
