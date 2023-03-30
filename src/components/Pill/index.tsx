import React from 'react';

import { BaseColorTokens, getColorFromToken } from '../../foundation/Colors';
import { isBaseColorToken } from '../../foundation/Colors/isBaseColorToken';
import { TypographyToken } from '../Typography';
import { PillTypography, RainbowBox, RainbowTypography } from './Pill.styled';

export type PillProps = {
  children: string;
  className?: string;
  colorToken: BaseColorTokens | 'rainbow';
  typographyToken: TypographyToken;
  'data-testid'?: string;
};

export const Pill = ({
  'data-testid': dataTestId,
  typographyToken,
  children,
  colorToken,
  className,
}: PillProps) => {
  const baseColorToken = isBaseColorToken(colorToken);
  if (baseColorToken) {
    return (
      <PillTypography
        backgroundColor={getColorFromToken(`${colorToken}6`)}
        className={className}
        colorToken={colorToken}
        data-testid={dataTestId || `Pill-PillTypography-${colorToken}-${typographyToken}`}
        typographyToken={typographyToken}
      >
        {children}
      </PillTypography>
    );
  }

  return (
    <RainbowBox backgroundColor={getColorFromToken('liberty7')}>
      <RainbowTypography
        className={className}
        colorToken="liberty7"
        data-testid={dataTestId || `Pill-PillTypography-${colorToken}-${typographyToken}`}
        typographyToken={typographyToken}
      >
        {children}
      </RainbowTypography>
    </RainbowBox>
  );
};
