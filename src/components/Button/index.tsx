import React from 'react';

import { Ellipsis } from '../Ellipsis';
import { Typography } from '../Typography';
import { ButtonBox, ButtonStyled, IconBox } from './Button.styled';
import { ButtonProps } from './types';

export { ButtonProps } from './types';

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
  bottomLeftTextTypographyToken = 'bodyXSmallMedium',
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
      data-testid={dataTestId || `Button-${typographyToken}`}
      disabled={disabled}
      hoverBackgroundColorToken={hoverBackgroundColorToken || backgroundColorToken}
      hoverBorderColorToken={hoverBorderColorToken}
      hoverIconColorToken={hoverIconColorToken}
      hoverTypographyColorToken={hoverTypographyColorToken || typographyColorToken}
      iconColorToken={iconColorToken}
      rounded={Boolean(rounded)}
      typographyColorToken={typographyColorToken}
      typographyToken={typographyToken}
      onClick={disabled || loading ? undefined : onClick}
    >
      {content}
    </ButtonStyled>
  );
  if (!bottomLeftText) {
    return button;
  }
  return (
    <ButtonBox data-testid="Button-ButtonBox">
      {button}
      <Typography
        colorToken={bottomLeftTextColorToken}
        data-testid="Button-BottomLeftText"
        typographyToken={bottomLeftTextTypographyToken}
      >
        {bottomLeftText}
      </Typography>
    </ButtonBox>
  );
};
