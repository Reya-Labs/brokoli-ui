import React from 'react';

import { ColorTokens } from '../../../foundation/Colors';
import { TypographyTokens } from '../../../foundation/Typography';
import { ExclaimTooltipProps } from '../../ExclaimTooltip';
import { TooltipLabel } from '../../TooltipLabel';
import { Typography } from '../../Typography';
import { CurrencyField } from '../CurrencyField';
import {
  ButtonsBox,
  ButtonStyled,
  CurrencyFieldBox,
  FieldButtonsBox,
  LeverageFieldBox,
} from './LeverageField.styled';

export type LeverageFieldProps = {
  label: string;
  labelColorToken: ColorTokens;
  labelTypographyToken: TypographyTokens;
  tooltip?: ExclaimTooltipProps['children'];
  tooltipColorToken?: ColorTokens;
  error?: boolean;
  disabled?: boolean;
  onLeverageChange: (value: string | undefined, changeType: 'button' | 'input') => void;
  value?: string;
  leverageOptions: string[];
  maxLeverageColorToken: ColorTokens;
  maxLeverageText: string;
  maxLeverageTypographyToken: TypographyTokens;
};

export const LeverageField: React.FunctionComponent<LeverageFieldProps> = ({
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
  const handleOnChange = (changedValue: string = '', changeType: 'button' | 'input') => {
    onLeverageChange && onLeverageChange(changedValue, changeType);
  };

  return (
    <LeverageFieldBox data-testid="LeverageField-LeverageFieldBox">
      <TooltipLabel
        label={label}
        labelColorToken={labelColorToken}
        labelTypographyToken={labelTypographyToken}
        tooltip={tooltip}
        tooltipColorToken={tooltipColorToken}
      />
      <FieldButtonsBox>
        <CurrencyFieldBox>
          <CurrencyField
            allowNegativeValue={false}
            data-testid="LeverageField-CurrencyField"
            decimalsLimit={2}
            disabled={disabled}
            error={error}
            suffix="X"
            value={value}
            onChange={(newValue) => handleOnChange(newValue, 'input')}
          />
        </CurrencyFieldBox>
        <ButtonsBox data-testid="LeverageField-ButtonsBox">
          {leverageOptions.map((leverageOption, index) => (
            <ButtonStyled
              key={`${leverageOption}-${index}`}
              active={value === leverageOption}
              data-testid={`LeverageField-ButtonStyled-${
                disabled ? 'Disabled' : 'Enabled'
              }-${leverageOption}`}
              disabled={disabled}
              onClick={() => handleOnChange(leverageOption, 'button')}
            >
              {leverageOption}
            </ButtonStyled>
          ))}
        </ButtonsBox>
      </FieldButtonsBox>
      <Typography
        colorToken={maxLeverageColorToken}
        data-testid="LeverageField-MaxLeverageTextTypography"
        typographyToken={maxLeverageTypographyToken}
      >
        {maxLeverageText}
      </Typography>
    </LeverageFieldBox>
  );
};
