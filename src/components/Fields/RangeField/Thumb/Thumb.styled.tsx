import styled from '@emotion/styled';

import { addAlpha, ColorTokens, getColorFromToken } from '../../../../foundation/Colors';
import { shouldNotForwardProps } from '../../../../utils/should-not-forward-props';
import { Typography } from '../../../Typography';

export const StyledThumb = styled(
  'div',
  shouldNotForwardProps(['value', 'disabled', 'height', 'width', 'trackHeight', 'colorToken']),
)<{
  height: number;
  width: number;
  trackHeight: number;
  disabled: boolean;
  colorToken: ColorTokens;
  value: number;
}>`
  height: ${({ height }) => height}px;
  line-height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  text-align: center;
  background-color: ${({ colorToken, theme }) => getColorFromToken({ colorToken, theme })};
  border-radius: 50%;
  box-shadow: 0px 0px ${({ height }) => height + 2}px 0px
    ${({ theme, colorToken }) => addAlpha(getColorFromToken({ colorToken, theme }), 0.5)};
  cursor: ${({ disabled, value }) =>
    !disabled ? (value === 0 ? 'e-resize' : value === 100 ? 'w-resize' : 'ew-resize') : 'default'};
  outline: none;
  top: ${({ trackHeight, height }) => (trackHeight - height) / 2}px;
`;

export const StyledValueTypography = styled(Typography)`
  top: calc(100% + 8px);
  left: -4px;
  position: absolute;
`;
