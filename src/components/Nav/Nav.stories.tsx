import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';
import { Link } from 'react-router-dom';

import { Nav } from '.';

export default {
  argTypes: {},
  component: Nav,
  title: 'Components/Nav',
} as Meta<typeof Nav>;

const Template: StoryFn<typeof Nav> = (args) => <Nav {...args} />;

export const Default: StoryObj<typeof Nav> = {
  args: {
    links: [
      {
        subLinks: [
          {
            link: `/POOLS`,
            text: 'Pools',
          },
          {
            link: `/PORTFOLIO`,
            text: 'Portfolio',
          },
        ],
        text: 'Traders',
      },
      {
        subLinks: [
          {
            link: `/POOLS`,
            text: 'Pools',
          },
          {
            link: `/OPTIMISERS`,
            text: 'Optimisers',
          },
          {
            isNew: true,
            link: `/PORTFOLIO`,
            text: 'Portfolio',
          },
        ],
        text: 'Liquidity Providers',
      },
      {
        isNew: true,
        link: 'LEADERBOARD',
        text: 'Leaderboard',
      },
      {
        isNew: true,
        link: 'PROFILE',
        text: 'Profile',
      },
      {
        colorToken: 'rainbow',
        link: 'VOYAGE',
        text: 'Voyage',
      },
    ],
  },

  render: Template,
};

export const WithCustomComponentForLink: StoryObj<typeof Nav> = {
  args: {
    Component: Link,
    links: [
      {
        subLinks: [
          {
            link: `/POOLS`,
            text: 'Pools',
          },
          {
            link: `/PORTFOLIO`,
            text: 'Portfolio',
          },
        ],
        text: 'Traders',
      },
      {
        subLinks: [
          {
            link: `/POOLS`,
            text: 'Pools',
          },
          {
            link: `/OPTIMISERS`,
            text: 'Optimisers',
          },
          {
            isNew: true,
            link: `/PORTFOLIO`,
            text: 'Portfolio',
          },
        ],
        text: 'Liquidity Providers',
      },
      {
        isNew: true,
        link: 'LEADERBOARD',
        text: 'Leaderboard',
      },
      {
        isNew: true,
        link: 'PROFILE',
        text: 'Profile',
      },
      {
        colorToken: 'rainbow',
        link: 'VOYAGE',
        text: 'Voyage',
      },
    ],
  },

  render: Template,
};
