import React, { useLayoutEffect, useState } from 'react';
import AnimateHeight from 'react-animate-height';

import { TokenIcon, TokenIconProps } from '../../../Icons';
import { TokenTypography, TokenTypographyProps } from '../../../TokenTypography';
import { Typography } from '../../../Typography';
import { ItemsWrapper, ItemWrapper, TokenTypographyBox } from './MarginAmountsList.styled';

type MarginAmountListItem = {
  token: TokenIconProps['token'];
  valueFormatted: string;
  valueSuffix: TokenTypographyProps['token'];
  value: number;
};

export type MarginAmountListProps = {
  items: MarginAmountListItem[];
  parentId: string;
  onItemClick: (item: MarginAmountListItem) => void;
};

export const MarginAmountList: React.FunctionComponent<MarginAmountListProps> = ({
  items,
  parentId,
  onItemClick,
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
      id="MarginAmountList-ItemsWrapper"
      // eslint-disable-next-line react/forbid-component-props
      style={{
        width,
      }}
    >
      <ItemsWrapper>
        {(items || []).map((item, index) => (
          <ItemWrapper
            key={`${item.token}-${index}`}
            backgroundColorToken={index % 2 === 0 ? 'liberty7' : 'liberty8'}
            onClick={() => onItemClick(item)}
          >
            <TokenTypographyBox>
              <TokenIcon size={20} token={item.token} />
              <Typography colorToken="lavenderWeb2" typographyToken="primaryBodySmallRegular">
                {item.token.toUpperCase()}
              </Typography>
            </TokenTypographyBox>
            <TokenTypography
              colorToken="lavenderWeb"
              token={item.valueSuffix}
              typographyToken="secondaryBodySmallRegular"
              value={item.valueFormatted}
            />
          </ItemWrapper>
        ))}
      </ItemsWrapper>
    </AnimateHeight>
  );
};
