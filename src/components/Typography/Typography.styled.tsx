import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';
import { TypographyToken } from '../../foundation/Typography';

export const BaseTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'typographyToken' && prop !== 'colorToken',
})<{
  colorToken: ColorTokens;
  typographyToken: TypographyToken;
}>`
  margin: 0;
  padding: 0;
  color: ${({ theme, colorToken }) => getColorFromToken({ colorToken, theme })};
  ${({ theme, typographyToken }) => css(theme.typography[typographyToken].styleObject)};
`;

export const RainbowTypography = styled(BaseTypography)`
  display: inline-block;
  background: ${({ theme }) => theme.gradients.rainbow};
  background-clip: text;
  text-fill-color: transparent;
`;
