import React from 'react';

import { BaseColorTokens, ColorTokens } from '../../foundation/Colors';
import { ReactComponent as CloseIcon } from './close-icon.svg';
import { CloseButtonWrapper } from './CloseButton.styled';

const originalSVGSize = 16;

export type CloseButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  colorToken?: BaseColorTokens;
  backgroundColorToken?: ColorTokens;
  hoverBackgroundColorToken?: ColorTokens;
  size?: number;
};

export const CloseButton: React.FunctionComponent<CloseButtonProps> = ({
  colorToken = 'white',
  backgroundColorToken,
  hoverBackgroundColorToken,
  onClick,
  size = 12,
}) => {
  return (
    <CloseButtonWrapper
      backgroundColorToken={backgroundColorToken}
      colorToken={colorToken}
      data-testid={`CloseButton-CloseButtonStyled-${colorToken}`}
      hoverBackgroundColorToken={hoverBackgroundColorToken}
      onClick={onClick}
      size={size}
    >
      <CloseIcon width={size} height={size} />
    </CloseButtonWrapper>
  );
};
