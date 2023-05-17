import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { BaseTypography } from './Typography.styled';
import { TypographyTokenConfigMap } from './typography-token-config-map';
import { TypographyToken } from './typography-tokens';
export type { TypographyToken };
export type TypographyProps = {
  typographyToken: TypographyToken;
  colorToken: ColorTokens;
  className?: string;
  'data-testid'?: string;
};
export const Typography: React.FunctionComponent<TypographyProps> = ({
  className,
  children,
  typographyToken,
  colorToken,
  'data-testid': dataTestId,
}) => (
  <BaseTypography
    as={TypographyTokenConfigMap[typographyToken].as}
    className={className}
    colorToken={colorToken}
    data-testid={dataTestId || `Typography-${colorToken}-${typographyToken}`}
    typographyToken={typographyToken}
  >
    {children}
  </BaseTypography>
);
