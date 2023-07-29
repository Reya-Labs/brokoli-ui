import React, { useLayoutEffect, useState } from 'react';
import AnimateHeight from 'react-animate-height';

import { Typography } from '../../../Typography';
import { ItemsWrapper, ItemWrapper } from './SearchList.styled';

type BaseItem = {
  id: string;
  label: string;
};

export type SearchListProps = {
  items: BaseItem[];
  itemRenderer?: (item: BaseItem, index: number) => React.ReactNode;
  itemFilter?: (item: BaseItem, value: string) => boolean;
  parentId: string;
  searchedValue?: string;
};

const defaultItemRenderer = (item: BaseItem) => {
  return (
    <React.Fragment>
      <Typography colorToken="lavenderWeb2" typographyToken="primaryBodySmallRegular">
        {item.label}
      </Typography>
    </React.Fragment>
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
        {items
          .filter((item) => itemFilter(item, searchedValue))
          .map((item, index) => (
            <ItemWrapper
              key={`${item.id}-${index}`}
              backgroundColorToken={index % 2 === 0 ? 'liberty7' : 'liberty8'}
            >
              {itemRenderer(item, index)}
            </ItemWrapper>
          ))}
      </ItemsWrapper>
    </AnimateHeight>
  );
};
