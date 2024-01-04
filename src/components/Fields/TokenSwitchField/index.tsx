import React from 'react';
import { formatValue } from 'react-currency-input-field';

import { ColorTokens } from '../../../foundation/Colors';
import { TypographyToken } from '../../../foundation/Typography';
import { ExclaimTooltipProps } from '../../ExclaimTooltip';
import { IconProps } from '../../Icons/TokenIcon/Icon';
import { TokenTypography } from '../../TokenTypography';
import { TooltipLabel } from '../../TooltipLabel';
import { Typography } from '../../Typography';
import { MaxConfig } from '../_common/types';
import { SwitchButtons } from './SwitchButtons';
import {
  BottomBox,
  CurrencyInputBox,
  CurrencyInputStyled,
  FloatingBox,
  MaxButton,
  SwitchButtonsBox,
  TokenBox,
  TokenFieldBox,
  TopBox,
} from './TokenSwitchField.styled';

export type TokenSwitchFieldProps = {
  onChange?: (value: string | undefined) => void;
  onBlur?: () => void;
  decimalsLimit?: number;
  max?: MaxConfig;
  maxLength?: number | undefined;
  min?: number | string | undefined;
  value?: string;
  defaultValue?: number | string;
  disabled?: boolean;
  error?: boolean;
  labelColorToken?: ColorTokens;
  labelTypographyToken?: TypographyToken;
  tooltip?: ExclaimTooltipProps['children'];
  label?: string;
  topRightText?: string;
  topRightTextColorToken?: ColorTokens;
  topRightTextTypographyToken?: TypographyToken;
  bottomLeftText?: string;
  bottomLeftTextColorToken?: ColorTokens;
  bottomLeftTextTypographyToken?: TypographyToken;
  token?: IconProps['token'];
  bottomRightTextValue?: string | number;
  bottomRightTextColorToken?: ColorTokens;
  bottomRightTextTypographyToken?: TypographyToken;
  bottomRightTextDifferenceValue?: number;
  switchOnText: string;
  switchOffText: string;
  switchOnValue: string;
  switchOffValue: string;
  switchValue: string;
  onSwitchChange: (nextValue: string) => void;
  allowNegativeValue?: boolean;
  typographyToken?: TypographyToken;
  placeholder?: string;
  bottomRightTextDifferenceColorToken?: ColorTokens;
  bottomRightTextTokenColorToken?: ColorTokens;
};

export const TokenSwitchField: React.FunctionComponent<TokenSwitchFieldProps> = ({
  onChange,
  decimalsLimit = 2,
  maxLength = 18,
  value,
  defaultValue,
  disabled,
  error,
  labelColorToken = 'white300',
  labelTypographyToken = 'bodySmallRegular',
  tooltip,
  label,
  topRightTextTypographyToken = 'bodyXSmallRegular',
  topRightTextColorToken = 'white300',
  topRightText,
  bottomLeftTextTypographyToken = 'bodyXSmallRegular',
  bottomLeftTextColorToken = 'white300',
  bottomLeftText,
  token,
  bottomRightTextTypographyToken = 'bodyXSmallRegular',
  bottomRightTextColorToken = 'white950',
  bottomRightTextValue,
  bottomRightTextDifferenceValue,
  bottomRightTextDifferenceColorToken,
  bottomRightTextTokenColorToken,
  switchOffText,
  switchOffValue,
  switchOnText,
  switchOnValue,
  switchValue,
  onSwitchChange,
  allowNegativeValue,
  onBlur,
  min,
  max,
  typographyToken = 'bodyMediumBold',
  placeholder,
}) => {
  const handleOnChange = (newValue: string | undefined) => {
    if (newValue === value) {
      return;
    }
    onChange && onChange(newValue);
  };

  const handleOnMaxButtonClick = () => max && onChange && onChange(max.toString());
  const hasMaxButton = Boolean(max && max.showButton);

  return (
    <TokenFieldBox>
      <TopBox>
        <TooltipLabel
          label={label}
          labelColorToken={labelColorToken}
          labelTypographyToken={labelTypographyToken}
          tooltip={tooltip}
          tooltipColorToken={labelColorToken}
        />
        {topRightText && (
          <Typography
            colorToken={topRightTextColorToken}
            typographyToken={topRightTextTypographyToken}
          >
            {topRightText}
          </Typography>
        )}
      </TopBox>
      <CurrencyInputBox>
        <SwitchButtonsBox>
          <SwitchButtons
            disabled={disabled}
            error={error}
            switchOffText={switchOffText}
            switchOffValue={switchOffValue}
            switchOnText={switchOnText}
            switchOnValue={switchOnValue}
            switchValue={switchValue}
            onSwitchChange={onSwitchChange}
          />
        </SwitchButtonsBox>
        <CurrencyInputStyled
          allowNegativeValue={allowNegativeValue}
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
          hasMaxButton={hasMaxButton}
          intlConfig={{ locale: navigator.language }}
          max={max ? max.value : undefined}
          maxLength={maxLength}
          min={min}
          placeholder={placeholder}
          typographyToken={typographyToken}
          value={value}
          onBlur={onBlur}
          onValueChange={handleOnChange}
        />
        <FloatingBox>
          {hasMaxButton ? (
            <MaxButton
              borderColorToken="white800"
              data-testid="TokenSwitchField-MaxButton"
              disabled={disabled}
              disabledTypographyColorToken="white700"
              hoverBorderColorToken="white500"
              typographyColorToken="white100"
              typographyToken="bodyXSmallRegular"
              onClick={handleOnMaxButtonClick}
            >
              Max
            </MaxButton>
          ) : null}
          {token ? (
            <TokenBox>
              <Typography colorToken="white400" typographyToken="bodySmallRegular">
                {token}
              </Typography>
            </TokenBox>
          ) : null}
        </FloatingBox>
      </CurrencyInputBox>
      <BottomBox>
        {bottomLeftText && (
          <Typography
            colorToken={bottomLeftTextColorToken}
            typographyToken={bottomLeftTextTypographyToken}
          >
            {bottomLeftText}
          </Typography>
        )}
        {bottomRightTextValue && (
          <TokenTypography
            colorToken={bottomRightTextColorToken}
            differenceColorToken={bottomRightTextDifferenceColorToken}
            differenceToken={token ? ` ${token}` : ''}
            differenceValue={bottomRightTextDifferenceValue}
            token={token ? ` ${token}` : ''}
            tokenColorToken={bottomRightTextTokenColorToken}
            typographyToken={bottomRightTextTypographyToken}
            value={bottomRightTextValue}
          />
        )}
      </BottomBox>
    </TokenFieldBox>
  );
};
