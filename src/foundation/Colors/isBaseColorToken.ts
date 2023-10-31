import { BaseColorTokens } from './types';

export const isBaseColorToken = (token: string): token is BaseColorTokens =>
  token === 'liberty' ||
  token === 'white100' ||
  token === 'primary100' ||
  token === 'orangeYellow' ||
  token === 'wildStrawberry' ||
  token === 'secondary100';
