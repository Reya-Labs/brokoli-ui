import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import { MarginAmountTokenField } from './index';
import { MarginAmountListProps } from './MarginAmountsList';

export default {
  args: {},
  component: MarginAmountTokenField,
  title: 'Components/Fields/MarginAmountTokenField',
} as ComponentMeta<typeof MarginAmountTokenField>;

const Template: ComponentStory<typeof MarginAmountTokenField> = (args) => {
  const [token, setToken] = useState(args.token);
  const [value, setValue] = useState(args.value);
  return (
    <MarginAmountTokenField
      {...args}
      token={token}
      value={value}
      onChange={({ token: nextToken, value: nextValue }) => {
        setValue(nextValue);
        setToken(nextToken);
      }}
    />
  );
};

const marginAmountOptions: MarginAmountListProps['items'] = [
  {
    token: 'dai',
    value: 1230000,
    valueFormatted: '1.23',
    valueSuffix: 'M',
  },
  {
    token: 'eth',
    value: 456000,
    valueFormatted: '456',
    valueSuffix: 'k',
  },
  {
    token: 'reth',
    value: 789,
    valueFormatted: '789',
    valueSuffix: '',
  },
  {
    token: 'steth',
    value: 12340,
    valueFormatted: '12.34',
    valueSuffix: 'k',
  },
  {
    token: 'usdc',
    value: 567000000,
    valueFormatted: '567',
    valueSuffix: 'M',
  },
  {
    token: 'usdt',
    value: 890000000,
    valueFormatted: '890',
    valueSuffix: 'M',
  },
];
export const Default = Template.bind({});
Default.args = {
  bottomLeftText: 'Bottom left text',
  bottomRightTextValue: '123',
  label: 'Label',
  marginAmountOptions,
  token: 'usdc',
  tooltip: 'Tooltip message here!',
  topRightText: 'Top right text',
};
