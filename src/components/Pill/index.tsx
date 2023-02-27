import React from 'react';

import { BaseColorTokens, getColorFromToken } from '../../foundation/Colors';
import { TypographyToken } from '../Typography';
import { PillTypography } from './Pill.styled';

export type PillProps = {
  children: string;
  className?: string;
  colorToken: BaseColorTokens;
  typographyToken: TypographyToken;
};

export const Pill = ({ typographyToken, children, colorToken, className }: PillProps) => (
  <PillTypography
    backgroundColor={getColorFromToken(`${colorToken}6`)}
    className={className}
    colorToken={colorToken}
    data-testid={`Pill-PillTypography-${colorToken}-${typographyToken}`}
    typographyToken={typographyToken}
  >
    {children}
  </PillTypography>
);
