import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { BaseColorTokens, getColorFromToken } from '../../foundation/Colors';
import { Typography, TypographyProps, TypographyToken } from '../Typography';
import { TypographyTokenConfigMap } from '../Typography/typography-token-config-map';

const differenceTypographyMap: Record<TypographyToken, TypographyToken> = {
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
  primaryHeader1Black: 'primaryHeader2Black',
  primaryHeader1Bold: 'primaryHeader2Bold',
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
  & > .token {
    font-weight: inherit;
    color: ${({ colorToken }) => getColorFromToken(`${colorToken as BaseColorTokens}3`)};
  }

  & > .difference-value {
    ${({ typographyToken }) =>
      css(TypographyTokenConfigMap[differenceTypographyMap[typographyToken]].styleObject)};
    color: ${({ colorToken }) => getColorFromToken(`${colorToken as BaseColorTokens}3`)};
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
    ${({ typographyToken }) =>
      css(TypographyTokenConfigMap[differenceTypographyMap[typographyToken]].styleObject)};
    color: ${({ colorToken }) => getColorFromToken(`${colorToken as BaseColorTokens}3`)};
  }
`;
