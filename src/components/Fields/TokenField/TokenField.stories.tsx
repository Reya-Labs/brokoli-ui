import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { TokenField } from '.';

export default {
  args: {},
  component: TokenField,
  title: 'Components/Fields/TokenField',
} as Meta<typeof TokenField>;

const Template: StoryFn<typeof TokenField> = (args) => {
  const [value, setValue] = useState<string | undefined>(args.value);
  return (
    <TokenField
      {...args}
      max={
        args.max
          ? {
              ...args.max,
              onClick: () => setValue(args.max?.value.toString()),
            }
          : undefined
      }
      value={value}
      onChange={setValue}
    />
  );
};

export const Default: StoryObj<typeof TokenField> = {
  args: {
    bottomLeftText: 'Bottom left text',
    bottomRightTextValue: '123',
    label: 'Label',
    token: 'usdc',
    tooltip: 'Tooltip message here!',
    topRightText: 'Top right text',
  },

  render: Template,
};

export const WithMax: StoryObj<typeof TokenField> = {
  args: {
    bottomLeftText: 'Max value is',
    bottomRightTextValue: '123456',
    label: 'Label',
    max: {
      onClick: () => {},
      showButton: true,
      value: '123456',
    },
    token: 'usdc',
    tooltip: 'Tooltip message here!',
    topRightText: 'Top right text',
  },

  render: Template,
};

export const WithDifferentBottomRightTextToken: StoryObj<typeof TokenField> = {
  args: {
    bottomLeftText: 'Max value is',
    bottomRightTextToken: '%',
    bottomRightTextTokenColorToken: 'white950',
    bottomRightTextValue: '123456',
    label: 'Label',
    max: {
      onClick: () => {},
      showButton: true,
      value: '123456',
    },
    token: 'usdc',
    tooltip: 'Tooltip message here!',
    topRightText: 'Top right text',
  },

  render: Template,
};
