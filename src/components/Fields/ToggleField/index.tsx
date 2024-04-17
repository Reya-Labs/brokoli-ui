import React, { useCallback, useId } from 'react';

import { ToggleFieldBox } from './ToggleField.styled';

export type ToggleFieldProps = {
  onChange?: (checked: boolean) => void;
  checked: boolean;
  disabled?: boolean;
};

export const ToggleField: React.FunctionComponent<ToggleFieldProps> = ({
  onChange,
  checked = false,
  disabled = false,
}) => {
  const id = `toggle-switch${useId()}`;
  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      typeof onChange === 'function' && onChange(event.target.checked);
    },
    [onChange],
  );

  return (
    <ToggleFieldBox>
      <input
        checked={checked}
        disabled={disabled}
        id={id}
        type="checkbox"
        onChange={handleOnChange}
      />
      <label htmlFor={id}></label>
    </ToggleFieldBox>
  );
};
