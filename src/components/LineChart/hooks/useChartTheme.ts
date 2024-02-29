import { useTheme } from '@emotion/react';
import { useMemo } from 'react';

import { getColorFromToken } from '../../../foundation/Colors';
import { useResponsiveQuery } from '../../../foundation/Media';
import { getTypographyFromToken } from '../../../foundation/Typography';
import { LineChartProps } from '../types';

export const useChartTheme = ({
  crosshairColorToken = 'primary500',
  axisTicksTextColorToken = 'white400',
  axisDomainLineColorToken = 'white900',
  axisTypographyToken = 'bodyXSmallRegular',
}: Pick<
  LineChartProps,
  | 'axisTypographyToken'
  | 'crosshairColorToken'
  | 'axisDomainLineColorToken'
  | 'axisTicksTextColorToken'
>) => {
  const theme = useTheme();
  const { isSmallDesktopDeviceAndUp, isTabletDeviceAndUp, isMobileDeviceAndUp } =
    useResponsiveQuery();

  return useMemo(() => {
    const axisTypographyConfig = getTypographyFromToken({
      theme,
      token: axisTypographyToken,
    });
    const axisTypography = isMobileDeviceAndUp
      ? axisTypographyConfig.mobileDevice
      : isTabletDeviceAndUp
      ? axisTypographyConfig.tabletDevice
      : isSmallDesktopDeviceAndUp
      ? axisTypographyConfig.smallDesktopDevice
      : axisTypographyConfig.largeDesktopDevice;
    const axisFontSize = parseInt(axisTypography.fontSize, 10);
    const axisFontFamily = axisTypography.fontFamily;
    const crossHairColor = getColorFromToken({ colorToken: crosshairColorToken, theme });
    const axisTicksTextColor = getColorFromToken({ colorToken: axisTicksTextColorToken, theme });
    const axisDomainLineColor =
      axisDomainLineColorToken === 'transparent'
        ? 'transparent'
        : getColorFromToken({ colorToken: axisDomainLineColorToken, theme });

    return {
      axis: {
        domain: {
          line: {
            stroke: axisDomainLineColor,
            strokeWidth: 1,
          },
        },
        ticks: {
          line: {
            stroke: theme.colors.white400,
            strokeWidth: 1,
          },
          text: {
            fill: axisTicksTextColor,
            fontFamily: axisFontFamily,
            fontSize: axisFontSize,
            fontWeight: parseInt(axisTypography.fontWeight),
          },
        },
      },
      background: 'transparent',
      crosshair: {
        line: {
          stroke: crossHairColor,
          strokeWidth: 1,
        },
      },
      text: {
        color: theme.colors.white400,
        fontFamily: axisFontFamily,
        fontSize: axisFontSize,
      },
    };
  }, [
    theme,
    crosshairColorToken,
    axisTicksTextColorToken,
    axisDomainLineColorToken,
    axisTypographyToken,
    isSmallDesktopDeviceAndUp,
    isTabletDeviceAndUp,
    isMobileDeviceAndUp,
  ]);
};
