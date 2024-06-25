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
  textDecorationColorToken?: ColorTokens;
}>`
  position: relative;
  display: flex;
  text-decoration: ${({ decorate }) => decorate};
  text-decoration-style: ${({ decorate }) => decorate === 'underline' && 'dotted'};
  text-decoration-color: ${({ decorate, theme, textDecorationColorToken }) =>
    decorate && getColorFromToken({ colorToken: textDecorationColorToken, theme })};
`;

export const TooltipStyled = styled(ExclaimTooltip)`
  margin-left: 0.5em;
`;
