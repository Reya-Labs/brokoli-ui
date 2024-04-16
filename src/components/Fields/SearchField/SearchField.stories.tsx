import styled from '@emotion/styled';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { Highlight } from '../../Highlight';
import { Typography } from '../../Typography';
import { SearchField, SearchFieldProps } from '.';
import { SearchItemRendererProps } from './SearchList';

export default {
  args: {},
  component: SearchField,
  title: 'Components/Fields/SearchField',
} as Meta<typeof SearchField>;

const Template: StoryFn<typeof SearchField> = (args) => {
  const [selectedItemId, setSelectedItemId] = useState(args.selectedItemId);
  return (
    <SearchField {...args} selectedItemId={selectedItemId} onItemSelected={setSelectedItemId} />
  );
};

const mockItems = [
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
];

export const Default: StoryObj<typeof SearchField> = {
  args: {
    items: mockItems,
  },

  render: Template,
};

export const WithDisabled: StoryObj<typeof SearchField> = {
  args: {
    disabled: true,
    items: mockItems,
    selectedItemId: mockItems[0].id,
  },
  render: Template,
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

const ItemRenderer: React.FunctionComponent<SearchItemRendererProps> = ({
  item,
  searchedValue,
}) => {
  const { label, extra } = item as CustomItemType;
  return (
    <Wrapper>
      <Typography colorToken="white300" typographyToken="bodySmallMedium">
        <Highlight highlight={searchedValue}>{label}</Highlight>
      </Typography>
      <Typography colorToken="white300" typographyToken="bodySmallMedium">
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

export const WithCustomisation: StoryObj<typeof SearchField> = {
  args: {
    itemFilter,
    itemRenderer: ItemRenderer,
    items: customItems,
    label: 'Search',
    labelColorToken: 'white300',
    labelTypographyToken: 'bodySmallMedium',
    placeHolder: 'Type to search',
    tooltip: 'Make sure enter valid data!',
    tooltipColorToken: 'white300',
  },

  render: Template,
};

export const WithCustomisationManyItems: StoryObj<typeof SearchField> = {
  args: {
    itemFilter,
    itemRenderer: ItemRenderer,
    items: [
      ...customItems,
      ...customItems,
      ...customItems,
      ...customItems,
      ...customItems,
      ...customItems,
    ],
    label: 'Search',
    labelColorToken: 'white300',
    labelTypographyToken: 'bodySmallMedium',
    placeHolder: 'Type to search',
    tooltip: 'Make sure enter valid data!',
    tooltipColorToken: 'white300',
  },

  render: Template,
};
