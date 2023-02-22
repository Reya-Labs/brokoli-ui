import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import { TokenSwitchField } from './index';

export default {
  title: 'Components/TokenSwitchField',
  component: TokenSwitchField,
  args: {},
} as ComponentMeta<typeof TokenSwitchField>;

const Template: ComponentStory<typeof TokenSwitchField> = (args) => {
  const [switchValue, setSwitchValue] = useState<string>('on');

  return <TokenSwitchField {...args} switchValue={switchValue} onSwitchChange={setSwitchValue} />;
};

export const Default = Template.bind({});
Default.args = {
  token: 'usdc',
  label: 'Label',
  tooltip: 'Tooltip message here!',
  bottomLeftText: 'Bottom left text',
  topRightText: 'Top right text',
  bottomRightTextValue: '123',
  switchOnText: 'Switch on',
  switchOffText: 'Switch off',
  switchValue: 'on',
  switchOnValue: 'on',
  switchOffValue: 'off',
};
