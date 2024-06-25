import styled from '@emotion/styled';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Typography } from '../../Typography';
import { TokenIcon } from '.';
import { TokenIconMap } from './Icon';

export default {
  args: {},
  component: TokenIcon,
  title: 'Components/Icons/TokenIcon',
} as Meta<typeof TokenIcon>;

export const BTC: StoryObj<typeof TokenIcon> = {
  args: {
    token: 'btc',
  },
};
export const DAI: StoryObj<typeof TokenIcon> = {
  args: {
    token: 'dai',
  },
};
export const ETH: StoryObj<typeof TokenIcon> = {
  args: {
    token: 'eth',
  },
};

export const MATIC: StoryObj<typeof TokenIcon> = {
  args: {
    token: 'matic',
  },
};

export const RETH: StoryObj<typeof TokenIcon> = {
  args: {
    token: 'reth',
  },
};

export const RUSD: StoryObj<typeof TokenIcon> = {
  args: {
    token: 'rusd',
  },
};

export const SETH: StoryObj<typeof TokenIcon> = {
  args: {
    token: 'seth',
  },
};

export const SOL: StoryObj<typeof TokenIcon> = {
  args: {
    token: 'sol',
  },
};

export const USDC: StoryObj<typeof TokenIcon> = {
  args: {
    token: 'usdc',
  },
};

export const USDCE: StoryObj<typeof TokenIcon> = {
  args: {
    token: 'usdc.e',
  },
};

export const USDT: StoryObj<typeof TokenIcon> = {
  args: {
    token: 'usdt',
  },
};

export const WBTC: StoryObj<typeof TokenIcon> = {
  args: {
    token: 'wbtc',
  },
};

export const WETH: StoryObj<typeof TokenIcon> = {
  args: {
    token: 'weth',
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

export const AllIcons: StoryObj<typeof TokenIcon> = {
  args: {},
  render: (args) => (
    <Wrapper>
      {Object.keys(TokenIconMap).map((token) => (
        <IconBox key={token}>
          <TokenIcon {...args} token={token} />
          <Typography colorToken="white100" typographyToken="bodyXSmallMedium">
            {token}
          </Typography>
        </IconBox>
      ))}
    </Wrapper>
  ),
};

export const WithSize: StoryObj<typeof TokenIcon> = {
  args: {
    size: 50,
    token: 'eth',
  },
};
