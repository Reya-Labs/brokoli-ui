import styled from '@emotion/styled';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Typography } from '../../Typography';
import { MarketIcon } from '.';
import { MarketIconMap } from './Icon';

export default {
  args: {},
  component: MarketIcon,
  title: 'Components/Icons/MarketIcon',
} as Meta<typeof MarketIcon>;

export const AAVE: StoryObj<typeof MarketIcon> = {
  args: {
    market: 'aave',
  },
};
export const COMPOUND: StoryObj<typeof MarketIcon> = {
  args: {
    market: 'compound',
  },
};

export const GLP: StoryObj<typeof MarketIcon> = {
  args: {
    market: 'glp',
  },
};

export const LIDO: StoryObj<typeof MarketIcon> = {
  args: {
    market: 'lido',
  },
};

export const ROCKET: StoryObj<typeof MarketIcon> = {
  args: {
    market: 'rocket',
  },
};

export const SOFR: StoryObj<typeof MarketIcon> = {
  args: {
    market: 'sofr',
  },
};

export const SOL: StoryObj<typeof MarketIcon> = {
  args: {
    market: 'sol',
  },
};

const Wrapper = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(6, 1fr);
`;

const IconBox = styled.div`
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.black100};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 8px;
  background: ${({ theme }) => theme.colors.black500};
`;

export const AllIcons: StoryObj<typeof MarketIcon> = {
  args: {},
  render: (args) => (
    <Wrapper>
      {Object.keys(MarketIconMap).map((market) => (
        <IconBox key={market}>
          <MarketIcon {...args} market={market} />
          <Typography colorToken="white100" typographyToken="bodyXSmallMedium">
            {market}
          </Typography>
        </IconBox>
      ))}
    </Wrapper>
  ),
};

export const WithSize: StoryObj<typeof MarketIcon> = {
  args: {
    market: 'aave',
    size: 50,
  },
};
