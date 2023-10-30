import { Theme } from '@emotion/react';

import { TypographyToken } from './types';

type GetTypographyStyleFromToken = {
  theme: Theme;
  token?: TypographyToken;
};

export const getTypographyFromToken = ({ theme, token }: GetTypographyStyleFromToken) =>
  theme.typography[token || 'primaryBodyMediumRegular'];
