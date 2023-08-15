import React from 'react';

import { ToggleCaretArrow, ToggleCaretBox } from './ToggleCaret.styled';

export type ToggleCaretProps = {
  isOpen: boolean;
  onClick?: () => void;
};

export const ToggleCaret: React.FunctionComponent<ToggleCaretProps> = ({ onClick, isOpen }) => (
  <ToggleCaretBox data-testid="ToggleCaret-ToggleCaretBox" onClick={onClick}>
    <ToggleCaretArrow
      data-testid={`ToggleCaretArrow-${isOpen ? 'Open' : 'Closed'}`}
      isOpen={isOpen}
    />
  </ToggleCaretBox>
);
