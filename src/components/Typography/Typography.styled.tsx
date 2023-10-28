import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';
import { gradients } from '../../foundation/Gradients';
import { typography } from '../../foundation/Typography';
import { TypographyToken } from '../../foundation/Typography/typography-tokens';

export const BaseTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'typographyToken' && prop !== 'colorToken',
})<{
  colorToken: ColorTokens;
  typographyToken: TypographyToken;
}>`
  margin: 0;
  padding: 0;
  color: ${({ colorToken }) => getColorFromToken(colorToken)};
  ${({ typographyToken }) => css(typography[typographyToken].styleObject)};
`;

export const RainbowTypography = styled(BaseTypography)`
  display: inline-block;
  background: ${gradients.rainbow};
  background-clip: text;
  text-fill-color: transparent;
`;
