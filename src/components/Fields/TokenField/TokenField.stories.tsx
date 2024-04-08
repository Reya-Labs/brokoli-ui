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
  const [tokenOption, setTokenOption] = useState<string | undefined>(args.token);
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
      token={tokenOption}
      value={value}
      onChange={setValue}
      onTokenOptionSelected={setTokenOption}
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

export const WithError: StoryObj<typeof TokenField> = {
  args: {
    bottomLeftText: 'Max value is',
    bottomLeftTextColorToken: 'error500',
    bottomRightTextColorToken: 'error500',
    bottomRightTextTokenColorToken: 'error700',
    bottomRightTextValue: '123456',
    error: true,
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

export const WithMaxTokenOptionsAndTokenFormatter: StoryObj<typeof TokenField> = {
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
    tokenFormatter: (token: string | undefined) => (!token ? '' : token.toUpperCase()),
    tokenOptions: ['eth', 'usdc'],
    tooltip: 'Tooltip message here!',
    topRightText: 'Top right text',
  },
  render: Template,
};

export const WithMaxTokenOptionsAndNoInitialTokenFormatter: StoryObj<typeof TokenField> = {
  args: {
    bottomLeftText: 'Max value is',
    bottomRightTextValue: '123456',
    label: 'Label',
    max: {
      onClick: () => {},
      showButton: true,
      value: '123456',
    },
    token: '',
    tokenFormatter: (token: string | undefined) => (!token ? '' : token.toUpperCase()),
    tokenOptions: ['eth', 'usdc'],
    tooltip: 'Tooltip message here!',
    topRightText: 'Top right text',
  },
  render: Template,
};

export const WithPrefixTokenFormatter: StoryObj<typeof TokenField> = {
  args: {
    bottomLeftText: 'Max value is',
    bottomRightTextValue: '123456',
    label: 'Label',
    max: {
      onClick: () => {},
      showButton: true,
      value: '123456',
    },
    prefixToken: '+',
    token: 'usdc',
    tokenFormatter: (token: string | undefined) => (!token ? '' : token.toUpperCase()),
    tokenOptions: ['eth', 'usdc'],
    tooltip: 'Tooltip message here!',
    topRightText: 'Top right text',
  },
  render: Template,
};
