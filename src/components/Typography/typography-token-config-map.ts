import { CSSObject } from '@emotion/serialize';
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
  secondaryBodyExtraLargeRegularCSSObject,
  secondaryBodyLargeBoldCSSObject,
  secondaryBodyLargeRegularCSSObject,
  secondaryBodyMediumBoldCSSObject,
  secondaryBodyMediumRegularCSSObject,
  secondaryBodySmallBoldCSSObject,
  secondaryBodySmallRegularCSSObject,
  secondaryBodyXSmallBoldCSSObject,
  secondaryBodyXSmallRegularCSSObject,
} from './Typography.css';
import { TypographyToken } from './typography-tokens';

export const TypographyTokenConfigMap: Record<
  TypographyToken,
  {
    as: React.ElementType;
    styleObject: CSSObject;
  }
> = {
  primaryHeader1Black: {
    styleObject: primaryHeader1BlackCSSObject,
    as: 'h1',
  },
  primaryHeader1Bold: {
    styleObject: primaryHeader1BoldCSSObject,
    as: 'h1',
  },
  primaryHeader2Black: {
    styleObject: primaryHeader2BlackCSSObject,
    as: 'h2',
  },
  primaryHeader2Bold: {
    styleObject: primaryHeader2BoldCSSObject,
    as: 'h2',
  },
  primaryHeader3Black: {
    styleObject: primaryHeader3BlackCSSObject,
    as: 'h3',
  },
  primaryHeader3Bold: {
    styleObject: primaryHeader3BoldCSSObject,
    as: 'h3',
  },
  primaryBodyXSmallRegular: {
    styleObject: primaryBodyXSmallRegularCSSObject,
    as: 'p',
  },
  primaryBodyXSmallBold: {
    styleObject: primaryBodyXSmallBoldCSSObject,
    as: 'p',
  },
  primaryBodySmallRegular: {
    styleObject: primaryBodySmallRegularCSSObject,
    as: 'p',
  },
  primaryBodySmallBold: {
    styleObject: primaryBodySmallBoldCSSObject,
    as: 'p',
  },
  primaryBodyMediumRegular: {
    styleObject: primaryBodyMediumRegularCSSObject,
    as: 'p',
  },
  primaryBodyMediumBold: {
    styleObject: primaryBodyMediumBoldCSSObject,
    as: 'p',
  },
  primaryBodyLargeRegular: {
    styleObject: primaryBodyLargeRegularCSSObject,
    as: 'p',
  },
  primaryBodyLargeBold: {
    styleObject: primaryBodyLargeBoldCSSObject,
    as: 'p',
  },
  primaryBodyExtraLargeRegular: {
    styleObject: primaryBodyExtraLargeRegularCSSObject,
    as: 'p',
  },
  primaryBodyExtraLargeBold: {
    styleObject: primaryBodyExtraLargeBoldCSSObject,
    as: 'p',
  },

  secondaryBodyXSmallRegular: {
    styleObject: secondaryBodyXSmallRegularCSSObject,
    as: 'p',
  },
  secondaryBodyXSmallBold: {
    styleObject: secondaryBodyXSmallBoldCSSObject,
    as: 'p',
  },
  secondaryBodySmallRegular: {
    styleObject: secondaryBodySmallRegularCSSObject,
    as: 'p',
  },
  secondaryBodySmallBold: {
    styleObject: secondaryBodySmallBoldCSSObject,
    as: 'p',
  },
  secondaryBodyMediumRegular: {
    styleObject: secondaryBodyMediumRegularCSSObject,
    as: 'p',
  },
  secondaryBodyMediumBold: {
    styleObject: secondaryBodyMediumBoldCSSObject,
    as: 'p',
  },
  secondaryBodyLargeRegular: {
    styleObject: secondaryBodyLargeRegularCSSObject,
    as: 'p',
  },
  secondaryBodyLargeBold: {
    styleObject: secondaryBodyLargeBoldCSSObject,
    as: 'p',
  },
  secondaryBodyExtraLargeRegular: {
    styleObject: secondaryBodyExtraLargeRegularCSSObject,
    as: 'p',
  },
  secondaryBodyExtraLargeBold: {
    styleObject: secondaryBodyLargeBoldCSSObject,
    as: 'p',
  },
};
