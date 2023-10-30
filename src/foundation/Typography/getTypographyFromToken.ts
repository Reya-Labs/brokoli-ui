import { Theme } from '@emotion/react';

import { TypographyToken } from './types';

type GetTypographyFromTokenParams = {
  theme: Theme;
  token?: TypographyToken;
};

export const getTypographyFromToken = ({ theme, token }: GetTypographyFromTokenParams) =>
  theme.typography[token || 'primaryBodyMediumRegular'];
