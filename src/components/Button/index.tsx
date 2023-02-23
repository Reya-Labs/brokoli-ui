import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyToken } from '../Typography';
import { BottomLeftTextTypography, ButtonStyled } from './Button.styled';

export type ButtonProps = {
  disabled?: boolean;
  onClick?: () => void;
  bottomLeftText?: string;
  bottomLeftTextColorToken?: ColorTokens;
  bottomLeftTextTypographyToken?: TypographyToken;
};
export const Button: React.FunctionComponent<ButtonProps> = ({
  onClick,
  children,
  disabled,
  bottomLeftText,
  bottomLeftTextColorToken = 'lavenderWeb3',
  bottomLeftTextTypographyToken = 'primaryBodyXSmallRegular',
}) => {
  return (
    <React.Fragment>
      <ButtonStyled disabled={disabled} onClick={disabled ? undefined : onClick}>
        {children}
      </ButtonStyled>
      {bottomLeftText && (
        <BottomLeftTextTypography
          colorToken={bottomLeftTextColorToken}
          typographyToken={bottomLeftTextTypographyToken}
        >
          {bottomLeftText}
        </BottomLeftTextTypography>
      )}
    </React.Fragment>
  );
};
