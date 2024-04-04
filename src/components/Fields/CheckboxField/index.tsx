import React from 'react';

import { CheckboxFieldBox } from './CheckboxField.styled';

export type CheckboxFieldProps = {
  onChange?: (checked: boolean) => void;
  checked: boolean;
  disabled?: boolean;
  size?: number;
  text: React.ReactNode;
};

export const CheckboxField: React.FunctionComponent<CheckboxFieldProps> = ({
  onChange,
  checked = false,
  disabled = false,
  text,
  size = 16,
}) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    typeof onChange === 'function' && onChange(event.target.checked);
  };
  return (
    <CheckboxFieldBox disabled={disabled} size={size}>
      <input checked={checked} disabled={disabled} type="checkbox" onChange={handleOnChange} />
      {text}
    </CheckboxFieldBox>
  );
};
