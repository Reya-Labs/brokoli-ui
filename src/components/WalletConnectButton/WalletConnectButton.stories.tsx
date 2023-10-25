import detectEthereumProvider from '@metamask/detect-provider';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { ethers } from 'ethers';
import React, { useState } from 'react';

import { WalletConnectButton } from './index';

export default {
  component: WalletConnectButton,
  title: 'Components/WalletConnectButton',
} as Meta<typeof WalletConnectButton>;

const TemplateMetamask: StoryFn<typeof React.Fragment> = () => {
  const [account, setAccount] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const connect = async () => {
    if (account) {
      return;
    }
    setLoading(true);
    const externalProvider = await detectEthereumProvider();
    if (externalProvider) {
      try {
        const provider = new ethers.providers.Web3Provider(
          externalProvider as ethers.providers.ExternalProvider,
        );
        await provider.send('eth_requestAccounts', []);
        const newSigner = provider.getSigner();
        const walletAddress = await newSigner.getAddress();
        setAccount(walletAddress);
        setLoading(false);
      } catch (err) {
        setError((err as Error)?.message || JSON.stringify(err));
        setLoading(false);
      }
    } else {
      setError('Metamask not installed');
      setLoading(false);
    }
  };

  return (
    <WalletConnectButton
      account={account}
      error={error}
      loading={loading}
      onClick={() => void connect()}
    />
  );
};

export const Default: StoryObj<typeof WalletConnectButton> = {
  args: {
    account: '',
    error: '',
  },
};

export const WithAccount: StoryObj<typeof WalletConnectButton> = {
  args: {
    account: '0xb01F14d1C9000D453241221EB54648F1C378c970',
    error: '',
  },
};

export const WithError: StoryObj<typeof WalletConnectButton> = {
  args: {
    account: '0xb01F14d1C9000D453241221EB54648F1C378c970',
    error: 'Wrong Network',
  },
};

export const WithLoading: StoryObj<typeof WalletConnectButton> = {
  args: {
    account: '',
    error: '',
    loading: true,
  },
};

export const WithMetamaskConnect: StoryObj<typeof WalletConnectButton> = {
  args: {},
  render: TemplateMetamask,
};
