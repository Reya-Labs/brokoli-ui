import React from 'react';
import { formatValue } from 'react-currency-input-field';

import { ColorTokens } from '../../../foundation/Colors';
import { ExclaimTooltipProps } from '../../ExclaimTooltip';
import { TooltipLabel } from '../../TooltipLabel';
import { TypographyToken } from '../../Typography';
import { MaxConfig } from '../_common/types';
import { CurrencyFieldBox, CurrencyInputStyled } from './CurrencyField.styled';

type CurrencyFieldProps = {
  onChange?: (value: string | undefined) => void;
  onBlur?: () => void;
  'data-testid'?: string;

  decimalsLimit?: number;
  max?: MaxConfig;
  maxLength?: number | undefined;
  min?: number | string | undefined;
  value?: string;
  defaultValue?: number | string;
  disabled?: boolean;
  error?: boolean;
  suffix?: string;
  allowNegativeValue?: boolean;

  label?: string;
  labelColorToken?: ColorTokens;
  labelTypographyToken?: TypographyToken;
  tooltip?: ExclaimTooltipProps['children'];
  tooltipColorToken?: ColorTokens;
  typographyToken?: TypographyToken;
  placeholder?: string;
};

export const CurrencyField: React.FunctionComponent<CurrencyFieldProps> = ({
  onChange,
  decimalsLimit = 2,
  maxLength = 18,
  value,
  defaultValue,
  disabled,
  error,
  suffix,
  allowNegativeValue,
  labelColorToken = 'lavenderWeb2',
  labelTypographyToken = 'primaryBodySmallRegular',
  label,
  tooltipColorToken,
  tooltip,
  onBlur,
  min,
  max,
  placeholder,
  'data-testid': dataTestId,
  typographyToken = 'secondaryBodySmallRegular',
}) => {
  const handleOnChange = (newValue: string | undefined) => {
    if (newValue === value) {
      return;
    }
    onChange && onChange(newValue);
  };

  return (
    <CurrencyFieldBox data-testid="CurrencyField-CurrencyFieldBox">
      <TooltipLabel
        label={label}
        labelColorToken={labelColorToken}
        labelTypographyToken={labelTypographyToken}
        tooltip={tooltip}
        tooltipColorToken={tooltipColorToken}
      />
      <CurrencyInputStyled
        allowNegativeValue={allowNegativeValue}
        data-testid={dataTestId || 'CurrencyField-CurrencyInputStyled'}
        decimalsLimit={decimalsLimit}
        defaultValue={
          defaultValue ||
          formatValue({
            intlConfig: { locale: navigator.language },
            value: '0',
          })
        }
        disabled={disabled}
        error={error}
        intlConfig={{ locale: navigator.language }}
        max={max ? max.value : undefined}
        maxLength={maxLength}
        min={min}
        placeholder={placeholder}
        suffix={suffix}
        typographyToken={typographyToken}
        value={value}
        onBlur={onBlur}
        onValueChange={handleOnChange}
      />
    </CurrencyFieldBox>
  );
};
