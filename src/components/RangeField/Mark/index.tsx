import React from 'react';
import { ReactSliderProps } from 'react-slider';

import { StyledMark } from './Mark.styled';

export const Mark: ReactSliderProps['renderMark'] = (props) => {
  const keyAsNumber = !props.key
    ? 0
    : typeof props.key === 'number' || typeof props.key === 'bigint'
    ? Number(props.key)
    : parseInt(props.key, 10);
  if (keyAsNumber === 0) {
    return null;
  }
  const isHighlighted = keyAsNumber % (step * NTH_MARKDOWN_HIGHLIGHT) === 0;
  return (
    <StyledMark
      {...(props as object)}
      colorToken={isHighlighted ? 'white100' : 'black100'}
      height={6}
    />
  );
};
