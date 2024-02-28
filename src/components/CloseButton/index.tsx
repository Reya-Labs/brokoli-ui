import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { ReactComponent as CloseIcon } from './close-icon.svg';
import { CloseButtonWrapper } from './CloseButton.styled';

export type CloseButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonBackgroundColorToken?: ColorTokens;
  buttonHoverBackgroundColorToken?: ColorTokens;
  iconColorToken?: ColorTokens;
  iconHoverColorToken?: ColorTokens;
  size?: number;
};

export const CloseButton: React.FunctionComponent<CloseButtonProps> = ({
  buttonBackgroundColorToken = 'white900',
  buttonHoverBackgroundColorToken = buttonBackgroundColorToken,
  iconColorToken,
  iconHoverColorToken,
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
