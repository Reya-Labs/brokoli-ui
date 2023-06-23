import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import { ReactComponent as Arbitrum } from './icons/arbitrum.svg';
import { ReactComponent as Ethereum } from './icons/ethereum.svg';
import { ChainSelector } from './index';

export default {
  title: 'Components/ChainSelector',
  component: ChainSelector,
  args: {},
} as ComponentMeta<typeof ChainSelector>;

const Template: ComponentStory<typeof ChainSelector> = (args) => {
  const [chainId, setChainId] = useState(args.selectedChainId || -1);

  return <ChainSelector {...args} selectedChainId={chainId} onChainChange={setChainId} />;
};
const chainOptions = [
  {
    id: 1,
    name: 'Ethereum',
    Icon: Ethereum,
  },
  {
    id: 5,
    name: 'Görli',
    Icon: Ethereum,
  },
  {
    id: 42161,
    name: 'Arbitrum One',
    Icon: Arbitrum,
  },
  {
    id: 421613,
    name: 'Arbitrum Görli',
    Icon: Arbitrum,
  },
];

export const Default = Template.bind({});
Default.args = {
  chainOptions,
};

export const Approving = Template.bind({});
Approving.args = {
  chainOptions,
  approving: true,
  selectedChainId: 1,
};
