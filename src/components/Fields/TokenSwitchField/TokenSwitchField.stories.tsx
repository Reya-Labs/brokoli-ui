import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import { TokenSwitchField } from './index';

export default {
  args: {},
  component: TokenSwitchField,
  title: 'Components/Fields/TokenSwitchField',
} as ComponentMeta<typeof TokenSwitchField>;

const Template: ComponentStory<typeof TokenSwitchField> = (args) => {
  const [switchValue, setSwitchValue] = useState<string>('on');
  const [value, setValue] = useState<string | undefined>(args.value);

  return (
    <TokenSwitchField
      {...args}
      switchValue={switchValue}
      value={value}
      onChange={setValue}
      onSwitchChange={setSwitchValue}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  bottomLeftText: 'Bottom left text',
  bottomRightTextValue: '123',
  label: 'Label',
  switchOffText: 'Switch off',
  switchOffValue: 'off',
  switchOnText: 'Switch on',
  switchOnValue: 'on',
  switchValue: 'on',
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
  switchOffText: 'Switch off',
  switchOffValue: 'off',
  switchOnText: 'Switch on',
  switchOnValue: 'on',
  switchValue: 'on',
  token: 'usdc',
  tooltip: 'Tooltip message here!',
  topRightText: 'Top right text',
};
