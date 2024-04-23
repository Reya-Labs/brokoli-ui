import React from 'react';
import { formatValue } from 'react-currency-input-field';

import { ColorTokens } from '../../../foundation/Colors';
import { TypographyTokens } from '../../../foundation/Typography';
import { browserI18n } from '../../../utils/browser-i18n';
import { ExclaimTooltipProps } from '../../ExclaimTooltip';
import { TooltipLabel } from '../../TooltipLabel';
import { FieldStyleProps } from '../_common/common.styled';
import { MaxConfig } from '../_common/types';
import { CurrencyFieldBox, CurrencyInputStyled } from './CurrencyField.styled';

type CurrencyFieldProps = {
  allowNegativeValue?: boolean;
  'data-testid'?: string;
  decimalsLimit?: number;

  defaultValue?: number | string;
  disabled?: boolean;
  error?: boolean;
  label?: string;
  labelAttentionIndicatorColorToken?: ColorTokens;
  labelColorToken?: ColorTokens;
  labelTypographyToken?: TypographyTokens;
  max?: MaxConfig;
  maxLength?: number | undefined;
  min?: number | string | undefined;

  onBlur?: () => void;
  onChange?: (value: string | undefined) => void;
  placeholder?: string;
  suffix?: string;
  tooltip?: ExclaimTooltipProps['children'];
  tooltipColorToken?: ColorTokens;
  value?: string;
} & FieldStyleProps;

export const CurrencyField: React.FunctionComponent<CurrencyFieldProps> = ({
  onChange,
  decimalsLimit = 2,
  maxLength = 18,
  value = '',
  defaultValue,
  disabled,
  error,
  suffix,
  allowNegativeValue,
  labelColorToken = 'white300',
  labelTypographyToken = 'bodySmallMedium',
  label,
  tooltipColorToken,
  tooltip,
  onBlur,
  min,
  max,
  placeholder,
  'data-testid': dataTestId,
  typographyToken = 'bodySmallMedium',
  labelAttentionIndicatorColorToken,
  borderColorToken = 'black700',
  backgroundColorToken = 'black900',
  hoverBackgroundColorToken = 'black800',
  disabledBackgroundColorToken = 'black900',
  placeholderColorToken = 'white950',
  disabledColorToken = 'white950',
  errorBorderColorToken = 'error800',
  errorColorToken = 'error400',
  colorToken = 'white100',
  hoverBorderColorToken = 'black700',
  hoverErrorBorderColorToken = 'error800',
  hoverColorToken = colorToken,
  hoverErrorColorToken = 'error100',
  disabledBorderColorToken = 'black700',
}) => {
  const { thousands } = browserI18n();
  const cleanedValue = value.replace(new RegExp(`\\${thousands}`, 'g'), '');
  const handleOnChange = (newValue: string | undefined) => {
    if (newValue === cleanedValue) {
      return;
    }
    typeof onChange === 'function' && onChange(newValue);
  };

  return (
    <CurrencyFieldBox data-testid="CurrencyField-CurrencyFieldBox">
      <TooltipLabel
        attentionIndicatorColorToken={labelAttentionIndicatorColorToken}
        label={label}
        labelColorToken={labelColorToken}
        labelTypographyToken={labelTypographyToken}
        tooltip={tooltip}
        tooltipColorToken={tooltipColorToken}
      />
      <CurrencyInputStyled
        allowNegativeValue={allowNegativeValue}
        backgroundColorToken={backgroundColorToken}
        borderColorToken={borderColorToken}
        colorToken={colorToken}
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
        disabledBackgroundColorToken={disabledBackgroundColorToken}
        disabledBorderColorToken={disabledBorderColorToken}
        disabledColorToken={disabledColorToken}
        error={error}
        errorBorderColorToken={errorBorderColorToken}
        errorColorToken={errorColorToken}
        hoverBackgroundColorToken={hoverBackgroundColorToken}
        hoverBorderColorToken={hoverBorderColorToken}
        hoverColorToken={hoverColorToken}
        hoverErrorBorderColorToken={hoverErrorBorderColorToken}
        hoverErrorColorToken={hoverErrorColorToken}
        intlConfig={{ locale: navigator.language }}
        max={max ? max.value : undefined}
        maxLength={maxLength}
        min={min}
        placeholder={placeholder}
        placeholderColorToken={placeholderColorToken}
        suffix={suffix}
        typographyToken={typographyToken}
        value={cleanedValue}
        onBlur={onBlur}
        onValueChange={handleOnChange}
      />
    </CurrencyFieldBox>
  );
};
