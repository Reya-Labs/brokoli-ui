import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { BaseColorTokens, getColorFromToken } from '../../foundation/Colors';
import {
  getResponsiveTypographyStyleFromToken,
  TypographyTokens,
} from '../../foundation/Typography';
import { shouldNotForwardProps } from '../../utils/should-not-forward-props';
import { Typography } from '../Typography';

export const AppLinkStyled = styled('a', shouldNotForwardProps(['colorToken', 'typographyToken']))<{
  colorToken: BaseColorTokens;
  typographyToken: TypographyTokens;
}>`
  margin: 0;
  padding: 0;
  color: ${({ theme, colorToken }) => getColorFromToken({ colorToken: `${colorToken}100`, theme })};
  ${({ theme, typographyToken }) =>
    css(getResponsiveTypographyStyleFromToken({ theme, token: typographyToken }))};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: ${({ theme, colorToken }) =>
      getColorFromToken({ colorToken: `${colorToken}200`, theme })};
  }
`;

export const DisabledTypography = styled(Typography)`
  display: inline-flex;
`;
