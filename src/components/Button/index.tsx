import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyTokens } from '../../foundation/Typography';
import { Ellipsis } from '../Ellipsis';
import { Typography } from '../Typography';
import { ButtonBox, ButtonStyled, IconBox } from './Button.styled';

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
  hoverTypographyColorToken?: ColorTokens;
  hoverBackgroundColorToken?: ColorTokens;
  hoverBorderColorToken?: ColorTokens;
  /**
   * `iconLeft` allows you to insert a React Component (preferably an SVG) on the left side of the button content.
   * When an SVG is provided as `iconLeft`, it will inherit hover effects from the button, such as color changes.
   */
  iconLeft?: React.ComponentType;
  /**
   * `iconRight` allows you to insert a React Component (preferably an SVG) on the right side of the button content.
   * When an SVG is provided as `iconRight`, it will inherit hover effects from the button, such as color changes.
   */
  iconRight?: React.ComponentType;
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
  iconLeft: IconLeft,
  iconRight: IconRight,
}) => {
  const childrenToRender = !loading ? children : <Ellipsis />;

  const content = (
    <>
      {IconLeft && !loading && (
        <IconBox color={typographyColorToken} hoverColor={hoverTypographyColorToken}>
          <IconLeft />
        </IconBox>
      )}
      {childrenToRender}
      {IconRight && !loading && (
        <IconBox color={typographyColorToken} hoverColor={hoverTypographyColorToken}>
          <IconRight />
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
      hoverTypographyColorToken={hoverTypographyColorToken || typographyColorToken}
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
