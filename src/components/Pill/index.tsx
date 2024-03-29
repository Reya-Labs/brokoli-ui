import React from 'react';

import { BaseColorTokens, ColorTokens, isBaseColorToken } from '../../foundation/Colors';
import { TypographyTokens } from '../../foundation/Typography';
import { Typography } from '../Typography';
import { PillBox, PillVariant } from './Pill.styled';

export type PillProps = {
  children: string;
  className?: string;
  colorToken: BaseColorTokens | 'rainbow';
  typographyToken: TypographyTokens;
  'data-testid'?: string;
  variant: PillVariant;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
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
    ? `${colorToken}700`
    : 'black800';

  return (
    <PillBox
      backgroundColorToken={backgroundColorToken}
      className={className}
      data-testid="Pill-PillBox"
      variant={variant}
      onClick={onClick}
    >
      <Typography
        colorToken={isBaseColorTokenProvided ? `${colorToken}100` : 'rainbow'}
        data-testid={
          dataTestId || `Pill-PillTypography-${variant}-${colorToken}-${typographyToken}`
        }
        typographyToken={typographyToken}
      >
        {children}
      </Typography>
    </PillBox>
  );
};
