import { Theme } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React from 'react';

import {
  primaryBodyExtraLargeBoldCSS,
  primaryBodyExtraLargeRegularCSS,
  primaryBodyLargeBoldCSS,
  primaryBodyLargeRegularCSS,
  primaryBodyMediumBoldCSS,
  primaryBodyMediumRegularCSS,
  primaryBodySmallBoldCSS,
  primaryBodySmallRegularCSS,
  primaryBodyXSmallBoldCSS,
  primaryBodyXSmallRegularCSS,
  primaryHeader1BlackCSS,
  primaryHeader1BoldCSS,
  primaryHeader2BlackCSS,
  primaryHeader2BoldCSS,
  primaryHeader3BlackCSS,
  primaryHeader3BoldCSS,
  secondaryBodyLargeBoldCSS,
  secondaryBodyLargeRegularCSS,
  secondaryBodyMediumBoldCSS,
  secondaryBodyMediumRegularCSS,
  secondaryBodySmallBoldCSS,
  secondaryBodySmallRegularCSS,
  secondaryBodyXSmallBoldCSS,
  secondaryBodyXSmallRegularCSS,
} from './Typography.css';
import { TypographyToken } from './typography-tokens';

export const TypographyTokenConfigMap: Record<
  TypographyToken,
  {
    as: React.ElementType;
    css: Interpolation<Theme>;
  }
> = {
  primaryHeader1Black: {
    css: primaryHeader1BlackCSS,
    as: 'h1',
  },
  primaryHeader1Bold: {
    css: primaryHeader1BoldCSS,
    as: 'h1',
  },
  primaryHeader2Black: {
    css: primaryHeader2BlackCSS,
    as: 'h2',
  },
  primaryHeader2Bold: {
    css: primaryHeader2BoldCSS,
    as: 'h2',
  },
  primaryHeader3Black: {
    css: primaryHeader3BlackCSS,
    as: 'h3',
  },
  primaryHeader3Bold: {
    css: primaryHeader3BoldCSS,
    as: 'h3',
  },
  primaryBodyXSmallRegular: {
    css: primaryBodyXSmallRegularCSS,
    as: 'p',
  },
  primaryBodyXSmallBold: {
    css: primaryBodyXSmallBoldCSS,
    as: 'p',
  },
  primaryBodySmallRegular: {
    css: primaryBodySmallRegularCSS,
    as: 'p',
  },
  primaryBodySmallBold: {
    css: primaryBodySmallBoldCSS,
    as: 'p',
  },
  primaryBodyMediumRegular: {
    css: primaryBodyMediumRegularCSS,
    as: 'p',
  },
  primaryBodyMediumBold: {
    css: primaryBodyMediumBoldCSS,
    as: 'p',
  },
  primaryBodyLargeRegular: {
    css: primaryBodyLargeRegularCSS,
    as: 'p',
  },
  primaryBodyLargeBold: {
    css: primaryBodyLargeBoldCSS,
    as: 'p',
  },
  primaryBodyExtraLargeRegular: {
    css: primaryBodyExtraLargeRegularCSS,
    as: 'p',
  },
  primaryBodyExtraLargeBold: {
    css: primaryBodyExtraLargeBoldCSS,
    as: 'p',
  },

  secondaryBodyXSmallRegular: {
    css: secondaryBodyXSmallRegularCSS,
    as: 'p',
  },
  secondaryBodyXSmallBold: {
    css: secondaryBodyXSmallBoldCSS,
    as: 'p',
  },
  secondaryBodySmallRegular: {
    css: secondaryBodySmallRegularCSS,
    as: 'p',
  },
  secondaryBodySmallBold: {
    css: secondaryBodySmallBoldCSS,
    as: 'p',
  },
  secondaryBodyMediumRegular: {
    css: secondaryBodyMediumRegularCSS,
    as: 'p',
  },
  secondaryBodyMediumBold: {
    css: secondaryBodyMediumBoldCSS,
    as: 'p',
  },
  secondaryBodyLargeRegular: {
    css: secondaryBodyLargeRegularCSS,
    as: 'p',
  },
  secondaryBodyLargeBold: {
    css: secondaryBodyLargeBoldCSS,
    as: 'p',
  },
};
