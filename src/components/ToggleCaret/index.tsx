import React from 'react';

import { ToggleCaretArrow, ToggleCaretBox } from './ToggleCaret.styled';

export type ToggleCaretProps = {
  isOpen: boolean;
};

export const ToggleCaret: React.FunctionComponent<ToggleCaretProps> = ({ isOpen }) => (
  <ToggleCaretBox data-testid="ToggleCaret-ToggleCaretBox">
    <ToggleCaretArrow
      data-testid={`ToggleCaretArrow-${isOpen ? 'Open' : 'Closed'}`}
      isOpen={isOpen}
    />
  </ToggleCaretBox>
);
