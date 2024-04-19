import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { ReactComponent as CloseIcon } from './close-icon.svg';
import { CloseButtonWrapper } from './CloseButton.styled';

export type CloseButtonProps = {
  buttonBackgroundColorToken?: ColorTokens;
  buttonHoverBackgroundColorToken?: ColorTokens;
  iconColorToken?: ColorTokens;
  iconHoverColorToken?: ColorTokens;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: number;
};

export const CloseButton: React.FunctionComponent<CloseButtonProps> = ({
  buttonBackgroundColorToken = 'black800',
  buttonHoverBackgroundColorToken = buttonBackgroundColorToken,
  iconColorToken = 'white950',
  iconHoverColorToken = iconColorToken,
  onClick,
  size = 16,
}) => {
  return (
    <CloseButtonWrapper
      buttonBackgroundColorToken={buttonBackgroundColorToken}
      buttonHoverBackgroundColorToken={buttonHoverBackgroundColorToken}
      data-testid={`CloseButton-CloseButtonStyled-${buttonBackgroundColorToken}`}
      iconColorToken={iconColorToken}
      iconHoverColorToken={iconHoverColorToken}
      size={size}
      onClick={onClick}
    >
      <CloseIcon />
    </CloseButtonWrapper>
  );
};
