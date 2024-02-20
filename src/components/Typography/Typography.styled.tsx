import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';
import {
  getResponsiveTypographyStyleFromToken,
  TypographyTokens,
} from '../../foundation/Typography';
import { shouldNotForwardProps } from '../../utils/should-not-forward-props';

export const BaseTypography = styled(
  'p',
  shouldNotForwardProps(['typographyToken', 'colorToken', 'as']),
)<{
  as?: React.ElementType;
  colorToken: ColorTokens;
  typographyToken: TypographyTokens;
}>`
  margin: 0;
  padding: 0;
  color: ${({ theme, colorToken }) => getColorFromToken({ colorToken, theme })};
  ${({ theme, typographyToken }) =>
    css(getResponsiveTypographyStyleFromToken({ theme, token: typographyToken }))};
`;

export const RainbowTypography = styled(BaseTypography)`
  display: inline-block;
  background: ${({ theme }) => theme.gradients.rainbow};
  background-clip: text;
  text-fill-color: transparent;
`;
