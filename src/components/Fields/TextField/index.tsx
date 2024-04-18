import React from 'react';

import { ColorTokens } from '../../../foundation/Colors';
import { TypographyTokens } from '../../../foundation/Typography';
import { ExclaimTooltipProps } from '../../ExclaimTooltip';
import { TooltipLabel } from '../../TooltipLabel';
import { Typography } from '../../Typography';
import { FieldStyleProps } from '../_common/common.styled';
import { BottomBox, TextFieldBottomBox, TextFieldBox, TextInputStyled } from './TextField.styled';

export type TextFieldProps = {
  onChange?: (value: string | undefined) => void;
  value?: string;
  disabled?: boolean;
  error?: boolean;
  label?: string;
  labelColorToken?: ColorTokens;
  labelTypographyToken?: TypographyTokens;
  tooltip?: ExclaimTooltipProps['children'];
  tooltipColorToken?: ColorTokens;
  type?: HTMLInputElement['type'];
  placeHolder?: string;
  name?: string;
  labelAttentionIndicatorColorToken?: ColorTokens;

  bottomLeftText?: string;
  bottomLeftTextColorToken?: ColorTokens;
  bottomLeftTextTypographyToken?: TypographyTokens;
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
  bottomLeftTextTypographyToken = 'bodyXSmallRegular',
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
