import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { ReactComponent as CloseIcon } from './close-icon.svg';
import { CloseButtonWrapper } from './CloseButton.styled';

const originalSVGSize = 16;

export type CloseButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  backgroundColorToken?: ColorTokens;
  hoverBackgroundColorToken?: ColorTokens;
  size?: number;
};

export const CloseButton: React.FunctionComponent<CloseButtonProps> = ({
  backgroundColorToken = 'white900',
  hoverBackgroundColorToken = backgroundColorToken,
  onClick,
  size = originalSVGSize,
}) => {
  return (
    <CloseButtonWrapper
      backgroundColorToken={backgroundColorToken}
      data-testid={`CloseButton-CloseButtonStyled-${backgroundColorToken}`}
      hoverBackgroundColorToken={hoverBackgroundColorToken}
      size={size}
      onClick={onClick}
    >
      <CloseIcon />
    </CloseButtonWrapper>
  );
};
