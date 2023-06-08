import React from 'react';

import { ColorTokens, isBaseColorToken } from '../../foundation/Colors';
import { BaseTypography, RainbowTypography } from './Typography.styled';
import { TypographyTokenConfigMap } from './typography-token-config-map';
import { TypographyToken } from './typography-tokens';
export type { TypographyToken };
export * from './Typography.css';
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
  const isBaseColorTokenProvided = isBaseColorToken(colorToken);
  const TypographyUI = isBaseColorTokenProvided ? BaseTypography : RainbowTypography;
  const typographyColorToken = isBaseColorTokenProvided ? colorToken : 'liberty7';

  return (
    <TypographyUI
      as={TypographyTokenConfigMap[typographyToken].as}
      className={className}
      colorToken={typographyColorToken}
      data-testid={dataTestId || `Typography-${colorToken}-${typographyToken}`}
      typographyToken={typographyToken}
    >
      {children}
    </TypographyUI>
  );
};
