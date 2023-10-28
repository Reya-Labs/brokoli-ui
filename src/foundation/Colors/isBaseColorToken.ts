import { BaseColorTokens } from './types';

export const isBaseColorToken = (token: string): token is BaseColorTokens =>
  token === 'liberty' ||
  token === 'lavenderWeb' ||
  token === 'skyBlueCrayola' ||
  token === 'orangeYellow' ||
  token === 'wildStrawberry' ||
  token === 'ultramarineBlue';
