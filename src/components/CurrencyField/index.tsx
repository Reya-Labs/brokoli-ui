import React from 'react';
import { formatValue } from 'react-currency-input-field';

import { ColorTokens } from '../../foundation/Colors';
import { ExclaimTooltipProps } from '../ExclaimTooltip';
import { TooltipLabel } from '../TooltipLabel';
import { TypographyToken } from '../Typography';
import { CurrencyFieldBox, CurrencyInputStyled } from './CurrencyField.styled';

type CurrencyFieldProps = {
  onChange?: (value: string | undefined) => void;
  onBlur?: () => void;
  'data-testid'?: string;

  decimalsLimit?: number;
  max?: number | string | undefined;
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
  'data-testid': dataTestId,
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
        max={max}
        maxLength={maxLength}
        min={min}
        suffix={suffix}
        value={value}
        onBlur={onBlur}
        onValueChange={handleOnChange}
      />
    </CurrencyFieldBox>
  );
};
