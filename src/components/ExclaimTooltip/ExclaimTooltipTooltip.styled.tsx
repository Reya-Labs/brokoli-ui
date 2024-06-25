import styled from '@emotion/styled';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';
import { shouldNotForwardProps } from '../../utils/should-not-forward-props';

export const ExclaimBox = styled('span', shouldNotForwardProps(['colorToken']))<{
  colorToken: ColorTokens;
}>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 1em;
    height: 1em;
  }
  & g {
    stroke: ${({ theme, colorToken }) => getColorFromToken({ colorToken, theme })};
  }
`;
