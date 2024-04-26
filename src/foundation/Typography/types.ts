import { SupportedMediasWidths } from '../Media';

export type TypographyTokens =
  | 'h1XLBold'
  | 'h1XLBoldSpaced'
  | 'h1SmallBold'
  | 'h1XLRegular'
  | 'h1XLRegularSpaced'
  | 'h2Bold'
  | 'h2Regular'
  | 'h3Bold'
  | 'h3Regular'
  | 'subheaderRegular'
  | 'bodyXSmallRegular'
  | 'bodyXSmallBold'
  | 'bodySmallMedium'
  | 'bodySmallBold'
  | 'bodyMediumMedium'
  | 'bodyMediumBold'
  | 'bodyLargeRegular'
  | 'bodyLargeBold'
  | 'bodyExtraLargeRegular'
  | 'bodyExtraLargeBold'
  | 'bodyMegaLargeBold'
  | 'bodyXXLLarge'
  | 'bodyXXLRegular'
  | 'ctaBlack'
  | 'ctaRegular'
  | 'ctaLarge';

export type TypographyConfig = {
  fontFamily: string;
  fontSize: string;
  fontStyle: string;
  fontWeight: string;
  letterSpacing?: string;
  lineHeight: string;
  textShadow?: string;
};

export type TypographyResponsiveConfig = Record<SupportedMediasWidths, TypographyConfig>;

export type TypographyTheme = Record<TypographyTokens, TypographyResponsiveConfig>;
