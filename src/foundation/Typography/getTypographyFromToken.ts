import { Theme } from '@emotion/react';

import { TypographyResponsiveConfig, TypographyToken } from './types';

type GetTypographyFromTokenParams = {
  theme: Theme;
  token?: TypographyToken;
};

export const getTypographyFromToken = ({
  theme,
  token,
}: GetTypographyFromTokenParams): TypographyResponsiveConfig => {
  let typography = theme.typography[token || 'bodyMediumRegular'];
  if (!typography) {
    typography = theme.typography.bodyMediumRegular;
  }
  return typography;
};
