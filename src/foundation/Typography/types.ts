import { SupportedMedias } from '../Media';

export type TypographyToken =
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
  | 'bodyExtraLargeBold';

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
