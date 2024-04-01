import React from 'react';
import { ReactSliderProps } from 'react-slider';

import { ColorTokens } from '../../../foundation/Colors';
import { StyledMark } from './Mark.styled';

export type MarkProps = {
  // every Nth Mark element will be highlighted
  highlightEveryNthMark: number;
  highlightColorToken: ColorTokens;
  colorToken: ColorTokens;
  step: number;
  height: number;
  trackHeight: number;
};

export const Mark: (markProps: MarkProps) => ReactSliderProps['renderMark'] =
  ({ trackHeight, height, step, highlightEveryNthMark, colorToken, highlightColorToken }) =>
  (props) => {
    const keyAsNumber = !props.key
      ? 0
      : typeof props.key === 'number' || typeof props.key === 'bigint'
      ? Number(props.key)
      : parseInt(props.key, 10);
    if (keyAsNumber === 0) {
      return null;
    }
    const isHighlighted = keyAsNumber % (step * highlightEveryNthMark) === 0;
    return (
      <StyledMark
        {...(props as object)}
        colorToken={isHighlighted ? highlightColorToken : colorToken}
        height={height}
        trackHeight={trackHeight}
      />
    );
  };
