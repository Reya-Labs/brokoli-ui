import React from 'react';

import {
  BaseColorTokens,
  ColorTokens,
  getColorFromToken,
  isBaseColorToken,
} from '../../foundation/Colors';
import { Typography, TypographyToken } from '../Typography';
import { PillBox, PillVariant, RainbowTypography } from './Pill.styled';

export type PillProps = {
  children: string;
  className?: string;
  colorToken: BaseColorTokens | 'rainbow';
  typographyToken: TypographyToken;
  'data-testid'?: string;
  variant: PillVariant;
  onClick?: () => void;
};

export const Pill = ({
  'data-testid': dataTestId,
  typographyToken,
  children,
  colorToken,
  className,
  variant,
  onClick,
}: PillProps) => {
  const isBaseColorTokenProvided = isBaseColorToken(colorToken);
  const backgroundColorToken: ColorTokens = isBaseColorTokenProvided
    ? `${colorToken}6`
    : 'liberty7';
  const TypographyUI = isBaseColorTokenProvided ? Typography : RainbowTypography;
  const typographyColorToken = isBaseColorTokenProvided ? colorToken : 'liberty7';

  return (
    <PillBox
      backgroundColor={getColorFromToken(backgroundColorToken)}
      className={className}
      data-testid="Pill-PillBox"
      variant={variant}
      onClick={onClick}
    >
      <TypographyUI
        colorToken={typographyColorToken}
        data-testid={
          dataTestId || `Pill-PillTypography-${variant}-${colorToken}-${typographyToken}`
        }
        typographyToken={typographyToken}
      >
        {children}
      </TypographyUI>
    </PillBox>
  );
};
