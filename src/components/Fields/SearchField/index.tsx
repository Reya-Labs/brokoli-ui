import React, { useState } from 'react';

import { ColorTokens } from '../../../foundation/Colors';
import { ExclaimTooltipProps } from '../../ExclaimTooltip';
import { Popover } from '../../Popover';
import { ToggleCaret } from '../../ToggleCaret';
import { TooltipLabel } from '../../TooltipLabel';
import { TypographyToken } from '../../Typography';
import {
  SearchFieldBox,
  SearchTextInputAndCaretBox,
  TextInputStyled,
  ToggleCaretBox,
} from './SearchField.styled';
import { SearchList, SearchListProps } from './SearchList';

export type SearchFieldProps = {
  items: SearchListProps['items'];
  itemRenderer?: SearchListProps['itemRenderer'];
  itemFilter?: SearchListProps['itemFilter'];
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
  disabled,
  error,
  labelColorToken = 'lavenderWeb2',
  labelTypographyToken = 'primaryBodySmallRegular',
  label,
  tooltipColorToken,
  tooltip,
  placeHolder,
  items,
  typographyToken = 'primaryBodyMediumRegular',
  itemRenderer,
  itemFilter,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<string | undefined>('');
  const handleOnClickOutside = () => {
    setIsOpen(false);
  };
  const handleOnFocus = () => {
    setIsOpen(true);
  };
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Popover
      content={
        <SearchList
          itemFilter={itemFilter}
          itemRenderer={itemRenderer}
          items={items}
          parentId="SearchField-SearchFieldBox"
          searchedValue={value}
        />
      }
      data-testid="SearchField-ItemsWrapper"
      isOpen={isOpen}
      onClickOutside={handleOnClickOutside}
    >
      <SearchFieldBox data-testid="SearchField-SearchFieldBox" id="SearchField-SearchFieldBox">
        <TooltipLabel
          data-testid={`SearchField-SearchFieldBox-${labelTypographyToken}-${labelColorToken}`}
          label={label}
          labelColorToken={labelColorToken}
          labelTypographyToken={labelTypographyToken}
          tooltip={tooltip}
          tooltipColorToken={tooltipColorToken}
        />
        <SearchTextInputAndCaretBox>
          <TextInputStyled
            data-testid={`SearchField-SearchFieldBox-TextInputStyled`}
            disabled={disabled}
            error={error}
            placeholder={placeHolder}
            type="text"
            typographyToken={typographyToken}
            value={value}
            onChange={handleOnChange}
            onFocus={handleOnFocus}
          />
          <ToggleCaretBox>
            <ToggleCaret isOpen={isOpen} />
          </ToggleCaretBox>
        </SearchTextInputAndCaretBox>
      </SearchFieldBox>
    </Popover>
  );
};
