import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { Ellipsis } from '../Ellipsis';
import { Typography, TypographyToken } from '../Typography';
import { ButtonBox, ButtonStyled, ButtonVariant } from './Button.styled';

export type ButtonProps = {
  disabled?: boolean;
  variant: ButtonVariant;
  onClick?: () => void;
  bottomLeftText?: string;
  bottomLeftTextColorToken?: ColorTokens;
  bottomLeftTextTypographyToken?: TypographyToken;
  loading?: boolean;
  'data-testid'?: string;
  className?: string;
  typographyToken?: TypographyToken;
};
export const Button: React.FunctionComponent<ButtonProps> = ({
  onClick,
  variant = 'primary',
  loading = false,
  children,
  disabled = false,
  bottomLeftText,
  className,
  'data-testid': dataTestId,
  bottomLeftTextColorToken = 'lavenderWeb3',
  typographyToken = 'primaryBodyMediumBold',
  bottomLeftTextTypographyToken = 'primaryBodyXSmallRegular',
}) => {
  const childrenToRender = !loading ? children : <Ellipsis />;
  const button = (
    <ButtonStyled
      className={className}
      data-testid={dataTestId}
      disabled={disabled}
      typographyToken={typographyToken}
      variant={variant}
      onClick={disabled ? undefined : onClick}
    >
      {childrenToRender}
    </ButtonStyled>
  );
  if (!bottomLeftText) {
    return button;
  }
  return (
    <ButtonBox>
      {button}
      <Typography
        colorToken={bottomLeftTextColorToken}
        typographyToken={bottomLeftTextTypographyToken}
      >
        {bottomLeftText}
      </Typography>
    </ButtonBox>
  );
};
