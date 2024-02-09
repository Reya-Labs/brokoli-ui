import { SupportedMediasWidths } from '../Media';

export type TypographyTokens =
  | 'h1XLBold'
  | 'h1SmallBold'
  | 'h2Bold'
  | 'h2Regular'
  | 'h3Bold'
  | 'h3Regular'
  | 'bodyXSmallRegular'
  | 'bodyXSmallBold'
  | 'bodySmallRegular'
  | 'bodySmallBold'
  | 'bodyMediumRegular'
  | 'bodyMediumBold'
  | 'bodyLargeRegular'
  | 'bodyLargeBold'
  | 'bodyExtraLargeRegular'
  | 'bodyExtraLargeBold'
  | 'bodyMegaLargeBold'
  | 'ctaBlack'
  | 'ctaRegular';

export type TypographyConfig = {
  fontFamily: string;
  fontSize: string;
  fontStyle: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing?: string;
  textShadow?: string;
};

export type TypographyResponsiveConfig = Record<SupportedMediasWidths, TypographyConfig>;

export type TypographyTheme = Record<TypographyTokens, TypographyResponsiveConfig>;
