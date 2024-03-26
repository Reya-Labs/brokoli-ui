import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';
import {
  getResponsiveTypographyStyleFromToken,
  TypographyTokens,
} from '../../foundation/Typography';
import { shouldNotForwardProps } from '../../utils/should-not-forward-props';
import { Typography } from '../Typography';

export const AppLinkStyled = styled(
  'a',
  shouldNotForwardProps(['colorToken', 'hoverColorToken', 'typographyToken']),
)<{
  colorToken: ColorTokens;
  hoverColorToken: ColorTokens;
  typographyToken: TypographyTokens;
}>`
  margin: 0;
  padding: 0;
  color: ${({ theme, colorToken }) => getColorFromToken({ colorToken: colorToken, theme })};
  ${({ theme, typographyToken }) =>
    css(getResponsiveTypographyStyleFromToken({ theme, token: typographyToken }))};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: ${({ theme, hoverColorToken }) =>
      getColorFromToken({ colorToken: hoverColorToken, theme })};
  }
`;

export const DisabledTypography = styled(Typography)`
  display: inline-flex;
`;
