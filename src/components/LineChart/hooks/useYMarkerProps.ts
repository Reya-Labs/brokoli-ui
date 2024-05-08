import { useTheme } from '@emotion/react';
import { CartesianMarkerProps } from '@nivo/core';
import { Property } from 'csstype';
import { useMemo } from 'react';

import { getColorFromToken } from '../../../foundation/Colors';
import { useResponsiveQuery } from '../../../foundation/Media';
import { getTypographyFromToken } from '../../../foundation/Typography';
import { LineChartProps } from '../types';

type UseYMarkerParams = {
  yMarker?: LineChartProps['yMarker'];
};

export const useYMarkerProps = ({ yMarker }: UseYMarkerParams): CartesianMarkerProps | null => {
  const theme = useTheme();
  const { isSmallDesktopDeviceAndUp, isTabletDeviceAndUp, isMobileDeviceAndUp } =
    useResponsiveQuery();

  return useMemo(() => {
    if (!yMarker) {
      return null;
    }

    const {
      typographyToken: yMarkerTypographyToken = 'bodyXSmallMedium',
      text: yMarkerText,
      colorToken: yMarkerColorToken = 'primary100',
      value: yMarkerValue,
    } = yMarker;

    const yMarkerTypographyConfig = getTypographyFromToken({
      theme,
      token: yMarkerTypographyToken,
    });

    const yMarkerTypography = isMobileDeviceAndUp
      ? yMarkerTypographyConfig.mobileDevice
      : isTabletDeviceAndUp
      ? yMarkerTypographyConfig.tabletDevice
      : isSmallDesktopDeviceAndUp
      ? yMarkerTypographyConfig.smallDesktopDevice
      : yMarkerTypographyConfig.desktopDevice;

    return {
      axis: 'y',
      legend: yMarkerText,
      legendPosition: 'top-left',
      lineStyle: {
        stroke: getColorFromToken({ colorToken: yMarkerColorToken, theme }),
        strokeDasharray: 5,
        strokeWidth: 1,
      },
      textStyle: {
        fill: theme.colors.white100,
        fontFamily: yMarkerTypography.fontFamily as Property.FontFamily,
        fontSize: parseInt(yMarkerTypography.fontSize, 10),
        fontWeight: parseInt(yMarkerTypography.fontWeight),
      },
      value: yMarkerValue,
    };
  }, [yMarker, theme, isSmallDesktopDeviceAndUp, isTabletDeviceAndUp, isMobileDeviceAndUp]);
};
