import { useMediaQuery } from 'react-responsive';

import { mediaBreakPoints } from '../constants';
import { SupportedMedias } from '../types';

type UseResponsiveQueryReturn = {
  isSmallDesktopDeviceAndUp: boolean;
  isLargeDesktopDeviceAndUp: boolean;
  isDesktopDeviceAndUp: boolean;
  isTabletDeviceAndUp: boolean;
  isMobileDeviceAndUp: boolean;
  isSmallDesktopDeviceAndDown: boolean;
  isLargeDesktopDeviceAndDown: boolean;
  isDesktopDeviceAndDown: boolean;
  isTabletDeviceAndDown: boolean;
  isMobileDeviceAndDown: boolean;
  isSmallDesktopDeviceOnly: boolean;
  isLargeDesktopDeviceOnly: boolean;
  isDesktopDeviceOnly: boolean;
  isTabletDeviceOnly: boolean;
  isMobileDeviceOnly: boolean;
};

export const mediaQuery: Record<SupportedMedias, string> = {
  desktopDeviceAndDown: `(max-width: ${mediaBreakPoints.desktopDevice - 1}px)`,
  desktopDeviceAndUp: `(min-width: ${mediaBreakPoints.desktopDevice}px)`,
  desktopDeviceOnly: `(min-width: ${mediaBreakPoints.largeDesktopDevice - 1}px)`,

  largeDesktopDeviceAndDown: `(max-width: ${mediaBreakPoints.largeDesktopDevice - 1}px)`,
  largeDesktopDeviceAndUp: `(min-width: ${mediaBreakPoints.largeDesktopDevice}px)`,
  // same as largeDesktopDeviceAndUp as currently largeDesktop is max screen width we support
  largeDesktopDeviceOnly: `(min-width: ${mediaBreakPoints.largeDesktopDevice}px)`,

  mobileDeviceAndDown: `(max-width: ${mediaBreakPoints.mobileDevice - 1}px)`,
  mobileDeviceAndUp: `(min-width: ${mediaBreakPoints.mobileDevice}px)`,
  mobileDeviceOnly: `(min-width: ${mediaBreakPoints.mobileDevice}px) and (max-width: ${
    mediaBreakPoints.tabletDevice - 1
  }px)`,

  smallDesktopDeviceAndDown: `(max-width: ${mediaBreakPoints.smallDesktopDevice - 1}px)`,
  smallDesktopDeviceAndUp: `(min-width: ${mediaBreakPoints.smallDesktopDevice}px)`,
  smallDesktopDeviceOnly: `(min-width: ${mediaBreakPoints.smallDesktopDevice}px) and (max-width: ${
    mediaBreakPoints.desktopDevice - 1
  }px)`,

  tabletDeviceAndDown: `(max-width: ${mediaBreakPoints.tabletDevice - 1}px)`,
  tabletDeviceAndUp: `(min-width: ${mediaBreakPoints.tabletDevice}px)`,
  tabletDeviceOnly: `(min-width: ${mediaBreakPoints.tabletDevice}px) and (max-width: ${
    mediaBreakPoints.smallDesktopDevice - 1
  }px)`,
};

export const useResponsiveQuery = (): UseResponsiveQueryReturn => {
  const isMobileDeviceAndUp = useMediaQuery({
    query: mediaQuery.mobileDeviceAndUp,
  });
  const isTabletDeviceAndUp = useMediaQuery({
    query: mediaQuery.tabletDeviceAndUp,
  });
  const isSmallDesktopDeviceAndUp = useMediaQuery({
    query: mediaQuery.smallDesktopDeviceAndUp,
  });
  const isLargeDesktopDeviceAndUp = useMediaQuery({
    query: mediaQuery.largeDesktopDeviceAndUp,
  });
  const isDesktopDeviceAndUp = useMediaQuery({
    query: mediaQuery.desktopDeviceAndUp,
  });
  const isMobileDeviceAndDown = useMediaQuery({
    query: mediaQuery.mobileDeviceAndDown,
  });
  const isTabletDeviceAndDown = useMediaQuery({
    query: mediaQuery.tabletDeviceAndDown,
  });
  const isSmallDesktopDeviceAndDown = useMediaQuery({
    query: mediaQuery.smallDesktopDeviceAndDown,
  });
  const isLargeDesktopDeviceAndDown = useMediaQuery({
    query: mediaQuery.largeDesktopDeviceAndDown,
  });
  const isDesktopDeviceAndDown = useMediaQuery({
    query: mediaQuery.desktopDeviceAndDown,
  });
  const isMobileDeviceOnly = useMediaQuery({
    query: mediaQuery.mobileDeviceOnly,
  });
  const isTabletDeviceOnly = useMediaQuery({
    query: mediaQuery.tabletDeviceOnly,
  });
  const isSmallDesktopDeviceOnly = useMediaQuery({
    query: mediaQuery.smallDesktopDeviceOnly,
  });
  const isLargeDesktopDeviceOnly = useMediaQuery({
    query: mediaQuery.largeDesktopDeviceOnly,
  });
  const isDesktopDeviceOnly = useMediaQuery({
    query: mediaQuery.desktopDeviceOnly,
  });

  return {
    isDesktopDeviceAndDown,
    isDesktopDeviceAndUp,
    isDesktopDeviceOnly,
    isLargeDesktopDeviceAndDown,
    isLargeDesktopDeviceAndUp,
    isLargeDesktopDeviceOnly,
    isMobileDeviceAndDown,
    isMobileDeviceAndUp,
    isMobileDeviceOnly,
    isSmallDesktopDeviceAndDown,
    isSmallDesktopDeviceAndUp,
    isSmallDesktopDeviceOnly,
    isTabletDeviceAndDown,
    isTabletDeviceAndUp,
    isTabletDeviceOnly,
  };
};
