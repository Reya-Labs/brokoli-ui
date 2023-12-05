import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { BaseColorTokens, getColorFromToken } from '../../foundation/Colors';
import {
  getResponsiveTypographyStyleFromToken,
  TypographyToken,
} from '../../foundation/Typography';
import { Typography, TypographyProps } from '../Typography';

const differenceTypographyMap: Record<TypographyToken, TypographyToken> = {
  bodyExtraLargeBold: 'bodyMediumBold',
  bodyExtraLargeRegular: 'bodyMediumRegular',
  bodyLargeBold: 'bodySmallBold',
  bodyLargeRegular: 'bodySmallRegular',
  bodyMediumBold: 'bodyXSmallBold',
  bodyMediumRegular: 'bodyXSmallRegular',
  bodySmallBold: 'bodySmallBold',
  bodySmallRegular: 'bodySmallRegular',
  bodyXSmallBold: 'bodyXSmallBold',
  bodyXSmallRegular: 'bodyXSmallRegular',
  h1SmallBold: 'h2Regular',
  h1XLBold: 'h2Bold',
  h2Bold: 'h3Bold',
  h2Regular: 'h3Regular',
  h3Bold: 'bodyMediumBold',
  h3Regular: 'bodyMediumRegular',
};

export const TokenTypographyStyled = styled(Typography)<TypographyProps>`
  & > .attentionIndicator {
    margin-right: 4px;
    margin-bottom: 2px;
  }

  & > .token {
    font-weight: inherit;
    color: ${({ theme, colorToken }) =>
      getColorFromToken({ colorToken: `${colorToken as BaseColorTokens}400`, theme })};
  }

  & > .difference-value {
    ${({ theme, typographyToken }) =>
      css(
        getResponsiveTypographyStyleFromToken({
          theme,
          token: differenceTypographyMap[typographyToken],
        }),
      )};
    color: ${({ theme, colorToken }) =>
      getColorFromToken({ colorToken: `${colorToken as BaseColorTokens}400`, theme })};
  }

  & > .difference-arrow {
    margin-left: 8px;
    margin-right: 2px;

    & svg {
      width: 0.8em;
      height: 0.8em;
    }
  }

  & > .difference-arrow,
  & > .difference-token {
    ${({ theme, typographyToken }) =>
      css(
        getResponsiveTypographyStyleFromToken({
          theme,
          token: differenceTypographyMap[typographyToken],
        }),
      )};
    color: ${({ theme, colorToken }) =>
      getColorFromToken({ colorToken: `${colorToken as BaseColorTokens}400`, theme })};
  }
`;
