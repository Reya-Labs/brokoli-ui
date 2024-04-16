import { Theme } from '@emotion/react';

import { TypographyResponsiveConfig, TypographyTokens } from './types';

type GetTypographyFromTokenParams = {
  theme: Theme;
  token?: TypographyTokens;
};

export const getTypographyFromToken = ({
  theme,
  token,
}: GetTypographyFromTokenParams): TypographyResponsiveConfig => {
  let typography = theme.typography[token || 'bodyMediumMedium'];
  if (!typography) {
    typography = theme.typography.bodyMediumMedium;
  }
  return typography;
};
