import { colors, ColorTokens } from './colors';

export const getColorFromToken = (colorToken?: ColorTokens) => {
  return colors[colorToken || 'lavenderWeb'];
};
