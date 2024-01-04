import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyTokens } from '../../foundation/Typography';
import { tokenTagMap } from './token-tag-map';
import { BaseTypography, RainbowTypography } from './Typography.styled';

export type TypographyProps = React.PropsWithChildren<{
  typographyToken: TypographyTokens;
  colorToken: ColorTokens | 'rainbow';
  className?: string;
  'data-testid'?: string;
  id?: string;
}>;

export const Typography: React.FunctionComponent<TypographyProps> = ({
  className,
  children,
  typographyToken,
  colorToken,
  'data-testid': dataTestId,
  id,
}) => {
  const isRainbowColorToken = colorToken === 'rainbow';
  const TypographyUI = isRainbowColorToken ? RainbowTypography : BaseTypography;
  const typographyColorToken = isRainbowColorToken ? 'black800' : colorToken;

  return (
    <TypographyUI
      as={tokenTagMap[typographyToken]}
      className={className}
      colorToken={typographyColorToken}
      data-testid={dataTestId || `Typography-${colorToken}-${typographyToken}`}
      id={id}
      typographyToken={typographyToken}
    >
      {children}
    </TypographyUI>
  );
};
