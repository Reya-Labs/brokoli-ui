import styled from '@emotion/styled';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';
import { shouldNotForwardProps } from '../../utils/should-not-forward-props';
import { ExclaimTooltip } from '../ExclaimTooltip';
import { Typography } from '../Typography';

export const TypographyStyled = styled(
  Typography,
  shouldNotForwardProps(['textDecorationColorToken', 'decorate']),
)<{
  decorate: 'underline' | 'none';
  textDecorationColorToken: ColorTokens;
}>`
  position: relative;
  text-decoration: ${({ decorate }) => decorate};
  text-decoration-style: dashed;
  text-decoration-color: ${({ theme, textDecorationColorToken }) =>
    getColorFromToken({ colorToken: textDecorationColorToken, theme })};
`;

export const TooltipStyled = styled(ExclaimTooltip)`
  margin-left: 0.5em;
`;
