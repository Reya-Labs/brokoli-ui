import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyToken } from '../../foundation/Typography';
import { tokenTagMap } from './token-tag-map';
import { BaseTypography, RainbowTypography } from './Typography.styled';

export type TypographyProps = {
  typographyToken: TypographyToken;
  colorToken: ColorTokens | 'rainbow';
  className?: string;
  'data-testid'?: string;
};

export const Typography: React.FunctionComponent<TypographyProps> = ({
  className,
  children,
  typographyToken,
  colorToken,
  'data-testid': dataTestId,
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
      typographyToken={typographyToken}
    >
      {children}
    </TypographyUI>
  );
};
