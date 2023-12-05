import { SupportedMedias } from '../Media';

export type TypographyToken =
  | 'h1xlbold'
  | 'h1smallBold'
  | 'h2Bold'
  | 'h2Regular'
  | 'h3Bold'
  | 'h3Regular'
  | 'bodyXsmallRegular'
  | 'bodyXsmallBold'
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
