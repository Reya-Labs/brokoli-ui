import styled from '@emotion/styled';

import { ColorTokens, getColorFromToken } from '../../../foundation/Colors';
import { shouldNotForwardProps } from '../../../utils/should-not-forward-props';

export const StyledTrack = styled('div', shouldNotForwardProps(['index', 'trackColorToken']))<{
  index: number;
  trackColorToken: ColorTokens;
}>`
  top: 0;
  bottom: 0;
  background: ${({ theme, index, trackColorToken }) =>
    index === 1
      ? 'transparent'
      : getColorFromToken({
          colorToken: trackColorToken,
          theme,
        })};
  border-radius: 8px;
  z-index: 999;
`;
