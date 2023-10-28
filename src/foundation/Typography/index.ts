import React from 'react';

import {
  primaryBodyExtraLargeBoldCSSObject,
  primaryBodyExtraLargeRegularCSSObject,
  primaryBodyLargeBoldCSSObject,
  primaryBodyLargeRegularCSSObject,
  primaryBodyMediumBoldCSSObject,
  primaryBodyMediumRegularCSSObject,
  primaryBodySmallBoldCSSObject,
  primaryBodySmallRegularCSSObject,
  primaryBodyXSmallBoldCSSObject,
  primaryBodyXSmallRegularCSSObject,
  primaryHeader1BlackCSSObject,
  primaryHeader1BoldCSSObject,
  primaryHeader2BlackCSSObject,
  primaryHeader2BoldCSSObject,
  primaryHeader3BlackCSSObject,
  primaryHeader3BoldCSSObject,
  secondaryBodyExtraLargeBoldCSSObject,
  secondaryBodyExtraLargeRegularCSSObject,
  secondaryBodyLargeBoldCSSObject,
  secondaryBodyLargeRegularCSSObject,
  secondaryBodyMediumBoldCSSObject,
  secondaryBodyMediumRegularCSSObject,
  secondaryBodySmallBoldCSSObject,
  secondaryBodySmallRegularCSSObject,
  secondaryBodyXSmallBoldCSSObject,
  secondaryBodyXSmallRegularCSSObject,
  TypographyConfig,
} from './typographies';
import { TypographyToken } from './typography-tokens';

export type TypographyThemeConfig = {
  as: React.ElementType;
  styleObject: TypographyConfig;
};

export type TypographyTheme = Record<TypographyToken, TypographyThemeConfig>;

export const typography: TypographyTheme = {
  primaryBodyExtraLargeBold: {
    as: 'p',
    styleObject: primaryBodyExtraLargeBoldCSSObject,
  },
  primaryBodyExtraLargeRegular: {
    as: 'p',
    styleObject: primaryBodyExtraLargeRegularCSSObject,
  },
  primaryBodyLargeBold: {
    as: 'p',
    styleObject: primaryBodyLargeBoldCSSObject,
  },
  primaryBodyLargeRegular: {
    as: 'p',
    styleObject: primaryBodyLargeRegularCSSObject,
  },
  primaryBodyMediumBold: {
    as: 'p',
    styleObject: primaryBodyMediumBoldCSSObject,
  },
  primaryBodyMediumRegular: {
    as: 'p',
    styleObject: primaryBodyMediumRegularCSSObject,
  },
  primaryBodySmallBold: {
    as: 'p',
    styleObject: primaryBodySmallBoldCSSObject,
  },
  primaryBodySmallRegular: {
    as: 'p',
    styleObject: primaryBodySmallRegularCSSObject,
  },
  primaryBodyXSmallBold: {
    as: 'p',
    styleObject: primaryBodyXSmallBoldCSSObject,
  },
  primaryBodyXSmallRegular: {
    as: 'p',
    styleObject: primaryBodyXSmallRegularCSSObject,
  },
  primaryHeader1Black: {
    as: 'h1',
    styleObject: primaryHeader1BlackCSSObject,
  },
  primaryHeader1Bold: {
    as: 'h1',
    styleObject: primaryHeader1BoldCSSObject,
  },
  primaryHeader2Black: {
    as: 'h2',
    styleObject: primaryHeader2BlackCSSObject,
  },
  primaryHeader2Bold: {
    as: 'h2',
    styleObject: primaryHeader2BoldCSSObject,
  },
  primaryHeader3Black: {
    as: 'h3',
    styleObject: primaryHeader3BlackCSSObject,
  },
  primaryHeader3Bold: {
    as: 'h3',
    styleObject: primaryHeader3BoldCSSObject,
  },

  secondaryBodyExtraLargeBold: {
    as: 'p',
    styleObject: secondaryBodyExtraLargeBoldCSSObject,
  },
  secondaryBodyExtraLargeRegular: {
    as: 'p',
    styleObject: secondaryBodyExtraLargeRegularCSSObject,
  },
  secondaryBodyLargeBold: {
    as: 'p',
    styleObject: secondaryBodyLargeBoldCSSObject,
  },
  secondaryBodyLargeRegular: {
    as: 'p',
    styleObject: secondaryBodyLargeRegularCSSObject,
  },
  secondaryBodyMediumBold: {
    as: 'p',
    styleObject: secondaryBodyMediumBoldCSSObject,
  },
  secondaryBodyMediumRegular: {
    as: 'p',
    styleObject: secondaryBodyMediumRegularCSSObject,
  },
  secondaryBodySmallBold: {
    as: 'p',
    styleObject: secondaryBodySmallBoldCSSObject,
  },
  secondaryBodySmallRegular: {
    as: 'p',
    styleObject: secondaryBodySmallRegularCSSObject,
  },
  secondaryBodyXSmallBold: {
    as: 'p',
    styleObject: secondaryBodyXSmallBoldCSSObject,
  },
  secondaryBodyXSmallRegular: {
    as: 'p',
    styleObject: secondaryBodyXSmallRegularCSSObject,
  },
};
