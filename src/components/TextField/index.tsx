import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TooltipProps } from '../Tooltip';
import { Typography, TypographyToken } from '../Typography';
import { TypographyWithTooltip } from '../TypographyWithTooltip';
import { TextFieldBox, TextInputStyled } from './TextField.styled';

type TextFieldFieldProps = {
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
    <TextFieldBox>
      {tooltip && label ? (
        <TypographyWithTooltip
          colorToken={labelColorToken}
          tooltip={tooltip}
          tooltipColorToken={tooltipColorToken}
          typographyToken={labelTypographyToken}
        >
          {label}
        </TypographyWithTooltip>
      ) : label ? (
        <Typography colorToken={labelColorToken} typographyToken={labelTypographyToken}>
          {label}
        </Typography>
      ) : null}
      <TextInputStyled
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
