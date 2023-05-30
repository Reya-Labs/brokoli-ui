import React from 'react';

import { PillSelectorBox, PillSelectorButton } from './PillSelector.styled';

type PillSelectorId = string;
export type PillSelectorProps = {
  onPillClick: (id: PillSelectorId) => void;
  activePillId: PillSelectorId;
  error?: boolean;
  pillOptions: {
    id: PillSelectorId;
    label: string;
  }[];
  disabled?: boolean;
};

export const PillSelector = ({
  error,
  pillOptions,
  activePillId,
  onPillClick,
  disabled,
}: PillSelectorProps) => {
  return (
    <PillSelectorBox data-testid="PillSelector-PillSelectorBox">
      {pillOptions.map(({ id, label }) => (
        <PillSelectorButton
          key={id}
          active={id === activePillId}
          data-testid={`PillSelectorButton-${id}`}
          disabled={disabled}
          error={error}
          onClick={() => {
            if (disabled) {
              return;
            }
            onPillClick && onPillClick(id);
          }}
        >
          {label}
        </PillSelectorButton>
      ))}
    </PillSelectorBox>
  );
};
