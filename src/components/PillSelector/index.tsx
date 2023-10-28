import React from 'react';

import { BaseColorTokens, ColorTokens } from '../../foundation/Colors';
import { TypographyToken } from '../../foundation/Typography';
import { ExclaimTooltipProps } from '../ExclaimTooltip';
import { TooltipLabel } from '../TooltipLabel';
import {
  PillSelectorBox,
  PillSelectorButton,
  PillSelectorVariant,
  PillWrapperBox,
} from './PillSelector.styled';

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

  label?: string;
  labelColorToken?: ColorTokens;
  labelTypographyToken?: TypographyToken;
  tooltip?: ExclaimTooltipProps['children'];
  tooltipColorToken?: ColorTokens;
};

export const PillSelector = ({
  error,
  pillOptions,
  activePillId,
  onPillClick,
  disabled,
  attentionPrefixColorToken = 'skyBlueCrayola',
  variant,
  label = '',
  labelTypographyToken = 'primaryBodySmallRegular',
  labelColorToken = 'lavenderWeb3',
  tooltip = '',
  tooltipColorToken = 'lavenderWeb3',
}: PillSelectorProps) => {
  return (
    <PillWrapperBox>
      <TooltipLabel
        data-testid="LabelTokenTypography-TooltipLabel"
        label={label}
        labelColorToken={labelColorToken}
        labelTypographyToken={labelTypographyToken}
        tooltip={tooltip}
        tooltipColorToken={tooltipColorToken}
      />
      <PillSelectorBox data-testid="PillSelector-PillSelectorBox" variant={variant}>
        {pillOptions.map(({ id, label: labelText, attentionPrefixText }) => (
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
            {labelText}
          </PillSelectorButton>
        ))}
      </PillSelectorBox>
    </PillWrapperBox>
  );
};
