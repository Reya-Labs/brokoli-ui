import React from 'react';

import { AttentionIndicator } from '../AttentionIndicator/AttentionIndicator';
import { AvatarAddress } from './AvatarAddress/AvatarAddress';
import { WalletButton, WalletConnectButtonTypography } from './WalletConnectButton.styled';
import { WalletConnectLoading } from './WalletConnectLoading/WalletConnectLoading';

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
          typographyToken="bodyMediumRegular"
        >
          {error}
        </WalletConnectButtonTypography>
      </WalletButton>
    );
  }

  if (loading) {
    return (
      <WalletButton data-testid="WalletConnectButton-WalletLoading">
        <WalletConnectLoading />
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
      <WalletConnectButtonTypography colorToken="lavenderWeb" typographyToken="bodyMediumRegular">
        Connect wallet
      </WalletConnectButtonTypography>
    </WalletButton>
  );
};
