import { Theme } from '@emotion/react';

import { ColorTokens } from './types';

type GetColorFromTokenParams = {
  theme: Theme;
  colorToken?: ColorTokens;
};

export const getColorFromToken = ({ theme, colorToken }: GetColorFromTokenParams) =>
  theme.colors[colorToken || 'lavenderWeb'];
