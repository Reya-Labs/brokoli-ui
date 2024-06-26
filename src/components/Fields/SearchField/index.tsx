import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { ColorTokens } from '../../../foundation/Colors';
import { TypographyTokens } from '../../../foundation/Typography';
import { ExclaimTooltipProps } from '../../ExclaimTooltip';
import { Popover } from '../../Popover';
import { ToggleCaret } from '../../ToggleCaret';
import { TooltipLabel, TooltipLabelProps } from '../../TooltipLabel';
import { FieldStyleProps } from '../_common/common.styled';
import {
  SearchFieldBox,
  SearchTextInputAndCaretBox,
  TextInputStyled,
  ToggleCaretBox,
} from './SearchField.styled';
import { SearchList, SearchListProps } from './SearchList';

type SearchItem = SearchListProps['items'][0];

export type SearchFieldProps = {
  className?: string;
  disabled?: boolean;
  error?: boolean;
  itemFilter?: SearchListProps['itemFilter'];
  itemRenderer?: SearchListProps['itemRenderer'];
  items: SearchListProps['items'];
  label?: string;
  labelAttentionIndicatorColorToken?: ColorTokens;
  labelColorToken?: ColorTokens;
  labelTypographyToken?: TypographyTokens;
  onItemSelected?: (id: SearchItem['id']) => void;
  placeHolder?: string;
  selectedItemId?: SearchItem['id'];
  tooltip?: ExclaimTooltipProps['children'];
  tooltipColorToken?: ColorTokens;
  tooltipTrigger?: TooltipLabelProps['tooltipTrigger'];
} & FieldStyleProps;

export const SearchField: React.FunctionComponent<SearchFieldProps> = ({
  disabled,
  error,
  labelColorToken = 'white300',
  labelTypographyToken = 'bodySmallMedium',
  label,
  tooltipColorToken,
  tooltip,
  placeHolder,
  items = [],
  typographyToken = 'bodyMediumMedium',
  itemRenderer,
  itemFilter,
  selectedItemId,
  onItemSelected,
  className,
  labelAttentionIndicatorColorToken,
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
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<string | undefined>('');
  const [width, setWidth] = useState(0);

  const inputRef = useCallback((node: HTMLInputElement) => {
    if (node !== null) {
      setWidth(node.getBoundingClientRect().width);
    }
  }, []);

  const closePopover = () => setIsOpen(false);
  const handleOnFocus = () => setIsOpen(true);
  const handleOnToggleClick = () => setIsOpen(!isOpen);
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  const selectItem = useCallback(
    (itemId: string | undefined) => {
      if (!itemId || !items || items.length === 0) {
        setValue('');
        return;
      }
      const selectedItem = items.find((i) => i.id.toLowerCase() === itemId.toLowerCase());
      if (selectedItem) {
        setValue(selectedItem.label);
        closePopover();
      } else {
        setValue('');
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
          tooltipTrigger={tooltipTrigger}
        />
        <SearchTextInputAndCaretBox>
          <TextInputStyled
            ref={inputRef}
            backgroundColorToken={backgroundColorToken}
            borderColorToken={borderColorToken}
            className={className}
            colorToken={colorToken}
            data-testid={`SearchField-SearchFieldBox-TextInputStyled`}
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
            placeholder={placeHolder}
            placeholderColorToken={placeholderColorToken}
            type="text"
            typographyToken={typographyToken}
            value={value}
            onChange={handleOnChange}
            onFocus={handleOnFocus}
          />
          {disabled ? null : (
            <ToggleCaretBox onClick={disabled ? undefined : handleOnToggleClick}>
              <ToggleCaret disabled={disabled} isOpen={isOpen} />
            </ToggleCaretBox>
          )}
        </SearchTextInputAndCaretBox>
      </SearchFieldBox>
    </Popover>
  );
};
