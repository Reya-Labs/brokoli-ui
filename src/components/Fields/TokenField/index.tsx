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
  onChange?: (value: string | undefined) => void;
  onBlur?: () => void;
  decimalsLimit?: number;
  value?: string;
  defaultValue?: number | string;
  disabled?: boolean;
  error?: boolean;
  labelColorToken?: ColorTokens;
  labelTypographyToken?: TypographyTokens;
  tooltip?: ExclaimTooltipProps['children'];
  label?: string;
  topRightText?: string;
  topRightTextColorToken?: ColorTokens;
  topRightTextTypographyToken?: TypographyTokens;
  bottomLeftText?: string;
  bottomLeftTextColorToken?: ColorTokens;
  bottomLeftTextTypographyToken?: TypographyTokens;
  token?: TokenIconProps['token'];
  bottomRightTextValue?: string | number;
  bottomRightTextColorToken?: ColorTokens;
  bottomRightTextTypographyToken?: TypographyTokens;
  bottomRightTextDifferenceValue?: number;
  bottomRightTextToken?: string;
  allowNegativeValue?: boolean;
  max?: MaxConfig;
  maxLength?: number | undefined;
  min?: number | string | undefined;
  typographyToken?: TypographyTokens;
  placeholder?: string;
  bottomRightTextDifferenceColorToken?: ColorTokens;
  bottomRightTextTokenColorToken?: ColorTokens;
  className?: string;
  labelAttentionIndicatorColorToken?: ColorTokens;
  tokenFormatter?: (token: string | undefined) => string;
  tokenOptions?: string[];
  onTokenOptionSelected?: (selectedToken: string) => void;
  prefixToken?: string;
};

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
  labelTypographyToken = 'bodySmallRegular',
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
            className={className}
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
                data-testid="TokenField-MaxButton"
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
              <TokenBox data-testid="TokenField-CurrencyInputBox-TokenBox">
                {!token ? null : (
                  <TokenIcon
                    data-testid={`TokenField-CurrencyInputBox-TokenBox-TokenIcon-${token}`}
                    size={22}
                    token={token}
                  />
                )}
                {tokenOptions?.length === 0 ? (
                  <Typography
                    colorToken="white100"
                    data-testid="TokenField-CurrencyInputBox-TokenBox-Typography"
                    typographyToken="bodyMediumRegular"
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
