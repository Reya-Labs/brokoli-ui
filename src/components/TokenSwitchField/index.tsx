import React from 'react';
import { formatValue } from 'react-currency-input-field';

import { BaseColorTokens, ColorTokens } from '../../foundation/Colors';
import { ExclaimTooltipProps } from '../ExclaimTooltip';
import { TokenIconProps } from '../TokenField/TokenIcon';
import { TokenTypography } from '../TokenTypography';
import { TooltipLabel } from '../TooltipLabel';
import { Typography, TypographyToken } from '../Typography';
import { SwitchButtons } from './SwitchButtons';
import {
  BottomBox,
  CurrencyInputBox,
  CurrencyInputStyled,
  SwitchButtonsBox,
  TokenBox,
  TokenFieldBox,
  TopBox,
} from './TokenSwitchField.styled';

export type TokenSwitchFieldProps = {
  onChange?: (value: string | undefined) => void;
  decimalsLimit?: number;
  maxLength?: number;
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
  switchOnText: string;
  switchOffText: string;
  switchOnValue: string;
  switchOffValue: string;
  switchValue: string;
  onSwitchChange: (nextValue: string) => void;
  allowNegativeValue?: boolean;
};

export const TokenSwitchField: React.FunctionComponent<TokenSwitchFieldProps> = ({
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
  switchOffText,
  switchOffValue,
  switchOnText,
  switchOnValue,
  switchValue,
  onSwitchChange,
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
            <Typography colorToken="lavenderWeb3" typographyToken="secondaryBodySmallRegular">
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
            differenceToken={token ? ` ${token.toUpperCase()}` : ''}
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
