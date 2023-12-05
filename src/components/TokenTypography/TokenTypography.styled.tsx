import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { BaseColorTokens, getColorFromToken } from '../../foundation/Colors';
import {
  getResponsiveTypographyStyleFromToken,
  TypographyToken,
} from '../../foundation/Typography';
import { Typography, TypographyProps } from '../Typography';

const differenceTypographyMap: Record<TypographyToken, TypographyToken> = {
  h1smallBold: 'primaryHeader2Bold',
  h1xlbold: 'primaryHeader2Black',
  primaryBodyExtraLargeBold: 'primaryBodyMediumBold',
  primaryBodyExtraLargeRegular: 'primaryBodyMediumRegular',
  primaryBodyLargeBold: 'primaryBodySmallBold',
  primaryBodyLargeRegular: 'primaryBodySmallRegular',
  primaryBodyMediumBold: 'primaryBodyXSmallBold',
  primaryBodyMediumRegular: 'primaryBodyXSmallRegular',
  primaryBodySmallBold: 'primaryBodySmallBold',
  primaryBodySmallRegular: 'primaryBodySmallRegular',
  primaryBodyXSmallBold: 'primaryBodyXSmallBold',
  primaryBodyXSmallRegular: 'primaryBodyXSmallRegular',
  primaryHeader2Black: 'primaryHeader3Black',
  primaryHeader2Bold: 'primaryHeader3Bold',
  primaryHeader3Black: 'primaryBodyMediumBold',
  primaryHeader3Bold: 'primaryBodyMediumRegular',
  secondaryBodyExtraLargeBold: 'secondaryBodyMediumBold',
  secondaryBodyExtraLargeRegular: 'secondaryBodyMediumRegular',
  secondaryBodyLargeBold: 'secondaryBodySmallBold',
  secondaryBodyLargeRegular: 'secondaryBodySmallRegular',
  secondaryBodyMediumBold: 'secondaryBodyXSmallBold',
  secondaryBodyMediumRegular: 'secondaryBodyXSmallRegular',
  secondaryBodySmallBold: 'secondaryBodySmallBold',
  secondaryBodySmallRegular: 'secondaryBodySmallRegular',
  secondaryBodyXSmallBold: 'secondaryBodyXSmallBold',
  secondaryBodyXSmallRegular: 'secondaryBodyXSmallRegular',
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
