import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { ReactComponent as CloseIcon } from './close-icon.svg';
import { CloseButtonWrapper } from './CloseButton.styled';

export type CloseButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  colorToken?: ColorTokens;
  backgroundColorToken?: ColorTokens;
  hoverBackgroundColorToken?: ColorTokens;
};

export const CloseButton: React.FunctionComponent<CloseButtonProps> = React.memo(
  ({
    colorToken = 'white100',
    backgroundColorToken = 'white900',
    hoverBackgroundColorToken = 'white800',
    onClick,
  }) => {
    return (
      <CloseButtonWrapper
        backgroundColorToken={backgroundColorToken}
        colorToken={colorToken}
        data-testid={`CloseButton-CloseButtonStyled-${colorToken}`}
        hoverBackgroundColorToken={hoverBackgroundColorToken}
        onClick={onClick}
      >
        <CloseIcon />
      </CloseButtonWrapper>
    );
  },
);
