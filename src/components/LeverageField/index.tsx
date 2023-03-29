import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { CurrencyField } from '../CurrencyField';
import { TooltipProps } from '../Tooltip';
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
  tooltip?: TooltipProps['children'];
  tooltipColorToken?: ColorTokens;
  error?: boolean;
  disabled?: boolean;
  onLeverageChange: (value: string | undefined, changeType: 'button' | 'input') => void;
  value?: string;
  leverageOptions: string[];
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
  const handleOnChange = (changedValue: string = '', changeType: 'button' | 'input') => {
    onLeverageChange && onLeverageChange(changedValue, changeType);
  };

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
            value={value}
            onChange={(newValue) => handleOnChange(newValue, 'input')}
          />
        </CurrencyFieldBox>
        <ButtonsBox>
          {leverageOptions.map((leverageOption, index) => (
            <ButtonStyled
              key={`${leverageOption}-${index}`}
              active={value === leverageOption}
              disabled={disabled}
              onClick={() => handleOnChange(leverageOption, 'button')}
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
