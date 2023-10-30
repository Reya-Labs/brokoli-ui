import { useMediaQuery } from 'react-responsive';

import { mediaBreakPoints } from '../constants';

type UseResponsiveQueryReturn = {
  isSmallDesktopDevice: boolean;
  isLargeDesktopDevice: boolean;
  isTabletDevice: boolean;
  isMobileDevice: boolean;
};

export const mediaQuery = {
  largeDesktopDevice: `(min-width: ${mediaBreakPoints.largeDesktopDevice}px)`,
  mobileDevice: `(min-width: ${mediaBreakPoints.mobileDevice}px)`,
  smallDesktopDevice: `(min-width: ${mediaBreakPoints.smallDesktopDevice}px)`,
  tabletDevice: `(min-width: ${mediaBreakPoints.tabletDevice}px)`,
};

export const useResponsiveQuery = (): UseResponsiveQueryReturn => {
  const isMobileDevice = useMediaQuery({
    query: mediaQuery.mobileDevice,
  });

  const isTabletDevice = useMediaQuery({
    query: mediaQuery.tabletDevice,
  });

  const isSmallDesktopDevice = useMediaQuery({
    query: mediaQuery.smallDesktopDevice,
  });

  const isLargeDesktopDevice = useMediaQuery({
    query: mediaQuery.largeDesktopDevice,
  });

  return {
    isLargeDesktopDevice,
    isMobileDevice,
    isSmallDesktopDevice,
    isTabletDevice,
  };
};
