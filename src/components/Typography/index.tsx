import React, { ComponentPropsWithoutRef, ElementType } from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyTokens } from '../../foundation/Typography';
import { tokenTagMap } from './token-tag-map';
import { BaseTypography, RainbowTypography } from './Typography.styled';

type PolymorphicPropsWithoutRef<E extends ElementType> = {
  as?: E;
} & ComponentPropsWithoutRef<E>;

export type TypographyProps<E extends ElementType = ElementType> = PolymorphicPropsWithoutRef<E> & {
  typographyToken: TypographyTokens;
  colorToken: ColorTokens | 'rainbow';
  className?: string;
  'data-testid'?: string;
  id?: string;
};

export const Typography = <E extends ElementType>({
  className,
  children,
  typographyToken,
  colorToken,
  as: Component = tokenTagMap[typographyToken] as E,
  'data-testid': dataTestId,
  id,
  ...rest
}: TypographyProps<E>): React.ReactElement => {
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
