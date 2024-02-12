import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyTokens } from '../../foundation/Typography';
import { Ellipsis } from '../Ellipsis';
import { Typography } from '../Typography';
import { ButtonBox, ButtonStyled } from './Button.styled';

export type ButtonProps = React.PropsWithChildren<{
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  bottomLeftText?: string;
  bottomLeftTextColorToken?: ColorTokens;
  bottomLeftTextTypographyToken?: TypographyTokens;
  loading?: boolean;
  'data-testid'?: string;
  className?: string;
  typographyToken?: TypographyTokens;
  borderColorToken?: ColorTokens;
  backgroundColorToken?: ColorTokens;
  typographyColorToken?: ColorTokens;
  rounded?: boolean;
  disabledTypographyColorToken?: ColorTokens;
  disabledBackgroundColorToken?: ColorTokens;
  hoverTypographyColorToken?: ColorTokens;
  hoverBackgroundColorToken?: ColorTokens;
  hoverBorderColorToken?: ColorTokens;
}>;

export const Button: React.FunctionComponent<ButtonProps> = ({
  onClick,
  borderColorToken,
  backgroundColorToken,
  typographyColorToken,
  rounded,
  loading = false,
  children,
  disabled = false,
  bottomLeftText,
  className,
  'data-testid': dataTestId,
  bottomLeftTextColorToken = 'white400',
  typographyToken = 'bodyMediumBold',
  bottomLeftTextTypographyToken = 'bodyXSmallRegular',
  disabledBackgroundColorToken,
  disabledTypographyColorToken,
  hoverBorderColorToken,
  hoverTypographyColorToken,
  hoverBackgroundColorToken,
}) => {
  const childrenToRender = !loading ? children : <Ellipsis />;
  const button = (
    <ButtonStyled
      backgroundColorToken={backgroundColorToken}
      borderColorToken={borderColorToken}
      className={className}
      data-testid={dataTestId}
      disabled={disabled}
      disabledBackgroundColorToken={disabledBackgroundColorToken}
      disabledTypographyColorToken={disabledTypographyColorToken}
      hoverBackgroundColorToken={hoverBackgroundColorToken || backgroundColorToken}
      hoverBorderColorToken={hoverBorderColorToken}
      hoverTypographyColorToken={hoverTypographyColorToken || typographyColorToken}
      rounded={Boolean(rounded)}
      typographyColorToken={typographyColorToken}
      typographyToken={typographyToken}
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
