import React from 'react';

import { CheckboxFieldBox } from './CheckboxField.styled';

export type CheckboxFieldProps = {
  checked: boolean;
  disabled?: boolean;
  error?: boolean;
  onChange?: (checked: boolean) => void;
  size?: number;
  text: React.ReactNode;
};

export const CheckboxField: React.FunctionComponent<CheckboxFieldProps> = ({
  onChange,
  checked = false,
  disabled = false,
  text,
  size = 16,
  error = false,
}) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    typeof onChange === 'function' && onChange(event.target.checked);
  };
  return (
    <CheckboxFieldBox disabled={disabled} error={error} size={size}>
      <input checked={checked} disabled={disabled} type="checkbox" onChange={handleOnChange} />
      {text}
    </CheckboxFieldBox>
  );
};
