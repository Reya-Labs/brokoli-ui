import React from 'react';

import { AttentionIndicator } from '../AttentionIndicator/AttentionIndicator';
import { RainbowLoader } from '../RainbowLoader';
import { AvatarAddress } from './AvatarAddress/AvatarAddress';
import { WalletButton, WalletConnectButtonTypography } from './WalletConnectButton.styled';

export type WalletConnectButtonProps = {
  onClick?: () => void;
  account?: string | null;
  error?: string | null;
  loading?: boolean;
};

export const WalletConnectButton: React.FunctionComponent<WalletConnectButtonProps> = ({
  onClick,
  account,
  error,
  loading,
}) => {
  if (error) {
    return (
      <WalletButton data-testid="WalletConnectButton-WalletError" onClick={onClick}>
        <AttentionIndicator />
        <WalletConnectButtonTypography
          colorToken="wildStrawberry"
          typographyToken="primaryBodyMediumRegular"
        >
          {error}
        </WalletConnectButtonTypography>
      </WalletButton>
    );
  }

  if (loading) {
    return (
      <WalletButton data-testid="WalletConnectButton-WalletLoading">
        <RainbowLoader height={3} width={150} />
      </WalletButton>
    );
  }

  if (account && account.length === 42) {
    return (
      <WalletButton data-testid="WalletConnectButton-WalletConnected" onClick={onClick}>
        <AvatarAddress address={account} />
      </WalletButton>
    );
  }

  return (
    <WalletButton data-testid="WalletConnectButton-WalletConnect" onClick={onClick}>
      <AttentionIndicator />
      <WalletConnectButtonTypography
        colorToken="lavenderWeb"
        typographyToken="primaryBodyMediumRegular"
      >
        Connect wallet
      </WalletConnectButtonTypography>
    </WalletButton>
  );
};
