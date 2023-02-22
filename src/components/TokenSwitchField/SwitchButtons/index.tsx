import React from 'react';

import { SwitchButton, SwitchButtonsBox } from './SwitchButtons.styled';

type SwitchButtonsProps = {
  switchOnText: string;
  switchOffText: string;
  switchOnValue: string;
  switchOffValue: string;
  switchValue: string;
  onSwitchChange: (nextValue: string) => void;
  error?: boolean;
  disabled?: boolean;
};
export const SwitchButtons: React.FunctionComponent<SwitchButtonsProps> = ({
  switchOffValue,
  switchOnText,
  switchOnValue,
  switchOffText,
  switchValue,
  onSwitchChange,
  disabled,
  error,
}) => {
  return (
    <SwitchButtonsBox>
      <SwitchButton
        active={switchValue === switchOnValue}
        disabled={disabled}
        error={error}
        onClick={() => {
          if (switchOnValue === switchValue) {
            return;
          }
          onSwitchChange(switchOnValue);
        }}
      >
        {switchOnText}
      </SwitchButton>
      <SwitchButton
        active={switchValue === switchOffValue}
        disabled={disabled}
        error={error}
        onClick={() => {
          if (switchOffValue === switchValue) {
            return;
          }
          onSwitchChange(switchOffValue);
        }}
      >
        {switchOffText}
      </SwitchButton>
    </SwitchButtonsBox>
  );
};
