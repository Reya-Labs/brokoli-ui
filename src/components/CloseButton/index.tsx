import React from 'react';

import { BaseColorTokens } from '../../foundation/Colors';
import { CloseButtonStyled } from './CloseButton.styled';

export type CloseButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  colorToken?: BaseColorTokens;
};

export const CloseButton: React.FunctionComponent<CloseButtonProps> = React.memo(
  ({ colorToken = 'white', onClick }) => {
    return (
      <CloseButtonStyled
        colorToken={colorToken}
        data-testid={`CloseButton-CloseButtonStyled-${colorToken}`}
        onClick={onClick}
      >
        ✕
      </CloseButtonStyled>
    );
  },
);
