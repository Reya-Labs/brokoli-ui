import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyTokens } from '../../foundation/Typography';
import { Ellipsis } from '../Ellipsis';
import { Typography } from '../Typography';
import { ButtonBox, ButtonStyled, IconBox } from './Button.styled';

export type ButtonProps = React.PropsWithChildren<{
  backgroundColorToken?: ColorTokens;
  borderColorToken?: ColorTokens;
  bottomLeftText?: string;
  bottomLeftTextColorToken?: ColorTokens;
  bottomLeftTextTypographyToken?: TypographyTokens;
  className?: string;
  'data-testid'?: string;
  disabled?: boolean;
  hoverBackgroundColorToken?: ColorTokens;
  hoverBorderColorToken?: ColorTokens;
  hoverIconColorToken?: ColorTokens;
  hoverTypographyColorToken?: ColorTokens;
  iconColorToken?: ColorTokens;
  /**
   * `iconLeft` allows you to insert a React Component (preferably an SVG) on the left side of the button content.
   * When an SVG is provided as `iconLeft`, it will inherit hover effects from the button, such as color changes.
   */
  iconLeft?: React.ReactNode;
  /**
   * `iconRight` allows you to insert a React Component (preferably an SVG) on the right side of the button content.
   * When an SVG is provided as `iconRight`, it will inherit hover effects from the button, such as color changes.
   */
  iconRight?: React.ReactNode;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  rounded?: boolean;
  typographyColorToken?: ColorTokens;
  typographyToken?: TypographyTokens;
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
  hoverBorderColorToken,
  hoverTypographyColorToken,
  hoverBackgroundColorToken,
  iconLeft,
  iconRight,
  hoverIconColorToken = hoverTypographyColorToken,
  iconColorToken = typographyColorToken,
}) => {
  const childrenToRender = !loading ? children : <Ellipsis />;

  const content = (
    <>
      {iconLeft && !loading && (
        <IconBox
          colorToken={iconColorToken}
          data-testid="Button-IconLeftBox"
          hoverColorToken={hoverIconColorToken}
        >
          {iconLeft}
        </IconBox>
      )}
      {childrenToRender}
      {iconRight && !loading && (
        <IconBox
          colorToken={iconColorToken}
          data-testid="Button-IconRightBox"
          hoverColorToken={hoverIconColorToken}
        >
          {iconRight}
        </IconBox>
      )}
    </>
  );

  const button = (
    <ButtonStyled
      backgroundColorToken={backgroundColorToken}
      borderColorToken={borderColorToken}
      className={className}
      data-testid={dataTestId}
      disabled={disabled}
      hoverBackgroundColorToken={hoverBackgroundColorToken || backgroundColorToken}
      hoverBorderColorToken={hoverBorderColorToken}
      hoverIconColorToken={hoverIconColorToken}
      hoverTypographyColorToken={hoverTypographyColorToken || typographyColorToken}
      iconColorToken={iconColorToken}
      rounded={Boolean(rounded)}
      typographyColorToken={typographyColorToken}
      typographyToken={typographyToken}
      onClick={disabled ? undefined : onClick}
    >
      {content}
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
