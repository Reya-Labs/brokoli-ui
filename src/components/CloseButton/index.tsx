import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { ReactComponent as CloseIcon } from './close-icon.svg';
import { CloseButtonWrapper } from './CloseButton.styled';

export type CloseButtonProps = {
  buttonBackgroundColorToken?: ColorTokens;
  buttonHoverBackgroundColorToken?: ColorTokens;
  'data-testid'?: string;
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
  'data-testid': dataTestId,
}) => {
  return (
    <CloseButtonWrapper
      buttonBackgroundColorToken={buttonBackgroundColorToken}
      buttonHoverBackgroundColorToken={buttonHoverBackgroundColorToken}
      data-testid={dataTestId || `CloseButton-CloseButtonStyled-${buttonBackgroundColorToken}`}
      iconColorToken={iconColorToken}
      iconHoverColorToken={iconHoverColorToken}
      size={size}
      onClick={onClick}
    >
      <CloseIcon />
    </CloseButtonWrapper>
  );
};
