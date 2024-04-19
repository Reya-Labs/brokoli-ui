import { Theme } from '@emotion/react';

import { ColorTokens } from './types';

type GetColorFromTokenParams = {
  colorToken?: ColorTokens;
  theme: Theme;
};

export const getColorFromToken = ({ theme, colorToken }: GetColorFromTokenParams) =>
  theme.colors[colorToken || 'white100'];
