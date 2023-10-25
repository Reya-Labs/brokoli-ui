import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { TokenSwitchField } from './index';

export default {
  args: {},
  component: TokenSwitchField,
  title: 'Components/Fields/TokenSwitchField',
} as Meta<typeof TokenSwitchField>;

const Template: StoryFn<typeof TokenSwitchField> = (args) => {
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

export const Default: StoryObj<typeof TokenSwitchField> = {
  args: {
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
  },

  render: Template,
};

export const WithMax: StoryObj<typeof TokenSwitchField> = {
  args: {
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
  },

  render: Template,
};
