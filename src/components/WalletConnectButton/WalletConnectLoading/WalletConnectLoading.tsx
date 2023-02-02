import React from 'react';

import {
  WalletConnectLoadingBox,
  WalletLoadingEllipsis,
  WalletLoadingRect1,
  WalletLoadingRect2,
} from './WalletConnectLoading.styled';

export const WalletConnectLoading: React.FunctionComponent = React.memo(() => (
  <WalletConnectLoadingBox>
    <WalletLoadingRect1 />
    <WalletLoadingRect2 />
    <WalletLoadingEllipsis />
  </WalletConnectLoadingBox>
));
