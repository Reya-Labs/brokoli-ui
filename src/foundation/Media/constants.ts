import { SupportedMediasWidths } from './types';

export const mediaBreakPoints: Record<SupportedMediasWidths, number> = {
  mobileDevice: 550,
  tabletDevice: 768,
  // eslint-disable-next-line sort-keys-fix/sort-keys-fix
  smallDesktopDevice: 1100,
  // eslint-disable-next-line sort-keys-fix/sort-keys-fix
  desktopDevice: 1500,
  largeDesktopDevice: 9999,
};
