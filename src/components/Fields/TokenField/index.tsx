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
  CurrencyInputBottomBox,
  CurrencyInputBox,
  CurrencyInputStyled,
  FloatingBox,
  LeftFloatingBox,
  MaxButton,
  TokenBox,
  TokenFieldBox,
  TokenSelect,
  TopBox,
} from './TokenField.styled';

export type TokenFieldProps = {
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
  hideTokenIcon?: boolean;
  label?: string;
  labelAttentionIndicatorColorToken?: ColorTokens;
  labelColorToken?: ColorTokens;
  labelTypographyToken?: TypographyTokens;
  locale?: string;
  max?: MaxConfig;
  maxLength?: number | undefined;
  min?: number | string | undefined;
  onBlur?: () => void;
  onChange?: (value: string | undefined) => void;
  onTokenOptionSelected?: (selectedToken: string) => void;
  placeholder?: string;
  prefixToken?: string;
  token?: TokenIconProps['token'];
  tokenColorToken?: ColorTokens;
  tokenFormatter?: (token: string | undefined) => string;
  tokenOptions?: string[];
  tokenTypographyToken?: TypographyTokens;
  tooltip?: ExclaimTooltipProps['children'];
  topRightText?: string;
  topRightTextColorToken?: ColorTokens;
  topRightTextTypographyToken?: TypographyTokens;
  value?: string;
} & FieldStyleProps;

const defaultTokenFormatter = (token: string | undefined) => token;

export const TokenField: React.FunctionComponent<TokenFieldProps> = ({
  onChange,
  decimalsLimit = 2,
  maxLength = 18,
  value = '',
  defaultValue,
  disabled,
  error,
  typographyToken = 'bodyMediumBold',
  placeholder,
  labelColorToken = 'white300',
  labelTypographyToken = 'bodySmallMedium',
  tooltip,
  label,
  className,
  topRightTextTypographyToken = 'bodyXSmallMedium',
  topRightTextColorToken = 'white300',
  topRightText,
  bottomLeftTextTypographyToken = 'bodyXSmallMedium',
  bottomLeftTextColorToken = 'white300',
  bottomLeftText,
  token,
  bottomRightTextTypographyToken = 'bodyXSmallMedium',
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
  hideTokenIcon = false,
  tokenColorToken = 'white100',
  tokenTypographyToken = 'bodyMediumMedium',
  locale = navigator.language,
}) => {
  const { thousands } = browserI18n(locale);
  const cleanedValue = value.replace(new RegExp(`\\${thousands}`, 'g'), '');
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
  const hasTokenOptions = tokenOptions?.length !== 0;
  return (
    <TokenFieldBox data-testid="TokenField-TokenFieldBox">
      <TopBox data-testid="TokenField-TopBox">
        <TooltipLabel
          attentionIndicatorColorToken={labelAttentionIndicatorColorToken}
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
      <CurrencyInputBottomBox>
        <CurrencyInputBox data-testid="TokenField-CurrencyInputBox">
          <CurrencyInputStyled
            allowNegativeValue={allowNegativeValue}
            backgroundColorToken={backgroundColorToken}
            borderColorToken={borderColorToken}
            className={className}
            colorToken={colorToken}
            data-testid="TokenField-CurrencyInputBox-CurrencyInputStyled"
            decimalsLimit={decimalsLimit}
            defaultValue={
              defaultValue ||
              formatValue({
                intlConfig: { locale },
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
            hasPrefixToken={hasPrefixToken}
            hoverBackgroundColorToken={hoverBackgroundColorToken}
            hoverBorderColorToken={hoverBorderColorToken}
            hoverColorToken={hoverColorToken}
            hoverErrorBorderColorToken={hoverErrorBorderColorToken}
            hoverErrorColorToken={hoverErrorColorToken}
            intlConfig={{ locale }}
            max={max ? max.value : undefined}
            maxLength={maxLength}
            min={min}
            placeholder={placeholder}
            placeholderColorToken={placeholderColorToken}
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
                data-testid="TokenField-MaxButton"
                disabled={disabled}
                hoverBorderColorToken={disabled ? 'black800' : 'black500'}
                rounded={true}
                typographyColorToken={disabled ? 'black200' : 'white950'}
                typographyToken="bodyXSmallMedium"
                onClick={max?.onClick}
              >
                Max
              </MaxButton>
            ) : null}
            {token || hasTokenOptions ? (
              <TokenBox data-testid="TokenField-CurrencyInputBox-TokenBox">
                {!token || hideTokenIcon ? null : (
                  <TokenIcon
                    data-testid={`TokenField-CurrencyInputBox-TokenBox-TokenIcon-${token}`}
                    size={22}
                    token={token}
                  />
                )}
                {!hasTokenOptions ? (
                  <Typography
                    colorToken={tokenColorToken}
                    data-testid="TokenField-CurrencyInputBox-TokenBox-Typography"
                    typographyToken={tokenTypographyToken}
                  >
                    {tokenFormatter(token)}
                  </Typography>
                ) : null}
                {hasTokenOptions ? (
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
        </CurrencyInputBox>
        {bottomLeftText && bottomRightTextValue ? (
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
      </CurrencyInputBottomBox>
    </TokenFieldBox>
  );
};
