import { SupportedMedias } from '../Media';

export type TypographyToken =
  | 'h1xlbold'
  | 'primaryHeader1Bold'
  | 'primaryHeader2Black'
  | 'primaryHeader2Bold'
  | 'primaryHeader3Black'
  | 'primaryHeader3Bold'
  | 'primaryBodyXSmallRegular'
  | 'primaryBodyXSmallBold'
  | 'primaryBodySmallRegular'
  | 'primaryBodySmallBold'
  | 'primaryBodyMediumRegular'
  | 'primaryBodyMediumBold'
  | 'primaryBodyLargeRegular'
  | 'primaryBodyLargeBold'
  | 'primaryBodyExtraLargeRegular'
  | 'primaryBodyExtraLargeBold'
  | 'secondaryBodyXSmallRegular'
  | 'secondaryBodyXSmallBold'
  | 'secondaryBodySmallRegular'
  | 'secondaryBodySmallBold'
  | 'secondaryBodyMediumRegular'
  | 'secondaryBodyMediumBold'
  | 'secondaryBodyLargeBold'
  | 'secondaryBodyLargeRegular'
  | 'secondaryBodyExtraLargeBold'
  | 'secondaryBodyExtraLargeRegular';

export type TypographyConfig = {
  fontFamily: string;
  fontSize: string;
  fontStyle: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing?: string;
  textShadow?: string;
};

export type TypographyResponsiveConfig = Record<SupportedMedias, TypographyConfig>;

export type TypographyTheme = Record<TypographyToken, TypographyResponsiveConfig>;
