import React from 'react';
import { formatValue } from 'react-currency-input-field';

import { BaseColorTokens, ColorTokens } from '../../foundation/Colors';
import { TokenTypography } from '../TokenTypography';
import { Typography, TypographyToken } from '../Typography';
import { TypographyWithTooltip } from '../TypographyWithTooltip';
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
  decimalsLimit?: number;
  maxLength?: number;
  value?: string;
  defaultValue?: number | string;
  disabled?: boolean;
  error?: boolean;
  labelColorToken?: ColorTokens;
  labelTypographyToken?: TypographyToken;
  tooltip?: string;
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
}) => {
  const handleOnChange = (newValue: string | undefined) => {
    if (newValue === value) {
      return;
    }
    onChange && onChange(newValue);
  };

  return (
    <TokenFieldBox>
      <TopBox>
        {label && tooltip && (
          <TypographyWithTooltip
            colorToken={labelColorToken}
            tooltip={tooltip}
            typographyToken={labelTypographyToken}
          >
            {label}
          </TypographyWithTooltip>
        )}
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
        <CurrencyInputStyled
          allowNegativeValue={allowNegativeValue}
          decimalsLimit={decimalsLimit}
          defaultValue={
            defaultValue ||
            formatValue({
              value: '0',
              intlConfig: { locale: navigator.language },
            })
          }
          disabled={disabled}
          error={error}
          intlConfig={{ locale: navigator.language }}
          maxLength={maxLength}
          value={value}
          onValueChange={handleOnChange}
        />
        {token ? (
          <TokenBox>
            <TokenIcon token={token} />
            <Typography colorToken="lavenderWeb" typographyToken="secondaryBodyMediumRegular">
              {token.toUpperCase()}
            </Typography>
          </TokenBox>
        ) : null}
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
            differenceValue={bottomRightTextDifferenceValue}
            token={token ? ` ${token.toUpperCase()}` : ''}
            typographyToken={bottomRightTextTypographyToken}
            value={bottomRightTextValue}
          />
        )}
      </BottomBox>
    </TokenFieldBox>
  );
};
