import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { ColorTokens } from '../../../foundation/Colors';
import { TypographyTokens } from '../../../foundation/Typography';
import { ExclaimTooltipProps } from '../../ExclaimTooltip';
import { Popover } from '../../Popover';
import { ToggleCaret } from '../../ToggleCaret';
import { TooltipLabel } from '../../TooltipLabel';
import {
  SearchFieldBox,
  SearchTextInputAndCaretBox,
  TextInputStyled,
  ToggleCaretBox,
} from './SearchField.styled';
import { SearchList, SearchListProps } from './SearchList';

type SearchItem = SearchListProps['items'][0];

export type SearchFieldProps = {
  items: SearchListProps['items'];
  itemRenderer?: SearchListProps['itemRenderer'];
  itemFilter?: SearchListProps['itemFilter'];
  disabled?: boolean;
  error?: boolean;
  label?: string;
  labelColorToken?: ColorTokens;
  labelTypographyToken?: TypographyTokens;
  tooltip?: ExclaimTooltipProps['children'];
  tooltipColorToken?: ColorTokens;
  typographyToken: TypographyTokens;
  placeHolder?: string;
  selectedItemId?: SearchItem['id'];
  onItemSelected?: (id: SearchItem['id']) => void;
  className?: string;
  labelAttentionIndicatorColorToken?: ColorTokens;
};

export const SearchField: React.FunctionComponent<SearchFieldProps> = ({
  disabled,
  error,
  labelColorToken = 'white300',
  labelTypographyToken = 'bodySmallRegular',
  label,
  tooltipColorToken,
  tooltip,
  placeHolder,
  items,
  typographyToken = 'bodyMediumRegular',
  itemRenderer,
  itemFilter,
  selectedItemId,
  onItemSelected,
  className,
  labelAttentionIndicatorColorToken,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<string | undefined>('');
  const [width, setWidth] = useState(0);

  const inputRef = useCallback((node: HTMLInputElement) => {
    if (node !== null) {
      setWidth(node.getBoundingClientRect().width);
    }
  }, []);

  const closePopover = () => {
    setIsOpen(false);
  };
  const handleOnFocus = () => {
    setIsOpen(true);
  };
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const selectItem = useCallback(
    (itemId: string | undefined) => {
      if (!itemId || !items) {
        return;
      }
      const selectedItem = items.find((i) => i.id.toLowerCase() === itemId.toLowerCase());
      if (selectedItem) {
        setValue(selectedItem.label);
        closePopover();
      }
    },
    [items],
  );
  const handleOnItemClick = (item: SearchItem) => {
    onItemSelected && onItemSelected(item.id);
    selectItem(item.id);
  };

  useEffect(() => {
    selectItem(selectedItemId);
  }, [selectItem, selectedItemId]);

  const selectedItem = useMemo(
    () =>
      selectedItemId
        ? items.find((i) => i.id.toLowerCase() === selectedItemId.toLowerCase())
        : null,
    [items, selectedItemId],
  );
  const selectedItemUntouched = selectedItem ? value === selectedItem.label : false;
  return (
    <Popover
      content={
        <SearchList
          itemFilter={itemFilter}
          itemRenderer={itemRenderer}
          items={items}
          parentWidth={width}
          searchedValue={value}
          selectedItemUntouched={selectedItemUntouched}
          onItemClick={handleOnItemClick}
        />
      }
      data-testid="SearchField-ItemsWrapper"
      isOpen={isOpen}
      onClickOutside={closePopover}
    >
      <SearchFieldBox data-testid="SearchField-SearchFieldBox">
        <TooltipLabel
          attentionIndicatorColorToken={labelAttentionIndicatorColorToken}
          data-testid={`SearchField-SearchFieldBox-${labelTypographyToken}-${labelColorToken}`}
          label={label}
          labelColorToken={labelColorToken}
          labelTypographyToken={labelTypographyToken}
          tooltip={tooltip}
          tooltipColorToken={tooltipColorToken}
        />
        <SearchTextInputAndCaretBox>
          <TextInputStyled
            ref={inputRef}
            className={className}
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
          {disabled ? null : (
            <ToggleCaretBox>
              <ToggleCaret disabled={disabled} isOpen={isOpen} />
            </ToggleCaretBox>
          )}
        </SearchTextInputAndCaretBox>
      </SearchFieldBox>
    </Popover>
  );
};
