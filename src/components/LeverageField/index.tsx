import React, { useCallback } from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { CurrencyField } from '../CurrencyField';
import { Typography, TypographyToken } from '../Typography';
import { TypographyWithTooltip } from '../TypographyWithTooltip';
import {
  ButtonsBox,
  ButtonStyled,
  CurrencyFieldBox,
  FieldButtonsBox,
  LeverageFieldBox,
} from './LeverageField.styled';

export const LeverageField: React.FunctionComponent<{
  label: string;
  labelColorToken: ColorTokens;
  labelTypographyToken: TypographyToken;
  tooltip?: string;
  tooltipColorToken?: ColorTokens;
  error?: boolean;
  disabled?: boolean;
  onLeverageChange: (value: number) => void;
  value?: number;
  leverageOptions: number[];
  maxLeverageColorToken: ColorTokens;
  maxLeverageText: string;
  maxLeverageTypographyToken: TypographyToken;
}> = ({
  value,
  leverageOptions,
  onLeverageChange,
  error,
  disabled,
  labelTypographyToken,
  tooltipColorToken,
  tooltip,
  labelColorToken,
  label,
  maxLeverageColorToken,
  maxLeverageText,
  maxLeverageTypographyToken,
}) => {
  const handleOnChange = useCallback(
    (changedValue?: string) => {
      if (!changedValue) {
        return;
      }
      if (parseFloat(changedValue) === value) {
        return;
      }
      onLeverageChange && onLeverageChange(parseFloat(changedValue));
    },
    [onLeverageChange],
  );

  return (
    <LeverageFieldBox>
      {!tooltip ? (
        <Typography colorToken={labelColorToken} typographyToken={labelTypographyToken}>
          {label}
        </Typography>
      ) : (
        <TypographyWithTooltip
          colorToken={labelColorToken}
          tooltip={tooltip}
          tooltipColorToken={tooltipColorToken}
          typographyToken={labelTypographyToken}
        >
          {label}
        </TypographyWithTooltip>
      )}
      <FieldButtonsBox>
        <CurrencyFieldBox>
          <CurrencyField
            allowNegativeValue={false}
            decimalsLimit={2}
            disabled={disabled}
            error={error}
            suffix="X"
            value={value?.toString()}
            onChange={handleOnChange}
          />
        </CurrencyFieldBox>
        <ButtonsBox>
          {leverageOptions.map((leverageOption, index) => (
            <ButtonStyled
              key={`${leverageOption}-${index}`}
              active={value === leverageOption}
              onClick={() => handleOnChange(leverageOption.toString())}
            >
              {leverageOption}
            </ButtonStyled>
          ))}
        </ButtonsBox>
      </FieldButtonsBox>
      <Typography colorToken={maxLeverageColorToken} typographyToken={maxLeverageTypographyToken}>
        {maxLeverageText}
      </Typography>
    </LeverageFieldBox>
  );
};
