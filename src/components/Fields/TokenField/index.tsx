import React from 'react';
import { formatValue } from 'react-currency-input-field';

import { BaseColorTokens, ColorTokens } from '../../../foundation/Colors';
import { TypographyToken } from '../../../foundation/Typography';
import { ExclaimTooltipProps } from '../../ExclaimTooltip';
import { TokenIcon, TokenIconProps } from '../../Icons';
import { TokenTypography } from '../../TokenTypography';
import { TooltipLabel } from '../../TooltipLabel';
import { Typography } from '../../Typography';
import { MaxConfig } from '../_common/types';
import {
  BottomBox,
  CurrencyInputBox,
  CurrencyInputStyled,
  FloatingBox,
  MaxButton,
  TokenBox,
  TokenFieldBox,
  TopBox,
} from './TokenField.styled';

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
  bottomRightTextToken?: string;
  allowNegativeValue?: boolean;
  max?: MaxConfig;
  maxLength?: number | undefined;
  min?: number | string | undefined;
  typographyToken?: TypographyToken;
  placeholder?: string;
};

export const TokenField: React.FunctionComponent<TokenFieldProps> = ({
  onChange,
  decimalsLimit = 2,
  maxLength = 18,
  value,
  defaultValue,
  disabled,
  error,
  typographyToken = 'secondaryBodyMediumBold',
  placeholder,
  labelColorToken = 'white300',
  labelTypographyToken = 'primaryBodySmallRegular',
  tooltip,
  label,
  topRightTextTypographyToken = 'primaryBodyXSmallRegular',
  topRightTextColorToken = 'white300',
  topRightText,
  bottomLeftTextTypographyToken = 'primaryBodyXSmallRegular',
  bottomLeftTextColorToken = 'white300',
  bottomLeftText,
  token,
  bottomRightTextTypographyToken = 'secondaryBodyXSmallRegular',
  bottomRightTextColorToken = 'white',
  bottomRightTextValue,
  bottomRightTextToken,
  bottomRightTextDifferenceValue,
  allowNegativeValue,
  onBlur,
  min,
  max,
}) => {
  const hasMaxButton = Boolean(max && max.showButton);
  const handleOnChange = (newValue: string | undefined) => {
    if (newValue === value) {
      return;
    }
    onChange && onChange(newValue);
  };

  const handleOnMaxButtonClick = () => max && onChange && onChange(max.toString());
  const bottomRightTextTokenComputed = bottomRightTextToken ? bottomRightTextToken : token;
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
              data-testid="TokenField-MaxButton"
              disabled={disabled}
              typographyToken="primaryBodyXSmallRegular"
              variant="secondary"
              onClick={handleOnMaxButtonClick}
            >
              Max
            </MaxButton>
          ) : null}
          {token ? (
            <TokenBox data-testid="TokenField-CurrencyInputBox-TokenBox">
              <TokenIcon
                data-testid={`TokenField-CurrencyInputBox-TokenBox-TokenIcon-${token}`}
                size={22}
                token={token}
              />
              <Typography
                colorToken="white100"
                data-testid="TokenField-CurrencyInputBox-TokenBox-Typography"
                typographyToken="secondaryBodyMediumRegular"
              >
                {token.toUpperCase()}
              </Typography>
            </TokenBox>
          ) : null}
        </FloatingBox>
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
            differenceToken={
              bottomRightTextTokenComputed ? ` ${bottomRightTextTokenComputed.toUpperCase()}` : ''
            }
            differenceValue={bottomRightTextDifferenceValue}
            token={
              bottomRightTextTokenComputed ? ` ${bottomRightTextTokenComputed.toUpperCase()}` : ''
            }
            typographyToken={bottomRightTextTypographyToken}
            value={bottomRightTextValue}
          />
        ) : null}
      </BottomBox>
    </TokenFieldBox>
  );
};