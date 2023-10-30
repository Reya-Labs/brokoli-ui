import { Theme } from '@emotion/react';

import { TypographyToken } from './types';

type GetTypographyStyleFromTokenParams = {
  theme: Theme;
  token?: TypographyToken;
};

export const getTypographyStyleFromToken = ({ theme, token }: GetTypographyStyleFromTokenParams) =>
  theme.typography[token || 'primaryBodyMediumRegular'].styleObject;
