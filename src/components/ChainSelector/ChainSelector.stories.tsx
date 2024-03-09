import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { ChainSelector } from '.';

export default {
  args: {},
  component: ChainSelector,
  title: 'Components/ChainSelector',
} as Meta<typeof ChainSelector>;

const Template: StoryFn<typeof ChainSelector> = (args) => {
  const [chainId, setChainId] = useState(args.selectedChainId);

  return <ChainSelector {...args} selectedChainId={chainId} onChainChange={setChainId} />;
};
const chainOptions = [
  1, 10, 1101, 11155111, 11155420, 137, 1442, 89346161, 420, 42161, 421613, 421614, 42170, 5, 80001,
];

export const Default: StoryObj<typeof ChainSelector> = {
  args: {
    chainOptions,
  },

  render: Template,
};

export const Approving: StoryObj<typeof ChainSelector> = {
  args: {
    approving: true,
    chainOptions,
    selectedChainId: 1,
  },

  render: Template,
};

export const WithLabel: StoryObj<typeof ChainSelector> = {
  args: {
    chainOptions,
    disabled: false,
    label: 'Choose chain',
    labelColorToken: 'white100',
    labelTypographyToken: 'bodySmallRegular',
    selectedChainId: 1,
  },
  render: Template,
};

export const WithLabelTooltip: StoryObj<typeof ChainSelector> = {
  args: {
    chainOptions,
    disabled: false,
    label: 'Choose chain',
    labelColorToken: 'white100',
    labelTypographyToken: 'bodySmallRegular',
    selectedChainId: 1,
    tooltip: 'Created with ❤️!',
    tooltipColorToken: 'white950',
  },
  render: Template,
};

export const Disabled: StoryObj<typeof ChainSelector> = {
  args: {
    chainOptions,
    disabled: true,
    selectedChainId: 1,
  },

  render: Template,
};
