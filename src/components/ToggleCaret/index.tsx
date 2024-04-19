import React from 'react';

import { ToggleCaretArrow, ToggleCaretBox } from './ToggleCaret.styled';

export type ToggleCaretProps = {
  disabled?: boolean;
  isOpen: boolean;
  onClick?: () => void;
};

export const ToggleCaret: React.FunctionComponent<ToggleCaretProps> = ({
  disabled,
  onClick,
  isOpen,
}) => (
  <ToggleCaretBox data-testid="ToggleCaret-ToggleCaretBox" onClick={disabled ? undefined : onClick}>
    <ToggleCaretArrow
      data-testid={`ToggleCaretArrow-${isOpen ? 'Open' : 'Closed'}`}
      isOpen={isOpen}
    />
  </ToggleCaretBox>
);
