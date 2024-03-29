import { Theme } from '@emotion/react';
import facepaint from 'facepaint';

import { mediaBreakPoints } from '../Media';
import { getTypographyFromToken } from './getTypographyFromToken';
import { TypographyConfig, TypographyTokens } from './types';

type GetTypographyFromTokenParams = {
  theme: Theme;
  token?: TypographyTokens;
};

const breakpoints = [
  mediaBreakPoints.mobileDevice,
  mediaBreakPoints.tabletDevice,
  mediaBreakPoints.smallDesktopDevice,
  mediaBreakPoints.desktopDevice,
  mediaBreakPoints.largeDesktopDevice,
];
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

export const getResponsiveTypographyStyleFromToken = ({
  theme,
  token,
}: GetTypographyFromTokenParams) => {
  const { desktopDevice, largeDesktopDevice, mobileDevice, smallDesktopDevice, tabletDevice } =
    getTypographyFromToken({
      theme,
      token,
    });
  const isDefined = (s: string | undefined) => s;
  const mediaTypography: Record<keyof TypographyConfig, (undefined | string)[]> = {
    fontFamily: [
      mobileDevice.fontFamily,
      tabletDevice.fontFamily,
      smallDesktopDevice.fontFamily,
      desktopDevice.fontFamily,
      largeDesktopDevice.fontFamily,
    ].filter(isDefined),
    fontSize: [
      mobileDevice.fontSize,
      tabletDevice.fontSize,
      smallDesktopDevice.fontSize,
      desktopDevice.fontSize,
      largeDesktopDevice.fontSize,
    ].filter(isDefined),
    fontStyle: [
      mobileDevice.fontStyle,
      tabletDevice.fontStyle,
      smallDesktopDevice.fontStyle,
      desktopDevice.fontStyle,
      largeDesktopDevice.fontStyle,
    ].filter(isDefined),
    fontWeight: [
      mobileDevice.fontWeight,
      tabletDevice.fontWeight,
      smallDesktopDevice.fontWeight,
      desktopDevice.fontWeight,
      largeDesktopDevice.fontWeight,
    ].filter(isDefined),
    letterSpacing: [
      mobileDevice.letterSpacing,
      tabletDevice.letterSpacing,
      smallDesktopDevice.letterSpacing,
      desktopDevice.letterSpacing,
      largeDesktopDevice.letterSpacing,
    ].filter(isDefined),
    lineHeight: [
      mobileDevice.lineHeight,
      tabletDevice.lineHeight,
      smallDesktopDevice.lineHeight,
      desktopDevice.lineHeight,
      largeDesktopDevice.lineHeight,
    ].filter(isDefined),
    textShadow: [
      mobileDevice.textShadow,
      tabletDevice.textShadow,
      smallDesktopDevice.textShadow,
      desktopDevice.textShadow,
      largeDesktopDevice.textShadow,
    ].filter(isDefined),
  };
  return mq(mediaTypography);
};
