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
  parentId: string;
  searchedValue?: string;
  onItemClick: (item: BaseItem) => void;
  selectedItemUntouched: boolean;
};

const defaultItemRenderer = (props: SearchItemRendererProps) => {
  const { searchedValue, item } = props;
  return (
    <Typography colorToken="lavenderWeb2" typographyToken="primaryBodySmallRegular">
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
  parentId,
  searchedValue = '',
  onItemClick,
  selectedItemUntouched,
}) => {
  const [height, setHeight] = useState<'auto' | number>(0);
  const [width, setWidth] = useState<'auto' | number>('auto');

  useLayoutEffect(() => {
    setHeight('auto');
    const elem = document.getElementById(parentId);
    if (elem) {
      const elemWidth = elem.getBoundingClientRect().width;
      setWidth(elemWidth);
    }
  }, [parentId]);

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
              backgroundColorToken={index % 2 === 0 ? 'liberty7' : 'liberty8'}
              onClick={() => onItemClick(item)}
            >
              {itemRenderer({ item, searchedValue })}
            </ItemWrapper>
          ))
        ) : (
          <ItemWrapper backgroundColorToken="liberty7">
            <Typography colorToken="orangeYellow" typographyToken="primaryBodySmallRegular">
              No items match the filter...
            </Typography>
          </ItemWrapper>
        )}
      </ItemsWrapper>
    </AnimateHeight>
  );
};
