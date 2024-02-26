import React from 'react';
import { ColorTokens } from '../../foundation/Colors';
import { CloseButtonWrapper } from './CloseButton.styled';
import { ReactComponent as CloseIcon } from './close-icon.svg';

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
        colorToken={colorToken}
        backgroundColorToken={backgroundColorToken}
        hoverBackgroundColorToken={hoverBackgroundColorToken}
        data-testid={`CloseButton-CloseButtonStyled-${colorToken}`}
        onClick={onClick}
      >
        <CloseIcon />
      </CloseButtonWrapper>
    );
  },
);
