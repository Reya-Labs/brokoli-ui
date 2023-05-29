import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TooltipProps } from '../ExclaimTooltip';
import { TooltipLabel } from '../TooltipLabel';
import { TypographyToken } from '../Typography';
import { TextFieldBox, TextInputStyled } from './TextField.styled';

export type TextFieldFieldProps = {
  onChange?: (value: string | undefined) => void;
  value?: string;
  disabled?: boolean;
  error?: boolean;
  label?: string;
  labelColorToken?: ColorTokens;
  labelTypographyToken?: TypographyToken;
  tooltip?: TooltipProps['children'];
  tooltipColorToken?: ColorTokens;
  type: HTMLInputElement['type'];
  typographyToken: TypographyToken;
};

export const TextField: React.FunctionComponent<TextFieldFieldProps> = ({
  onChange,
  value,
  disabled,
  error,
  labelColorToken = 'lavenderWeb2',
  labelTypographyToken = 'primaryBodySmallRegular',
  label,
  tooltipColorToken,
  tooltip,
  type = 'text',
  typographyToken = 'primaryBodyMediumRegular',
}) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value);
  };
  return (
    <TextFieldBox data-testid="TextField-TextFieldBox">
      <TooltipLabel
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
        type={type}
        typographyToken={typographyToken}
        value={value}
        onChange={handleOnChange}
      />
    </TextFieldBox>
  );
};
