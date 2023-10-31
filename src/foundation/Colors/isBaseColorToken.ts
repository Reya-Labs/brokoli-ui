import { BaseColorTokens } from './types';

export const isBaseColorToken = (token: string): token is BaseColorTokens =>
  token === 'liberty' ||
  token === 'white100' ||
  token === 'primary100' ||
  token === 'warning100' ||
  token === 'error100' ||
  token === 'secondary100';
