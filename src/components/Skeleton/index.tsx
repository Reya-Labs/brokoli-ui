import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyToken } from '../Typography';
import { SkeletonBox } from './Skeleton.styled';

export const Skeleton: React.FunctionComponent<{
  colorToken: ColorTokens;
  typographyToken?: TypographyToken;
  variant: 'rectangular' | 'circular';
  className?: string;
  'data-testid'?: string;
}> = React.memo(
  ({
    'data-testid': dataTestId,
    typographyToken,
    className,
    variant = 'rectangular',
    colorToken = 'liberty',
  }) => {
    return (
      <SkeletonBox
        className={className}
        colorToken={colorToken}
        data-testid={dataTestId}
        typographyToken={typographyToken}
        variant={variant}
      />
    );
  },
);
