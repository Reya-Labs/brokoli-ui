import React from 'react';

import { ColorTokens } from '../../../foundation/Colors';
import { TypographyToken } from '../../../foundation/Typography';
import { ExclaimTooltipProps } from '../../ExclaimTooltip';
import { TooltipLabel } from '../../TooltipLabel';
import { TextFieldBox, TextInputStyled } from './TextField.styled';

export type TextFieldProps = {
  onChange?: (value: string | undefined) => void;
  value?: string;
  disabled?: boolean;
  error?: boolean;
  label?: string;
  labelColorToken?: ColorTokens;
  labelTypographyToken?: TypographyToken;
  tooltip?: ExclaimTooltipProps['children'];
  tooltipColorToken?: ColorTokens;
  type: HTMLInputElement['type'];
  typographyToken: TypographyToken;
  placeHolder?: string;
};

export const TextField: React.FunctionComponent<TextFieldProps> = ({
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
  placeHolder,
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
        placeholder={placeHolder}
        type={type}
        typographyToken={typographyToken}
        value={value}
        onChange={handleOnChange}
      />
    </TextFieldBox>
  );
};
