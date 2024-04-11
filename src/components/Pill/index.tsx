import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyTokens } from '../../foundation/Typography';
import { Typography } from '../Typography';
import { PillBox, PillVariant } from './Pill.styled';

export type PillProps = {
  children: string;
  className?: string;
  colorToken: ColorTokens | 'rainbow';
  backgroundColorToken: ColorTokens;
  typographyToken: TypographyTokens;
  'data-testid'?: string;
  variant: PillVariant;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export const Pill = ({
  'data-testid': dataTestId,
  typographyToken,
  children,
  className,
  variant,
  onClick,
  colorToken,
  backgroundColorToken,
}: PillProps) => {
  return (
    <PillBox
      backgroundColorToken={backgroundColorToken}
      className={className}
      data-testid="Pill-PillBox"
      variant={variant}
      onClick={onClick}
    >
      <Typography
        colorToken={colorToken}
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
