import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import { TokenField } from './index';

export default {
  args: {},
  component: TokenField,
  title: 'Components/Fields/TokenField',
} as ComponentMeta<typeof TokenField>;

const Template: ComponentStory<typeof TokenField> = (args) => {
  const [value, setValue] = useState<string | undefined>(args.value);
  return <TokenField {...args} value={value} onChange={setValue} />;
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

export const WithMax = Template.bind({});
WithMax.args = {
  bottomLeftText: 'Max value is',
  bottomRightTextValue: '123456',
  label: 'Label',
  max: {
    showButton: true,
    value: '123456',
  },
  token: 'usdc',
  tooltip: 'Tooltip message here!',
  topRightText: 'Top right text',
};

export const WithDifferentBottomRightTextToken = Template.bind({});
WithDifferentBottomRightTextToken.args = {
  bottomLeftText: 'Max value is',
  bottomRightTextToken: '%',
  bottomRightTextValue: '123456',
  label: 'Label',
  max: {
    showButton: true,
    value: '123456',
  },
  token: 'usdc',
  tooltip: 'Tooltip message here!',
  topRightText: 'Top right text',
};
