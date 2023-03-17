import React from 'react';
import { formatValue } from 'react-currency-input-field';

import { ColorTokens } from '../../foundation/Colors';
import { TooltipProps } from '../Tooltip';
import { Typography, TypographyToken } from '../Typography';
import { TypographyWithTooltip } from '../TypographyWithTooltip';
import { CurrencyFieldBox, CurrencyInputStyled } from './CurrencyField.styled';

type CurrencyFieldProps = {
  onChange?: (value: string | undefined) => void;
  decimalsLimit?: number;
  maxLength?: number;
  value?: string;
  defaultValue?: number | string;
  disabled?: boolean;
  error?: boolean;
  suffix?: string;
  allowNegativeValue?: boolean;

  label?: string;
  labelColorToken?: ColorTokens;
  labelTypographyToken?: TypographyToken;
  tooltip?: TooltipProps['children'];
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
}) => {
  const handleOnChange = (newValue: string | undefined) => {
    if (newValue === value) {
      return;
    }
    onChange && onChange(newValue);
  };

  return (
    <CurrencyFieldBox>
      {tooltip && label ? (
        <TypographyWithTooltip
          colorToken={labelColorToken}
          tooltip={tooltip}
          tooltipColorToken={tooltipColorToken}
          typographyToken={labelTypographyToken}
        >
          {label}
        </TypographyWithTooltip>
      ) : label ? (
        <Typography colorToken={labelColorToken} typographyToken={labelTypographyToken}>
          {label}
        </Typography>
      ) : null}
      <CurrencyInputStyled
        allowNegativeValue={allowNegativeValue}
        decimalsLimit={decimalsLimit}
        defaultValue={
          defaultValue ||
          formatValue({
            value: '0',
            intlConfig: { locale: navigator.language },
          })
        }
        disabled={disabled}
        error={error}
        intlConfig={{ locale: navigator.language }}
        maxLength={maxLength}
        suffix={suffix}
        value={value}
        onValueChange={handleOnChange}
      />
    </CurrencyFieldBox>
  );
};
