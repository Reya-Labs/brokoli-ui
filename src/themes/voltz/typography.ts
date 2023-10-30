import { addAlpha } from '../../foundation/Colors';
import { TypographyConfig, TypographyTheme } from '../../foundation/Typography';
import { colors } from './colors';

const primaryHeader1Black: TypographyConfig = {
  fontFamily: "'Inter', sans-serif",
  fontSize: '32px',
  fontStyle: 'normal',
  fontWeight: '900',
  lineHeight: '120%',
  textShadow: `0px 0px 20px ${addAlpha(colors.lavenderWeb, 0.3)}`,
};

const primaryHeader1Bold: TypographyConfig = {
  fontFamily: "'Inter', sans-serif",
  fontSize: '32px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '120%',
  textShadow: `0px 0px 20px ${addAlpha(colors.lavenderWeb, 0.3)}`,
};

const primaryHeader2Black: TypographyConfig = {
  fontFamily: "'Inter', sans-serif",
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: '900',
  lineHeight: '120%',
  textShadow: `0px 0px 20px ${addAlpha(colors.lavenderWeb, 0.3)}`,
};

const primaryHeader2Bold: TypographyConfig = {
  fontFamily: "'Inter', sans-serif",
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '120%',
  textShadow: `0px 0px 20px ${addAlpha(colors.lavenderWeb, 0.3)}`,
};

const primaryHeader3Black: TypographyConfig = {
  fontFamily: "'Inter', sans-serif",
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '900',
  lineHeight: '120%',
  textShadow: `0px 0px 20px ${addAlpha(colors.lavenderWeb, 0.3)}`,
};

const primaryHeader3Bold: TypographyConfig = {
  fontFamily: "'Inter', sans-serif",
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '120%',
  textShadow: `0px 0px 20px ${addAlpha(colors.lavenderWeb, 0.3)}`,
};

const primaryBodyXSmallRegular: TypographyConfig = {
  fontFamily: "'Inter', sans-serif",
  fontSize: '10px',
  fontStyle: 'normal',
  fontWeight: '400',
  letterSpacing: '0.02em',
  lineHeight: '140%',
};

const primaryBodyXSmallBold: TypographyConfig = {
  fontFamily: "'Inter', sans-serif",
  fontSize: '10px',
  fontStyle: 'normal',
  fontWeight: '700',
  letterSpacing: '0.02em',
  lineHeight: '140%',
};

const primaryBodySmallRegular: TypographyConfig = {
  fontFamily: "'Inter', sans-serif",
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '150%',
};

const primaryBodySmallBold: TypographyConfig = {
  fontFamily: "'Inter', sans-serif",
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '150%',
};

const primaryBodyMediumRegular: TypographyConfig = {
  fontFamily: "'Inter', sans-serif",
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '150%',
};

const primaryBodyMediumBold: TypographyConfig = {
  fontFamily: "'Inter', sans-serif",
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '150%',
};

const primaryBodyLargeRegular: TypographyConfig = {
  fontFamily: "'Inter', sans-serif",
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '150%',
};

const primaryBodyLargeBold: TypographyConfig = {
  fontFamily: "'Inter', sans-serif",
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '150%',
};

const primaryBodyExtraLargeRegular: TypographyConfig = {
  fontFamily: "'Inter', sans-serif",
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '150%',
};

const primaryBodyExtraLargeBold: TypographyConfig = {
  fontFamily: "'Inter', sans-serif",
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '150%',
};

const secondaryBodyExtraLargeBold: TypographyConfig = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '150%',
};

const secondaryBodyExtraLargeRegular: TypographyConfig = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '150%',
};

const secondaryBodyLargeBold: TypographyConfig = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '150%',
};

const secondaryBodyLargeRegular: TypographyConfig = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '150%',
};

const secondaryBodyMediumBold: TypographyConfig = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '150%',
};

const secondaryBodyMediumRegular: TypographyConfig = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '150%',
};

const secondaryBodySmallBold: TypographyConfig = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '150%',
};

const secondaryBodySmallRegular: TypographyConfig = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '150%',
};

const secondaryBodyXSmallBold: TypographyConfig = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: '10px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '140%',
};

const secondaryBodyXSmallRegular: TypographyConfig = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: '10px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '140%',
};

export const typography: TypographyTheme = {
  primaryBodyExtraLargeBold,
  primaryBodyExtraLargeRegular,
  primaryBodyLargeBold,
  primaryBodyLargeRegular,
  primaryBodyMediumBold,
  primaryBodyMediumRegular,
  primaryBodySmallBold,
  primaryBodySmallRegular,
  primaryBodyXSmallBold,
  primaryBodyXSmallRegular,
  primaryHeader1Black,
  primaryHeader1Bold,
  primaryHeader2Black,
  primaryHeader2Bold,
  primaryHeader3Black,
  primaryHeader3Bold,
  secondaryBodyExtraLargeBold,
  secondaryBodyExtraLargeRegular,
  secondaryBodyLargeBold,
  secondaryBodyLargeRegular,
  secondaryBodyMediumBold,
  secondaryBodyMediumRegular,
  secondaryBodySmallBold,
  secondaryBodySmallRegular,
  secondaryBodyXSmallBold,
  secondaryBodyXSmallRegular,
};
