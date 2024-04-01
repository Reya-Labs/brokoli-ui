import React from 'react';
import { ReactSliderProps } from 'react-slider';

import { StyledTrack } from './Track.styled';

export const Track: ReactSliderProps['renderTrack'] = (props, state) => (
  <StyledTrack trackColorToken="white100" {...(props as object)} index={state.index} />
);
