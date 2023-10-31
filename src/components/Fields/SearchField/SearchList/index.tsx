import React, { useLayoutEffect, useState } from 'react';
import AnimateHeight from 'react-animate-height';

import { Highlight } from '../../../Highlight';
import { Typography } from '../../../Typography';
import { ItemsWrapper, ItemWrapper } from './SearchList.styled';

type BaseItem = {
  id: string;
  label: string;
};

export type SearchItemRendererProps = { item: BaseItem; searchedValue?: string };
export type SearchListProps = {
  items: BaseItem[];
  itemRenderer?: React.FunctionComponent<SearchItemRendererProps>;
  itemFilter?: (item: BaseItem, value: string) => boolean;
  parentWidth: number;
  searchedValue?: string;
  onItemClick: (item: BaseItem) => void;
  selectedItemUntouched: boolean;
};

const defaultItemRenderer = (props: SearchItemRendererProps) => {
  const { searchedValue, item } = props;
  return (
    <Typography colorToken="white300" typographyToken="primaryBodySmallRegular">
      <Highlight highlight={searchedValue}>{item.label}</Highlight>
    </Typography>
  );
};

const defaultItemFilter = (item: BaseItem, value: string) =>
  !value ? true : item.label.toLowerCase().includes(value.toLowerCase());

export const SearchList: React.FunctionComponent<SearchListProps> = ({
  items,
  itemRenderer = defaultItemRenderer,
  itemFilter = defaultItemFilter,
  parentWidth,
  searchedValue = '',
  onItemClick,
  selectedItemUntouched,
}) => {
  const [height, setHeight] = useState<'auto' | number>(0);
  const [width, setWidth] = useState<'auto' | number>('auto');

  useLayoutEffect(() => {
    setHeight('auto');
    setWidth(parentWidth);
  }, [parentWidth]);

  const filteredItems = selectedItemUntouched
    ? items
    : items.filter((item) => itemFilter(item, searchedValue));
  return (
    <AnimateHeight
      duration={300}
      easing="ease-in"
      height={height}
      id="SearchField-ItemsWrapper"
      // eslint-disable-next-line react/forbid-component-props
      style={{
        width,
      }}
    >
      <ItemsWrapper>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <ItemWrapper
              key={`${item.id}-${index}`}
              backgroundColorToken={index % 2 === 0 ? 'black800' : 'black900'}
              onClick={() => onItemClick(item)}
            >
              {itemRenderer({ item, searchedValue })}
            </ItemWrapper>
          ))
        ) : (
          <ItemWrapper backgroundColorToken="black800">
            <Typography colorToken="warning100" typographyToken="primaryBodySmallRegular">
              No items match the filter...
            </Typography>
          </ItemWrapper>
        )}
      </ItemsWrapper>
    </AnimateHeight>
  );
};
