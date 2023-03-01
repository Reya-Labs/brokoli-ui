import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { Typography, TypographyToken } from '../Typography';
import { ButtonBox, ButtonStyled, ButtonVariant } from './Button.styled';

export type ButtonProps = {
  disabled?: boolean;
  variant: ButtonVariant;
  onClick?: () => void;
  bottomLeftText?: string;
  bottomLeftTextColorToken?: ColorTokens;
  bottomLeftTextTypographyToken?: TypographyToken;
};
export const Button: React.FunctionComponent<ButtonProps> = ({
  onClick,
  variant = 'primary',
  children,
  disabled,
  bottomLeftText,
  bottomLeftTextColorToken = 'lavenderWeb3',
  bottomLeftTextTypographyToken = 'primaryBodyXSmallRegular',
}) => {
  const button = (
    <ButtonStyled disabled={disabled} variant={variant} onClick={disabled ? undefined : onClick}>
      {children}
    </ButtonStyled>
  );
  if (!bottomLeftText) {
    return button;
  }
  return (
    <ButtonBox>
      <ButtonStyled disabled={disabled} variant={variant} onClick={disabled ? undefined : onClick}>
        {children}
      </ButtonStyled>
      <Typography
        colorToken={bottomLeftTextColorToken}
        typographyToken={bottomLeftTextTypographyToken}
      >
        {bottomLeftText}
      </Typography>
    </ButtonBox>
  );
};
