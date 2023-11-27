import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { BaseColorTokens, getColorFromToken } from '../../foundation/Colors';
import {
  getResponsiveTypographyStyleFromToken,
  TypographyToken,
} from '../../foundation/Typography';
import { shouldNotForwardProps } from '../../utils/should-not-forward-props';
import { Typography } from '../Typography';

export const AppLinkStyled = styled('a', shouldNotForwardProps(['colorToken', 'typographyToken']))<{
  colorToken: BaseColorTokens;
  typographyToken: TypographyToken;
}>`
  margin: 0;
  padding: 0;
  color: ${({ theme, colorToken }) => getColorFromToken({ colorToken: `${colorToken}100`, theme })};
  ${({ theme, typographyToken }) =>
    css(getResponsiveTypographyStyleFromToken({ theme, token: typographyToken }))};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${({ theme, colorToken }) =>
      getColorFromToken({ colorToken: `${colorToken}200`, theme })};
  }
`;

export const DisabledTypography = styled(Typography)`
  display: inline-flex;
`;
