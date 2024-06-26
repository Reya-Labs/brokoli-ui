import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyTokens } from '../../foundation/Typography';
import { SkeletonBox } from './Skeleton.styled';

export const Skeleton: React.FunctionComponent<{
  className?: string;
  colorToken: ColorTokens;
  'data-testid'?: string;
  typographyToken?: TypographyTokens;
  variant: 'rectangular' | 'circular';
}> = React.memo(
  ({
    'data-testid': dataTestId,
    typographyToken,
    className,
    variant = 'rectangular',
    colorToken = 'black100',
  }) => (
    <SkeletonBox
      className={className}
      colorToken={colorToken}
      data-testid={
        dataTestId ||
        `Skeleton-SkeletonBox-${variant}${typographyToken ? `-${typographyToken}` : ''}`
      }
      typographyToken={typographyToken}
      variant={variant}
    />
  ),
);
