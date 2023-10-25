import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import Arbitrum from './icons/arbitrum.svg';
import Ethereum from './icons/ethereum.svg';
import { ChainSelector } from './index';

export default {
  args: {},
  component: ChainSelector,
  title: 'Components/ChainSelector',
} as ComponentMeta<typeof ChainSelector>;

const Template: ComponentStory<typeof ChainSelector> = (args) => {
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

export const Default = Template.bind({});
Default.args = {
  chainOptions,
};

export const Approving = Template.bind({});
Approving.args = {
  approving: true,
  chainOptions,
  selectedChainId: 1,
};
