import React, { ComponentProps } from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyTokens } from '../../foundation/Typography';
import { tokenTagMap } from './token-tag-map';
import { BaseTypography, RainbowTypography } from './Typography.styled';

export type TypographyProps = {
  typographyToken: TypographyTokens;
  colorToken: ColorTokens | 'rainbow';
  className?: string;
  'data-testid'?: string;
  id?: string;
  as?: ComponentProps<typeof BaseTypography>['as'];
  children?: React.ReactNode;
};

export const Typography = ({
  className,
  children,
  typographyToken,
  colorToken,
  as: Component = tokenTagMap[typographyToken],
  'data-testid': dataTestId,
  id,
  ...rest
}: TypographyProps) => {
  const isRainbowColorToken = colorToken === 'rainbow';
  const TypographyUI = isRainbowColorToken ? RainbowTypography : BaseTypography;
  const typographyColorToken = isRainbowColorToken ? 'black800' : colorToken;

  return (
    <TypographyUI
      as={Component}
      className={className}
      colorToken={typographyColorToken}
      data-testid={dataTestId || `Typography-${colorToken}-${typographyToken}`}
      id={id}
      typographyToken={typographyToken}
      {...rest}
    >
      {children}
    </TypographyUI>
  );
};
