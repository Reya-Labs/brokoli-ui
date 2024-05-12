import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyTokens } from '../../foundation/Typography';
import { tokenTagMap } from './token-tag-map';
import { BaseTypography, RainbowTypography } from './Typography.styled';

export type TypographyProps = React.PropsWithChildren<{
  as?: React.ElementType;
  backgroundColorToken?: ColorTokens;
  className?: string;
  colorToken: ColorTokens | 'rainbow';
  'data-testid'?: string;
  id?: string;
  title?: string;
  typographyToken: TypographyTokens;
}>;

export const Typography: React.FunctionComponent<TypographyProps> = ({
  className,
  children,
  typographyToken,
  colorToken,
  'data-testid': dataTestId,
  backgroundColorToken,
  id,
  as = tokenTagMap[typographyToken],
  title,
}) => {
  const isRainbowColorToken = colorToken === 'rainbow';
  const TypographyUI = isRainbowColorToken ? RainbowTypography : BaseTypography;
  const typographyColorToken = isRainbowColorToken ? 'black800' : colorToken;

  return (
    <TypographyUI
      as={as}
      backgroundColorToken={backgroundColorToken}
      className={className}
      colorToken={typographyColorToken}
      data-testid={dataTestId || `Typography-${colorToken}-${typographyToken}`}
      id={id}
      title={title}
      typographyToken={typographyToken}
    >
      {children}
    </TypographyUI>
  );
};
