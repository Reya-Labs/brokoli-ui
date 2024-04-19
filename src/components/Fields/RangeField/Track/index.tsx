import React from 'react';
import { ReactSliderProps } from 'react-slider';

import { ColorTokens } from '../../../../foundation/Colors';
import { StyledTrack } from './Track.styled';

export type TrackProps = {
  thumbHeight: number;
  trackColorToken: ColorTokens;
  trackHeight: number;
};

export const Track: (trackProps: TrackProps) => ReactSliderProps['renderTrack'] =
  ({ trackHeight, thumbHeight, trackColorToken }) =>
  (props, state) =>
    state.value === 0 ? null : (
      <StyledTrack
        {...(props as object)}
        isActivePartOfTrack={state.index === 0}
        thumbHeight={thumbHeight}
        trackColorToken={trackColorToken}
        trackHeight={trackHeight}
      />
    );
