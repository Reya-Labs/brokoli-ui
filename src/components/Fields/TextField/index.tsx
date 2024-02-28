import React from 'react';

import { ColorTokens } from '../../../foundation/Colors';
import { TypographyTokens } from '../../../foundation/Typography';
import { ExclaimTooltipProps } from '../../ExclaimTooltip';
import { TooltipLabel } from '../../TooltipLabel';
import { Typography } from '../../Typography';
import { BottomBox, TextFieldBox, TextInputStyled } from './TextField.styled';

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
  typographyToken: TypographyTokens;
  placeHolder?: string;
  name?: string;
  labelAttentionIndicatorColorToken?: ColorTokens;

  bottomLeftText?: string;
  bottomLeftTextColorToken?: ColorTokens;
  bottomLeftTextTypographyToken?: TypographyTokens;
};

export const TextField: React.FunctionComponent<TextFieldProps> = ({
  onChange,
  value,
  disabled,
  error,
  labelColorToken = 'white300',
  labelTypographyToken = 'bodySmallRegular',
  label,
  tooltipColorToken,
  tooltip,
  type = 'text',
  placeHolder,
  typographyToken = 'bodyMediumRegular',
  name,
  labelAttentionIndicatorColorToken,
  bottomLeftTextTypographyToken = 'bodyXSmallRegular',
  bottomLeftTextColorToken = 'white300',
  bottomLeftText,
}) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value);
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
      <TextInputStyled
        data-testid={`TextField-TextFieldBox-TextInputStyled`}
        disabled={disabled}
        error={error}
        name={name}
        placeholder={placeHolder}
        type={type}
        typographyToken={typographyToken}
        value={value}
        onChange={handleOnChange}
      />
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
    </TextFieldBox>
  );
};
