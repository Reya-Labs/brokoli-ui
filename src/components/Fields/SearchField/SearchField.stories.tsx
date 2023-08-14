import styled from '@emotion/styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import { Highlight } from '../../Highlight';
import { Typography } from '../../Typography';
import { SearchField, SearchFieldProps } from './index';
import { SearchItemRendererProps } from './SearchList';

export default {
  args: {},
  component: SearchField,
  title: 'Components/Fields/SearchField',
} as ComponentMeta<typeof SearchField>;

const Template: ComponentStory<typeof SearchField> = (args) => {
  const [selectedItemId, setSelectedItemId] = useState('');
  return (
    <SearchField {...args} selectedItemId={selectedItemId} onItemSelected={setSelectedItemId} />
  );
};

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      id: '1',
      label: 'Ethereum',
    },
    {
      id: '5',
      label: 'Görli',
    },
    {
      id: '42161',
      label: 'Arbitrum One',
    },
    {
      id: '421613',
      label: 'Arbitrum Görli',
    },
  ],
};

type CustomItemType = SearchFieldProps['items'][0] & {
  extra: string;
};

const customItems: CustomItemType[] = [
  {
    extra: 'The mainnet',
    id: '1',
    label: 'Ethereum',
  },
  {
    extra: 'The testnet',
    id: '5',
    label: 'Görli',
  },
  {
    extra: 'The Arbitrum mainnet',
    id: '42161',
    label: 'Arbitrum One',
  },
  {
    extra: 'The Arbitrum testnet',
    id: '421613',
    label: 'Arbitrum Görli',
  },
];

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const itemRenderer = ({ item, searchedValue }: SearchItemRendererProps) => {
  const { label, extra } = item as CustomItemType;
  return (
    <Wrapper>
      <Typography colorToken="lavenderWeb2" typographyToken="primaryBodySmallRegular">
        <Highlight highlight={searchedValue}>{label}</Highlight>
      </Typography>
      <Typography colorToken="lavenderWeb2" typographyToken="primaryBodySmallRegular">
        <Highlight highlight={searchedValue}>{extra}</Highlight>
      </Typography>
    </Wrapper>
  );
};

const itemFilter = (item: SearchFieldProps['items'][0], value: string) => {
  const { label, extra } = item as CustomItemType;
  return !value
    ? true
    : label.toLowerCase().includes(value.toLowerCase()) ||
        extra.toLowerCase().includes(value.toLowerCase());
};

export const WithCustomisation = Template.bind({});
WithCustomisation.args = {
  itemFilter,
  itemRenderer,
  items: customItems,
  label: 'Search',
  labelColorToken: 'lavenderWeb2',
  labelTypographyToken: 'primaryBodySmallRegular',
  placeHolder: 'Type to search',
  tooltip: 'Make sure enter valid data!',
  tooltipColorToken: 'lavenderWeb2',
};
