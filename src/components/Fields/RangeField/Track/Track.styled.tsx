import styled from '@emotion/styled';

import { addAlpha, ColorTokens, getColorFromToken } from '../../../../foundation/Colors';
import { shouldNotForwardProps } from '../../../../utils/should-not-forward-props';

export const StyledTrack = styled(
  'div',
  shouldNotForwardProps(['trackHeight', 'height', 'isActivePartOfTrack', 'trackColorToken']),
)<{
  isActivePartOfTrack: boolean;
  thumbHeight: number;
  trackColorToken: ColorTokens;
  trackHeight: number;
}>`
  background: ${({ theme, isActivePartOfTrack, trackColorToken }) =>
    !isActivePartOfTrack
      ? 'transparent'
      : getColorFromToken({
          colorToken: trackColorToken,
          theme,
        })};
  box-shadow: ${({ theme, thumbHeight, isActivePartOfTrack, trackColorToken }) =>
    !isActivePartOfTrack
      ? undefined
      : `0px 0px ${thumbHeight + 2}px 0px ${addAlpha(
          getColorFromToken({ colorToken: trackColorToken, theme }),
          0.5,
        )}`};

  border-radius: 8px;
  height: ${({ thumbHeight }) => thumbHeight}px;
  z-index: 1;
  top: ${({ trackHeight, thumbHeight }) => (trackHeight - thumbHeight) / 2}px;
`;
