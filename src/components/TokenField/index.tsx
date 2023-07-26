import React from 'react';
import { formatValue } from 'react-currency-input-field';

import { BaseColorTokens, ColorTokens } from '../../foundation/Colors';
import { ExclaimTooltipProps } from '../ExclaimTooltip';
import { TokenTypography } from '../TokenTypography';
import { TooltipLabel } from '../TooltipLabel';
import { Typography, TypographyToken } from '../Typography';
import {
  BottomBox,
  CurrencyInputBox,
  CurrencyInputStyled,
  TokenBox,
  TokenFieldBox,
  TopBox,
} from './TokenField.styled';
import { TokenIcon, TokenIconProps } from './TokenIcon';

export type TokenFieldProps = {
  onChange?: (value: string | undefined) => void;
  onBlur?: () => void;
  decimalsLimit?: number;
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
  token?: TokenIconProps['token'];
  bottomRightTextValue?: string | number;
  bottomRightTextColorToken?: BaseColorTokens;
  bottomRightTextTypographyToken?: TypographyToken;
  bottomRightTextDifferenceValue?: number;
  allowNegativeValue?: boolean;
  max?: number | string | undefined;
  maxLength?: number | undefined;
  min?: number | string | undefined;
};

export const TokenField: React.FunctionComponent<TokenFieldProps> = ({
  onChange,
  decimalsLimit = 2,
  maxLength = 18,
  value,
  defaultValue,
  disabled,
  error,
  labelColorToken = 'lavenderWeb2',
  labelTypographyToken = 'primaryBodySmallRegular',
  tooltip,
  label,
  topRightTextTypographyToken = 'primaryBodyXSmallRegular',
  topRightTextColorToken = 'lavenderWeb2',
  topRightText,
  bottomLeftTextTypographyToken = 'primaryBodyXSmallRegular',
  bottomLeftTextColorToken = 'lavenderWeb2',
  bottomLeftText,
  token,
  bottomRightTextTypographyToken = 'secondaryBodyXSmallRegular',
  bottomRightTextColorToken = 'lavenderWeb',
  bottomRightTextValue,
  bottomRightTextDifferenceValue,
  allowNegativeValue,
  onBlur,
  min,
  max,
}) => {
  const handleOnChange = (newValue: string | undefined) => {
    if (newValue === value) {
      return;
    }
    onChange && onChange(newValue);
  };

  return (
    <TokenFieldBox data-testid="TokenField-TokenFieldBox">
      <TopBox data-testid="TokenField-TopBox">
        <TooltipLabel
          data-testid="TokenField-TopBox-TooltipLabel"
          label={label}
          labelColorToken={labelColorToken}
          labelTypographyToken={labelTypographyToken}
          tooltip={tooltip}
          tooltipColorToken={labelColorToken}
        />
        {topRightText ? (
          <Typography
            colorToken={topRightTextColorToken}
            data-testid="TokenField-TopBox-Typography"
            typographyToken={topRightTextTypographyToken}
          >
            {topRightText}
          </Typography>
        ) : null}
      </TopBox>
      <CurrencyInputBox data-testid="TokenField-CurrencyInputBox">
        <CurrencyInputStyled
          allowNegativeValue={allowNegativeValue}
          data-testid="TokenField-CurrencyInputBox-CurrencyInputStyled"
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
          value={value}
          onBlur={onBlur}
          onValueChange={handleOnChange}
        />
        {token ? (
          <TokenBox data-testid="TokenField-CurrencyInputBox-TokenBox">
            <TokenIcon
              data-testid={`TokenField-CurrencyInputBox-TokenBox-TokenIcon-${token}`}
              token={token}
            />
            <Typography
              colorToken="lavenderWeb"
              data-testid="TokenField-CurrencyInputBox-TokenBox-Typography"
              typographyToken="secondaryBodyMediumRegular"
            >
              {token.toUpperCase()}
            </Typography>
          </TokenBox>
        ) : null}
      </CurrencyInputBox>
      <BottomBox data-testid="TokenField-BottomBox">
        {bottomLeftText ? (
          <Typography
            colorToken={bottomLeftTextColorToken}
            data-testid="TokenField-BottomBox-Typography"
            typographyToken={bottomLeftTextTypographyToken}
          >
            {bottomLeftText}
          </Typography>
        ) : null}
        {bottomRightTextValue ? (
          <TokenTypography
            colorToken={bottomRightTextColorToken}
            data-testid="TokenField-BottomBox-TokenTypography"
            differenceToken={token ? ` ${token.toUpperCase()}` : ''}
            differenceValue={bottomRightTextDifferenceValue}
            token={token ? ` ${token.toUpperCase()}` : ''}
            typographyToken={bottomRightTextTypographyToken}
            value={bottomRightTextValue}
          />
        ) : null}
      </BottomBox>
    </TokenFieldBox>
  );
};
