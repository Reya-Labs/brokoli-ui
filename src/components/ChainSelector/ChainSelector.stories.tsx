import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { ChainSelector } from '.';
import { ReactComponent as Arbitrum } from './icons/arbitrum.svg';
import { ReactComponent as Ethereum } from './icons/ethereum.svg';

export default {
  args: {},
  component: ChainSelector,
  title: 'Components/ChainSelector',
} as Meta<typeof ChainSelector>;

const Template: StoryFn<typeof ChainSelector> = (args) => {
  const [chainId, setChainId] = useState(args.selectedChainId || -1);

  return <ChainSelector {...args} selectedChainId={chainId} onChainChange={setChainId} />;
};
const chainOptions = [
  {
    Icon: Ethereum,
    id: 1,
    name: 'Ethereum',
  },
  {
    Icon: Ethereum,
    id: 5,
    name: 'Görli',
  },
  {
    Icon: Arbitrum,
    id: 42161,
    name: 'Arbitrum One',
  },
  {
    Icon: Arbitrum,
    id: 421613,
    name: 'Arbitrum Görli',
  },
];

export const Default: StoryObj<typeof ChainSelector> = {
  args: {
    chainOptions,
  },

  render: Template,
};
