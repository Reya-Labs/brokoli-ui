import React from 'react';

import { ButtonUI } from './Button.styled';

export type ButtonProps = {
  disabled?: boolean;
  onClick?: () => void;
};
export const Button: React.FunctionComponent<ButtonProps> = ({ onClick, children, disabled }) => {
  return (
    <ButtonUI disabled={disabled} onClick={disabled ? undefined : onClick}>
      {children}
    </ButtonUI>
  );
};
