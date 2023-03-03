import React from 'react';

import { BaseColorTokens } from '../../foundation/Colors';
import { CloseButtonStyled } from './CloseButton.styled';

type CloseButtonProps = {
  onClick?: () => void;
  colorToken?: BaseColorTokens;
};

export const CloseButton: React.FunctionComponent<CloseButtonProps> = React.memo(
  ({ colorToken = 'lavenderWeb', onClick }) => {
    return (
      <CloseButtonStyled colorToken={colorToken} onClick={onClick}>
        ✕
      </CloseButtonStyled>
    );
  },
);
