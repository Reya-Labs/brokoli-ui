import React from 'react';

import { ColorTokens } from '../../../foundation/Colors';
import { ExclaimTooltipProps } from '../../ExclaimTooltip';
import { TooltipLabel } from '../../TooltipLabel';
import { TypographyToken } from '../../Typography';
import { SearchFieldBox, TextInputStyled } from './SearchField.styled';

export type SearchFieldProps = {
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

export const SearchField: React.FunctionComponent<SearchFieldProps> = ({
  onChange,
  value,
  disabled,
  error,
  labelColorToken = 'lavenderWeb2',
  labelTypographyToken = 'primaryBodySmallRegular',
  label,
  tooltipColorToken,
  tooltip,
  placeHolder,
  typographyToken = 'primaryBodyMediumRegular',
}) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value);
  };
  return (
    <SearchFieldBox data-testid="SearchField-SearchFieldBox">
      <TooltipLabel
        data-testid={`SearchField-SearchFieldBox-${labelTypographyToken}-${labelColorToken}`}
        label={label}
        labelColorToken={labelColorToken}
        labelTypographyToken={labelTypographyToken}
        tooltip={tooltip}
        tooltipColorToken={tooltipColorToken}
      />
      <TextInputStyled
        data-testid={`SearchField-SearchFieldBox-TextInputStyled`}
        disabled={disabled}
        error={error}
        placeholder={placeHolder}
        type="text"
        typographyToken={typographyToken}
        value={value}
        onChange={handleOnChange}
      />
    </SearchFieldBox>
  );
};
