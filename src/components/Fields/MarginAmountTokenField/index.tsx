import React, { useCallback, useState } from 'react';
import { formatValue } from 'react-currency-input-field';

import { BaseColorTokens, ColorTokens } from '../../../foundation/Colors';
import { ExclaimTooltipProps } from '../../ExclaimTooltip';
import { TokenIcon, TokenIconProps } from '../../Icons';
import { Popover } from '../../Popover';
import { ToggleCaret } from '../../ToggleCaret';
import { TokenTypography } from '../../TokenTypography';
import { TooltipLabel } from '../../TooltipLabel';
import { Typography, TypographyToken } from '../../Typography';
import { MarginAmountList, MarginAmountListProps } from './MarginAmountsList';
import {
  BottomBox,
  CurrencyInputBox,
  CurrencyInputStyled,
  FloatingBox,
  MarginAmountTokenFieldBox,
  MaxButton,
  TokenBox,
  TopBox,
} from './MarginAmountTokenField.styled';

export type MarginAmountTokenFieldProps = {
  onChange?: (event: {
    value: string | undefined;
    changeVia: 'input' | 'selection' | 'maxButton';
    token?: TokenIconProps['token'];
  }) => void;
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
  typographyToken?: TypographyToken;
  placeholder?: string;
  marginAmountOptions: MarginAmountListProps['items'];
};

export const MarginAmountTokenField: React.FunctionComponent<MarginAmountTokenFieldProps> = ({
  onChange,
  decimalsLimit = 2,
  maxLength = 18,
  value,
  defaultValue,
  disabled,
  error,
  typographyToken = 'secondaryBodyMediumBold',
  placeholder,
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
  marginAmountOptions,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const closePopover = () => setIsOpen(false);
  const [width, setWidth] = useState(0);

  const inputRef = useCallback((node: HTMLInputElement) => {
    if (node !== null) {
      setWidth(node.getBoundingClientRect().width);
    }
  }, []);

  const handleOnChange = (newValue: string | undefined) => {
    if (newValue === value) {
      return;
    }
    onChange &&
      onChange({
        changeVia: 'input',
        token,
        value: newValue,
      });
  };

  const handleOnItemClick = (item: MarginAmountListProps['items'][0]) => {
    onChange &&
      onChange({
        changeVia: 'selection',
        token: item.token,
        value: item.value.toString(),
      });
    closePopover();
  };

  const handleOnMaxButtonClick = () => {
    const option = marginAmountOptions.find((o) => o.token === token);
    if (option) {
      onChange &&
        onChange({
          changeVia: 'maxButton',
          token,
          value: option.value.toString(),
        });
    }
  };

  const toggleCaret = () => setIsOpen(!isOpen);

  return (
    <MarginAmountTokenFieldBox data-testid="MarginAmountTokenField-MarginAmountTokenFieldBox">
      <TopBox data-testid="MarginAmountTokenField-TopBox">
        <TooltipLabel
          data-testid="MarginAmountTokenField-TopBox-TooltipLabel"
          label={label}
          labelColorToken={labelColorToken}
          labelTypographyToken={labelTypographyToken}
          tooltip={tooltip}
          tooltipColorToken={labelColorToken}
        />
        {topRightText ? (
          <Typography
            colorToken={topRightTextColorToken}
            data-testid="MarginAmountTokenField-TopBox-Typography"
            typographyToken={topRightTextTypographyToken}
          >
            {topRightText}
          </Typography>
        ) : null}
      </TopBox>
      <Popover
        content={
          <MarginAmountList
            items={marginAmountOptions}
            parentWidth={width}
            onItemClick={handleOnItemClick}
          />
        }
        data-testid="MarginAmountTokenField-ItemsWrapper"
        isOpen={isOpen}
        onClickOutside={closePopover}
      >
        <CurrencyInputBox data-testid="MarginAmountTokenField-CurrencyInputBox">
          <CurrencyInputStyled
            ref={inputRef}
            allowNegativeValue={allowNegativeValue}
            data-testid="MarginAmountTokenField-CurrencyInputBox-CurrencyInputStyled"
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
            placeholder={placeholder}
            typographyToken={typographyToken}
            value={value}
            onBlur={onBlur}
            onValueChange={handleOnChange}
          />
          <FloatingBox>
            {token ? (
              <MaxButton
                disabled={disabled}
                typographyToken="primaryBodyXSmallRegular"
                variant="secondary"
                onClick={handleOnMaxButtonClick}
              >
                Max
              </MaxButton>
            ) : null}
            {token ? (
              <TokenBox
                data-testid="MarginAmountTokenField-CurrencyInputBox-TokenBox"
                onClick={toggleCaret}
              >
                <TokenIcon
                  data-testid={`MarginAmountTokenField-CurrencyInputBox-TokenBox-TokenIcon-${token}`}
                  size={22}
                  token={token}
                />
                <Typography
                  colorToken="lavenderWeb"
                  data-testid="MarginAmountTokenField-CurrencyInputBox-TokenBox-Typography"
                  typographyToken="primaryBodySmallRegular"
                >
                  {token.toUpperCase()}
                </Typography>
              </TokenBox>
            ) : null}
            <ToggleCaret isOpen={isOpen} onClick={toggleCaret} />
          </FloatingBox>
        </CurrencyInputBox>
      </Popover>
      <BottomBox data-testid="MarginAmountTokenField-BottomBox">
        {bottomLeftText ? (
          <Typography
            colorToken={bottomLeftTextColorToken}
            data-testid="MarginAmountTokenField-BottomBox-Typography"
            typographyToken={bottomLeftTextTypographyToken}
          >
            {bottomLeftText}
          </Typography>
        ) : null}
        {bottomRightTextValue ? (
          <TokenTypography
            colorToken={bottomRightTextColorToken}
            data-testid="MarginAmountTokenField-BottomBox-TokenTypography"
            differenceToken={token ? ` ${token.toUpperCase()}` : ''}
            differenceValue={bottomRightTextDifferenceValue}
            token={token ? ` ${token.toUpperCase()}` : ''}
            typographyToken={bottomRightTextTypographyToken}
            value={bottomRightTextValue}
          />
        ) : null}
      </BottomBox>
    </MarginAmountTokenFieldBox>
  );
};
