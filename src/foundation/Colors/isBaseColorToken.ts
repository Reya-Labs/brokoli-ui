import { BaseColorTokens } from './types';

export const isBaseColorToken = (token: string): token is BaseColorTokens =>
  token === 'black' ||
  token === 'white' ||
  token === 'primary' ||
  token === 'warning' ||
  token === 'error' ||
  token === 'secondary';
