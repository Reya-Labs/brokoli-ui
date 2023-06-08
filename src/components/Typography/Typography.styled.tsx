import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';
import { RAINBOW_GRADIENT } from '../../foundation/Gradients';
import { TypographyTokenConfigMap } from './typography-token-config-map';
import { TypographyToken } from './typography-tokens';

export const BaseTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'typographyToken' && prop !== 'colorToken',
})<{
  colorToken: ColorTokens;
  typographyToken: TypographyToken;
}>`
  margin: 0;
  padding: 0;
  color: ${({ colorToken }) => getColorFromToken(colorToken)};
  ${({ typographyToken }) => css(TypographyTokenConfigMap[typographyToken].styleObject)};
`;

export const RainbowTypography = styled(BaseTypography)`
  display: inline-block;
  background: ${RAINBOW_GRADIENT};
  background-clip: text;
  text-fill-color: transparent;
`;
