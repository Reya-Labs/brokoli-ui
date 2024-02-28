import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { ReactComponent as CloseIcon } from './close-icon.svg';
import { CloseButtonWrapper } from './CloseButton.styled';

const originalSVGSize = 16;

export type CloseButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonBackgroundColor?: ColorTokens;
  buttonHoverBackgroundColor?: ColorTokens;
  iconColor?: ColorTokens;
  iconHoverColor?: ColorTokens;
  size?: number;
};

export const CloseButton: React.FunctionComponent<CloseButtonProps> = ({
  buttonBackgroundColor = 'white900',
  buttonHoverBackgroundColor = buttonBackgroundColor,
  iconColor,
  iconHoverColor,
  onClick,
  size = originalSVGSize,
}) => {
  return (
    <CloseButtonWrapper
      buttonBackgroundColor={buttonBackgroundColor}
      buttonHoverBackgroundColor={buttonHoverBackgroundColor}
      data-testid={`CloseButton-CloseButtonStyled-${buttonBackgroundColor}`}
      iconColor={iconColor}
      iconHoverColor={iconHoverColor}
      size={size}
      onClick={onClick}
    >
      <CloseIcon />
    </CloseButtonWrapper>
  );
};
