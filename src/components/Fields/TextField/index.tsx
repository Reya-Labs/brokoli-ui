import React from 'react';

import { ColorTokens } from '../../../foundation/Colors';
import { TypographyTokens } from '../../../foundation/Typography';
import { ExclaimTooltipProps } from '../../ExclaimTooltip';
import { TooltipLabel, TooltipLabelProps } from '../../TooltipLabel';
import { Typography } from '../../Typography';
import { FieldStyleProps } from '../_common/common.styled';
import { BottomBox, TextFieldBottomBox, TextFieldBox, TextInputStyled } from './TextField.styled';

export type TextFieldProps = {
  bottomLeftText?: string;
  bottomLeftTextColorToken?: ColorTokens;
  bottomLeftTextTypographyToken?: TypographyTokens;
  disabled?: boolean;
  error?: boolean;
  label?: string;
  labelAttentionIndicatorColorToken?: ColorTokens;
  labelColorToken?: ColorTokens;
  labelTypographyToken?: TypographyTokens;
  name?: string;
  onChange?: (value: string | undefined) => void;
  placeHolder?: string;
  tooltip?: ExclaimTooltipProps['children'];
  tooltipColorToken?: ColorTokens;
  tooltipTrigger?: TooltipLabelProps['tooltipTrigger'];
  type?: HTMLInputElement['type'];
  value?: string;
} & FieldStyleProps;

export const TextField: React.FunctionComponent<TextFieldProps> = ({
  onChange,
  value,
  disabled,
  error,
  labelColorToken = 'white300',
  labelTypographyToken = 'bodySmallMedium',
  label,
  tooltipColorToken,
  tooltip,
  type = 'text',
  placeHolder,
  typographyToken = 'bodyMediumMedium',
  name,
  labelAttentionIndicatorColorToken,
  bottomLeftTextTypographyToken = 'bodyXSmallMedium',
  bottomLeftTextColorToken = 'white300',
  bottomLeftText,
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
  tooltipTrigger = 'icon',
}) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    typeof onChange === 'function' && onChange(event.target.value);
  };
  return (
    <TextFieldBox data-testid={error ? 'TextField-TextFieldBox-Error' : 'TextField-TextFieldBox'}>
      <TooltipLabel
        attentionIndicatorColorToken={labelAttentionIndicatorColorToken}
        data-testid={`TextField-TextFieldBox-${labelTypographyToken}-${labelColorToken}`}
        label={label}
        labelColorToken={labelColorToken}
        labelTypographyToken={labelTypographyToken}
        tooltip={tooltip}
        tooltipColorToken={tooltipColorToken}
        tooltipTrigger={tooltipTrigger}
      />
      <TextFieldBottomBox>
        <TextInputStyled
          backgroundColorToken={backgroundColorToken}
          borderColorToken={borderColorToken}
          colorToken={colorToken}
          data-testid={`TextField-TextFieldBox-TextInputStyled`}
          disabled={disabled}
          disabledBackgroundColorToken={disabledBackgroundColorToken}
          disabledBorderColorToken={disabledBorderColorToken}
          disabledColorToken={disabledColorToken}
          error={error}
          errorBorderColorToken={errorBorderColorToken}
          errorColorToken={errorColorToken}
          hoverBackgroundColorToken={hoverBackgroundColorToken}
          hoverBorderColorToken={hoverBorderColorToken}
          hoverColorToken={hoverColorToken}
          hoverErrorBorderColorToken={hoverErrorBorderColorToken}
          hoverErrorColorToken={hoverErrorColorToken}
          name={name}
          placeholder={placeHolder}
          placeholderColorToken={placeholderColorToken}
          type={type}
          typographyToken={typographyToken}
          value={value}
          onChange={handleOnChange}
        />
        {bottomLeftText ? (
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
          </BottomBox>
        ) : null}
      </TextFieldBottomBox>
    </TextFieldBox>
  );
};
