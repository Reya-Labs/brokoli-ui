import React from 'react';

import { BaseColorTokens } from '../../foundation/Colors';
import { PillSelectorBox, PillSelectorButton, PillSelectorVariant } from './PillSelector.styled';

type PillSelectorId = string;
export type PillSelectorProps = {
  onPillClick: (id: PillSelectorId) => void;
  activePillId: PillSelectorId;
  error?: boolean;
  pillOptions: {
    id: PillSelectorId;
    label: string;
    attentionPrefixText?: string;
  }[];
  disabled?: boolean;
  variant: PillSelectorVariant;
  attentionPrefixColorToken?: BaseColorTokens;
};

export const PillSelector = ({
  error,
  pillOptions,
  activePillId,
  onPillClick,
  disabled,
  attentionPrefixColorToken = 'skyBlueCrayola',
  variant,
}: PillSelectorProps) => {
  return (
    <PillSelectorBox data-testid="PillSelector-PillSelectorBox" variant={variant}>
      {pillOptions.map(({ id, label, attentionPrefixText }) => (
        <PillSelectorButton
          key={id}
          active={id === activePillId}
          attentionPrefixColorToken={attentionPrefixColorToken}
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
          {attentionPrefixText && attentionPrefixColorToken ? (
            <span>{attentionPrefixText}&nbsp;</span>
          ) : null}{' '}
          {label}
        </PillSelectorButton>
      ))}
    </PillSelectorBox>
  );
};
