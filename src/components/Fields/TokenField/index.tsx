import React from 'react';
import { formatValue } from 'react-currency-input-field';

import { ColorTokens } from '../../../foundation/Colors';
import { TypographyTokens } from '../../../foundation/Typography';
import { ExclaimTooltipProps } from '../../ExclaimTooltip';
import { TokenIcon, TokenIconProps } from '../../Icons';
import { ToggleCaret } from '../../ToggleCaret';
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
};

const defaultTokenFormatter = (token: string | undefined) => token;

export const TokenField: React.FunctionComponent<TokenFieldProps> = ({
  onChange,
  decimalsLimit = 2,
  maxLength = 18,
  value,
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
}) => {
  const hasMaxButton = Boolean(max && max.showButton);
  const handleOnChange = (newValue: string | undefined) => {
    if (newValue === value) {
      return;
    }
    onChange && onChange(newValue);
  };

  const handleOnTokenOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onTokenOptionSelected && onTokenOptionSelected(event.target.value);
  };

  const bottomRightTextTokenComputed = bottomRightTextToken
    ? bottomRightTextToken
    : tokenFormatter(token);
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
              backgroundColorToken="black700"
              borderColorToken="black700"
              data-testid="TokenField-MaxButton"
              disabled={disabled}
              disabledTypographyColorToken="black900"
              hoverBorderColorToken="black500"
              rounded={true}
              typographyColorToken="white950"
              typographyToken="bodyXSmallRegular"
              onClick={max?.onClick}
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
            differenceToken={bottomRightTextTokenComputed ? ` ${bottomRightTextTokenComputed}` : ''}
            differenceValue={bottomRightTextDifferenceValue}
            token={bottomRightTextTokenComputed ? ` ${bottomRightTextTokenComputed}` : ''}
            tokenColorToken={bottomRightTextTokenColorToken}
            typographyToken={bottomRightTextTypographyToken}
            value={bottomRightTextValue}
          />
        ) : null}
      </BottomBox>
    </TokenFieldBox>
  );
};
