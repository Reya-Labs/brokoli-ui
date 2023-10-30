import { Theme } from '@emotion/react';
import facepaint from 'facepaint';

import { mediaBreakPoints } from '../Media/constants';
import { getTypographyFromToken } from './getTypographyFromToken';
import { TypographyConfig, TypographyToken } from './types';

type GetTypographyFromTokenParams = {
  theme: Theme;
  token?: TypographyToken;
};

const breakpoints = [
  mediaBreakPoints.mobileDevice,
  mediaBreakPoints.tabletDevice,
  mediaBreakPoints.smallDesktopDevice,
  mediaBreakPoints.largeDesktopDevice,
];
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

export const getResponsiveTypographyStyleFromToken = ({
  theme,
  token,
}: GetTypographyFromTokenParams) => {
  const { largeDesktopDevice, mobileDevice, smallDesktopDevice, tabletDevice } =
    getTypographyFromToken({
      theme,
      token,
    });
  const mediaTypography: Record<keyof TypographyConfig, (undefined | string)[]> = {
    fontFamily: [
      mobileDevice.fontFamily,
      tabletDevice.fontFamily,
      smallDesktopDevice.fontFamily,
      largeDesktopDevice.fontFamily,
    ].filter((s) => s),
    fontSize: [
      mobileDevice.fontSize,
      tabletDevice.fontSize,
      smallDesktopDevice.fontSize,
      largeDesktopDevice.fontSize,
    ].filter((s) => s),
    fontStyle: [
      mobileDevice.fontStyle,
      tabletDevice.fontStyle,
      smallDesktopDevice.fontStyle,
      largeDesktopDevice.fontStyle,
    ].filter((s) => s),
    fontWeight: [
      mobileDevice.fontWeight,
      tabletDevice.fontWeight,
      smallDesktopDevice.fontWeight,
      largeDesktopDevice.fontWeight,
    ].filter((s) => s),
    letterSpacing: [
      mobileDevice.letterSpacing,
      tabletDevice.letterSpacing,
      smallDesktopDevice.letterSpacing,
      largeDesktopDevice.letterSpacing,
    ].filter((s) => s),
    lineHeight: [
      mobileDevice.lineHeight,
      tabletDevice.lineHeight,
      smallDesktopDevice.lineHeight,
      largeDesktopDevice.lineHeight,
    ].filter((s) => s),
    textShadow: [
      mobileDevice.textShadow,
      tabletDevice.textShadow,
      smallDesktopDevice.textShadow,
      largeDesktopDevice.textShadow,
    ].filter((s) => s),
  };
  return mq(mediaTypography);
};
