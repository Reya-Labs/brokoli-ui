import React from 'react';
import { formatValue } from 'react-currency-input-field';

import { ColorTokens } from '../../../foundation/Colors';
import { TypographyTokens } from '../../../foundation/Typography';
import { browserI18n } from '../../../utils/browser-i18n';
import { ExclaimTooltipProps } from '../../ExclaimTooltip';
import { TokenIcon, TokenIconProps } from '../../Icons';
import { ToggleCaret } from '../../ToggleCaret';
import { TokenTypography } from '../../TokenTypography';
import { TooltipLabel } from '../../TooltipLabel';
import { Typography } from '../../Typography';
import { FieldStyleProps } from '../_common/common.styled';
import { MaxConfig } from '../_common/types';
import {
  BottomBox,
  CurrencyInputBox,
  CurrencyInputStyled,
  FloatingBox,
  InputAndFloatingBoxBox,
  LeftFloatingBox,
  MaxButton,
  TokenBox,
  TokenLabelFieldBox,
  TokenSelect,
  TopBox,
} from './TokenLabelField.styled';

export type TokenLabelFieldProps = {
  allowNegativeValue?: boolean;
  bottomLeftText?: string;
  bottomLeftTextColorToken?: ColorTokens;
  bottomLeftTextTypographyToken?: TypographyTokens;
  bottomRightTextColorToken?: ColorTokens;
  bottomRightTextDifferenceColorToken?: ColorTokens;
  bottomRightTextDifferenceValue?: number;
  bottomRightTextToken?: string;
  bottomRightTextTokenColorToken?: ColorTokens;
  bottomRightTextTypographyToken?: TypographyTokens;
  bottomRightTextValue?: string | number;
  className?: string;
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
  onTokenOptionSelected?: (selectedToken: string) => void;
  placeholder?: string;
  prefixToken?: string;
  token?: TokenIconProps['token'];
  tokenFormatter?: (token: string | undefined) => string;
  tokenOptions?: string[];
  tooltip?: ExclaimTooltipProps['children'];
  topRightText?: string;
  topRightTextColorToken?: ColorTokens;
  topRightTextTypographyToken?: TypographyTokens;
  value?: string;
} & FieldStyleProps;

const defaultTokenFormatter = (token: string | undefined) => token;

export const TokenLabelField: React.FunctionComponent<TokenLabelFieldProps> = ({
  onChange,
  decimalsLimit = 2,
  maxLength = 18,
  value = '',
  defaultValue,
  disabled = false,
  error,
  typographyToken = 'bodyMediumBold',
  placeholder,
  labelColorToken = 'white300',
  labelTypographyToken = 'bodySmallMedium',
  tooltip,
  label,
  className,
  topRightTextTypographyToken = 'bodyXSmallRegular',
  topRightTextColorToken = 'white300',
  topRightText,
  bottomLeftTextTypographyToken = 'bodyXSmallRegular',
  bottomLeftTextColorToken = 'white300',
  bottomLeftText,
  token,
  bottomRightTextTypographyToken = 'bodyXSmallRegular',
  bottomRightTextColorToken = 'white950',
  bottomRightTextDifferenceColorToken,
  bottomRightTextTokenColorToken,
  bottomRightTextValue,
  bottomRightTextToken,
  bottomRightTextDifferenceValue,
  allowNegativeValue,
  onBlur,
  min,
  max,
  labelAttentionIndicatorColorToken,
  tokenFormatter = defaultTokenFormatter,
  tokenOptions = [],
  onTokenOptionSelected,
  prefixToken,
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
  const cleanedValue = value.replace(new RegExp(thousands, 'g'), ''); // This replaces all occurrences of 'a'
  const hasMaxButton = Boolean(max && max.showButton);
  const handleOnChange = (newValue: string | undefined) => {
    if (newValue === cleanedValue) {
      return;
    }
    typeof onChange === 'function' && onChange(newValue);
  };

  const handleOnTokenOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onTokenOptionSelected && onTokenOptionSelected(event.target.value);
  };

  const bottomRightTextTokenComputed = bottomRightTextToken
    ? bottomRightTextToken
    : tokenFormatter(token);
  const hasPrefixToken = Boolean(prefixToken);
  return (
    <TokenLabelFieldBox data-testid="TokenLabelField-TokenLabelFieldBox">
      <CurrencyInputBox
        backgroundColorToken={backgroundColorToken}
        borderColorToken={borderColorToken}
        className={className}
        colorToken={colorToken}
        data-testid="TokenLabelField-CurrencyInputBox"
        disabled={disabled}
        disabledBackgroundColorToken={disabledBackgroundColorToken}
        disabledBorderColorToken={disabledBorderColorToken}
        disabledColorToken={disabledColorToken}
        errorBorderColorToken={errorBorderColorToken}
        errorColorToken={errorColorToken}
        hoverBackgroundColorToken={hoverBackgroundColorToken}
        hoverBorderColorToken={hoverBorderColorToken}
        hoverColorToken={hoverColorToken}
        hoverErrorBorderColorToken={hoverErrorBorderColorToken}
        hoverErrorColorToken={hoverErrorColorToken}
        placeholderColorToken={placeholderColorToken}
      >
        <TopBox data-testid="TokenLabelField-TopBox">
          <TooltipLabel
            attentionIndicatorColorToken={labelAttentionIndicatorColorToken}
            data-testid="TokenLabelField-TopBox-TooltipLabel"
            label={label}
            labelColorToken={labelColorToken}
            labelTypographyToken={labelTypographyToken}
            tooltip={tooltip}
            tooltipColorToken={labelColorToken}
          />
          {topRightText ? (
            <Typography
              colorToken={topRightTextColorToken}
              data-testid="TokenLabelField-TopBox-Typography"
              typographyToken={topRightTextTypographyToken}
            >
              {topRightText}
            </Typography>
          ) : null}
        </TopBox>
        <InputAndFloatingBoxBox>
          <CurrencyInputStyled
            allowNegativeValue={allowNegativeValue}
            data-testid="TokenLabelField-CurrencyInputBox-CurrencyInputStyled"
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
            hasPrefixToken={hasPrefixToken}
            intlConfig={{ locale: navigator.language }}
            max={max ? max.value : undefined}
            maxLength={maxLength}
            min={min}
            placeholder={placeholder}
            typographyToken={typographyToken}
            value={cleanedValue}
            onBlur={onBlur}
            onValueChange={handleOnChange}
          />
          {hasPrefixToken ? (
            <LeftFloatingBox>
              <Typography colorToken="white950" typographyToken={typographyToken}>
                {prefixToken}
              </Typography>
            </LeftFloatingBox>
          ) : null}
          <FloatingBox>
            {hasMaxButton ? (
              <MaxButton
                backgroundColorToken={disabled ? 'black800' : 'black700'}
                borderColorToken="black700"
                data-testid="TokenLabelField-MaxButton"
                disabled={disabled}
                hoverBorderColorToken={disabled ? 'black800' : 'black500'}
                rounded={true}
                typographyColorToken={disabled ? 'black200' : 'white950'}
                typographyToken="bodyXSmallRegular"
                onClick={max?.onClick}
              >
                Max
              </MaxButton>
            ) : null}
            {token || tokenOptions?.length !== 0 ? (
              <TokenBox data-testid="TokenLabelField-CurrencyInputBox-TokenBox">
                {!token ? null : (
                  <TokenIcon
                    data-testid={`TokenLabelField-CurrencyInputBox-TokenBox-TokenIcon-${token}`}
                    size={22}
                    token={token}
                  />
                )}
                {tokenOptions?.length === 0 ? (
                  <Typography
                    colorToken="white100"
                    data-testid="TokenLabelField-CurrencyInputBox-TokenBox-Typography"
                    typographyToken="bodyMediumMedium"
                  >
                    {tokenFormatter(token)}
                  </Typography>
                ) : null}
                {tokenOptions?.length !== 0 ? (
                  <React.Fragment>
                    <ToggleCaret isOpen={false} />
                    <TokenSelect value={token} onChange={handleOnTokenOptionChange}>
                      {tokenOptions.map((tokenOption) => (
                        <option key={tokenOption} value={tokenOption}>
                          {tokenFormatter(tokenOption)}
                        </option>
                      ))}
                    </TokenSelect>
                  </React.Fragment>
                ) : null}
              </TokenBox>
            ) : null}
          </FloatingBox>
        </InputAndFloatingBoxBox>
      </CurrencyInputBox>
      {bottomLeftText && bottomRightTextValue ? (
        <BottomBox data-testid="TokenLabelField-BottomBox">
          {bottomLeftText ? (
            <Typography
              colorToken={bottomLeftTextColorToken}
              data-testid="TokenLabelField-BottomBox-Typography"
              typographyToken={bottomLeftTextTypographyToken}
            >
              {bottomLeftText}
            </Typography>
          ) : null}
          {bottomRightTextValue ? (
            <TokenTypography
              colorToken={bottomRightTextColorToken}
              data-testid="TokenLabelField-BottomBox-TokenTypography"
              differenceColorToken={bottomRightTextDifferenceColorToken}
              differenceToken={
                bottomRightTextTokenComputed ? ` ${bottomRightTextTokenComputed}` : ''
              }
              differenceValue={bottomRightTextDifferenceValue}
              token={bottomRightTextTokenComputed ? ` ${bottomRightTextTokenComputed}` : ''}
              tokenColorToken={bottomRightTextTokenColorToken}
              typographyToken={bottomRightTextTypographyToken}
              value={bottomRightTextValue}
            />
          ) : null}
        </BottomBox>
      ) : null}
    </TokenLabelFieldBox>
  );
};
