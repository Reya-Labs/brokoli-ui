import React from 'react';
import { ReactSliderProps } from 'react-slider';

import { StyledThumb } from './Thumb.styled';

export const Thumb: ReactSliderProps['renderThumb'] = (props) => (
  <StyledThumb size={6} thumbColorToken="white100" {...(props as object)} />
);
