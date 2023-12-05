import { Meta, StoryObj } from '@storybook/react';

import { MarketToken } from '.';

export default {
  args: {},
  component: MarketToken,
  title: 'Components/MarketToken',
} as Meta<typeof MarketToken>;

export const Default: StoryObj<typeof MarketToken> = {
  args: {
    colorToken: 'white100',
    iconSize: 30,
    market: 'Aave',
    token: 'usdc',
    typographyToken: 'h2Bold',
  },
};

export const WithSmallerIcon: StoryObj<typeof MarketToken> = {
  args: {
    colorToken: 'white100',
    iconSize: 24,
    market: 'Lido',
    token: 'dai',
    typographyToken: 'primaryHeader3Bold',
  },
};

export const WithNoIcons: StoryObj<typeof MarketToken> = {
  args: {
    colorToken: 'white100',
    iconSize: 0,
    market: 'Lido',
    token: 'dai',
    typographyToken: 'primaryHeader3Bold',
  },
};

export const WithNoMarket: StoryObj<typeof MarketToken> = {
  args: {
    colorToken: 'white100',
    iconSize: 24,
    token: 'dai',
    typographyToken: 'primaryHeader3Bold',
  },
};

export const WithNoToken: StoryObj<typeof MarketToken> = {
  args: {
    colorToken: 'white100',
    iconSize: 24,
    market: 'Aave',
    typographyToken: 'primaryHeader3Bold',
  },
};

export const WithCustomFormatter: StoryObj<typeof MarketToken> = {
  args: {
    colorToken: 'white100',
    iconSize: 24,
    infoFormatter: ({ market, token }) =>
      `This is custom formatter ${market || ''} - ${token || ''}`,
    market: 'Lido',
    token: 'dai',
    typographyToken: 'primaryHeader3Bold',
  },
};
