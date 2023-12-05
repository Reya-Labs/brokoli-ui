import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyToken } from '../../foundation/Typography';
import { Ellipsis } from '../Ellipsis';
import { Typography } from '../Typography';
import { ButtonBox, ButtonStyled, ButtonVariant } from './Button.styled';

export type ButtonProps = React.PropsWithChildren<{
  disabled?: boolean;
  variant: ButtonVariant;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  bottomLeftText?: string;
  bottomLeftTextColorToken?: ColorTokens;
  bottomLeftTextTypographyToken?: TypographyToken;
  loading?: boolean;
  'data-testid'?: string;
  className?: string;
  typographyToken?: TypographyToken;
}>;

export const Button: React.FunctionComponent<ButtonProps> = ({
  onClick,
  variant = 'primary',
  loading = false,
  children,
  disabled = false,
  bottomLeftText,
  className,
  'data-testid': dataTestId,
  bottomLeftTextColorToken = 'white400',
  typographyToken = 'bodyMediumBold',
  bottomLeftTextTypographyToken = 'bodyXSmallRegular',
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
