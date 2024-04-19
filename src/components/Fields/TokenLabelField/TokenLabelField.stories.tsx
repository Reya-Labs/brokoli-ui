import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { TokenLabelField } from '.';

export default {
  args: {},
  component: TokenLabelField,
  title: 'Components/Fields/TokenLabelField',
} as Meta<typeof TokenLabelField>;

const Template: StoryFn<typeof TokenLabelField> = (args) => {
  const [value, setValue] = useState<string | undefined>(args.value);
  const [tokenOption, setTokenOption] = useState<string | undefined>(args.token);
  return (
    <TokenLabelField
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

export const Default: StoryObj<typeof TokenLabelField> = {
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

export const WithMax: StoryObj<typeof TokenLabelField> = {
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

export const WithError: StoryObj<typeof TokenLabelField> = {
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

export const WithDifferentBottomRightTextToken: StoryObj<typeof TokenLabelField> = {
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

export const WithMaxTokenOptionsAndTokenFormatter: StoryObj<typeof TokenLabelField> = {
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

export const WithMaxTokenOptionsAndNoInitialTokenFormatter: StoryObj<typeof TokenLabelField> = {
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

export const WithPrefixTokenFormatter: StoryObj<typeof TokenLabelField> = {
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

export const WithCustomStyle: StoryObj<typeof TokenLabelField> = {
  args: {
    backgroundColorToken: 'primary800',
    borderColorToken: 'primary500',
    bottomLeftText: 'Max value is',
    bottomRightTextValue: '123456',
    colorToken: 'primary300',
    disabledBackgroundColorToken: 'warning800',
    disabledBorderColorToken: 'warning500',
    disabledColorToken: 'warning500',
    errorBorderColorToken: 'error500',
    errorColorToken: 'error500',
    hoverBackgroundColorToken: 'secondary700',
    hoverBorderColorToken: 'primary800',
    hoverColorToken: 'primary700',
    hoverErrorBorderColorToken: 'error200',
    hoverErrorColorToken: 'error700',
    label: 'Label',
    max: {
      onClick: () => {},
      showButton: true,
      value: '123456',
    },
    placeholderColorToken: 'secondary700',
    prefixToken: '+',
    token: 'usdc',
    tokenFormatter: (token: string | undefined) => (!token ? '' : token.toUpperCase()),
    tokenOptions: ['eth', 'usdc'],
    tooltip: 'Tooltip message here!',
    topRightText: 'Top right text',
  },
  render: Template,
};
