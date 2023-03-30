import { BaseColorTokens } from './colors';

export const isBaseColorToken = (token: string): token is BaseColorTokens =>
  token === 'liberty' ||
  token === 'lavenderWeb' ||
  token === 'skyBlueCrayola' ||
  token === 'orangeYellow' ||
  token === 'wildStrawberry' ||
  token === 'ultramarineBlue';
