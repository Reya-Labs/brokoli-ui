import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';
import {
  getResponsiveTypographyStyleFromToken,
  TypographyTokens,
} from '../../foundation/Typography';
import { shouldNotForwardProps } from '../../utils/should-not-forward-props';
import { Typography, TypographyProps } from '../Typography';

const differenceTypographyMap: Record<TypographyTokens, TypographyTokens> = {
  bodyExtraLargeBold: 'bodyMediumBold',
  bodyExtraLargeRegular: 'bodyMediumRegular',
  bodyLargeBold: 'bodySmallBold',
  bodyLargeRegular: 'bodySmallRegular',
  bodyMediumBold: 'bodyXSmallBold',
  bodyMediumRegular: 'bodyXSmallRegular',
  bodyMegaLargeBold: 'bodyMegaLargeBold',
  bodySmallBold: 'bodySmallBold',
  bodySmallRegular: 'bodySmallRegular',
  bodyXSmallBold: 'bodyXSmallBold',
  bodyXSmallRegular: 'bodyXSmallRegular',
  bodyXXLRegular: 'bodyXXLRegular',
  ctaBlack: 'bodyXSmallBold',
  ctaLarge: 'ctaLarge',
  ctaRegular: 'ctaRegular',
  h1SmallBold: 'h2Regular',
  h1XLBold: 'h2Bold',
  h1XLBoldSpaced: 'h1XLBoldSpaced',
  h1XLRegular: 'h1XLRegular',
  h1XLRegularSpaced: 'h1XLRegularSpaced',
  h2Bold: 'h3Bold',
  h2Regular: 'h3Regular',
  h3Bold: 'bodyMediumBold',
  h3Regular: 'bodyMediumRegular',
  subheaderRegular: 'subheaderRegular',
};

export const PrefixToken = styled('strong', shouldNotForwardProps(['colorToken']))<{
  colorToken: ColorTokens;
}>`
  font-weight: inherit;
  color: ${({ theme, colorToken }) => getColorFromToken({ colorToken, theme })};
`;

export const Token = styled('strong', shouldNotForwardProps(['colorToken']))<{
  colorToken: ColorTokens;
}>`
  font-weight: inherit;
  color: ${({ theme, colorToken }) => getColorFromToken({ colorToken, theme })};
`;

export const DifferenceArrow = styled(
  'strong',
  shouldNotForwardProps(['colorToken', 'typographyToken']),
)<{
  colorToken: ColorTokens;
  typographyToken: TypographyTokens;
}>`
  margin-left: 8px;
  margin-right: 2px;

  & svg {
    width: 0.8em;
    height: 0.8em;
  }
  & path {
    fill: ${({ theme, colorToken }) => getColorFromToken({ colorToken, theme })};
  }

  ${({ theme, typographyToken }) =>
    css(
      getResponsiveTypographyStyleFromToken({
        theme,
        token: differenceTypographyMap[typographyToken],
      }),
    )};
  color: ${({ theme, colorToken }) => getColorFromToken({ colorToken, theme })};
`;

export const DifferenceValue = styled(
  'strong',
  shouldNotForwardProps(['colorToken', 'typographyToken']),
)<{
  colorToken: ColorTokens;
  typographyToken: TypographyTokens;
}>`
  ${({ theme, typographyToken }) =>
    css(
      getResponsiveTypographyStyleFromToken({
        theme,
        token: differenceTypographyMap[typographyToken],
      }),
    )};
  color: ${({ theme, colorToken }) => getColorFromToken({ colorToken, theme })};
`;

export const DifferenceToken = styled(
  'strong',
  shouldNotForwardProps(['colorToken', 'typographyToken']),
)<{
  colorToken: ColorTokens;
  typographyToken: TypographyTokens;
}>`
  ${({ theme, typographyToken }) =>
    css(
      getResponsiveTypographyStyleFromToken({
        theme,
        token: differenceTypographyMap[typographyToken],
      }),
    )};
  color: ${({ theme, colorToken }) => getColorFromToken({ colorToken, theme })};
`;

export const TokenTypographyStyled = styled(Typography)<TypographyProps>`
  & > .attentionIndicator {
    margin-right: 4px;
    margin-bottom: 2px;
  }
`;
