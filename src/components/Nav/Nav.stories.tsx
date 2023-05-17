import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Nav } from './index';

export default {
  title: 'Components/Nav',
  component: Nav,
  argTypes: {},
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = (args) => (
  <BrowserRouter>
    <Nav {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  links: [
    {
      text: 'Traders',
      subLinks: [
        {
          text: 'Pools',
          link: `/POOLS`,
        },
        {
          text: 'Portfolio',
          link: `/PORTFOLIO`,
        },
      ],
    },
    {
      text: 'Liquidity Providers',
      subLinks: [
        {
          text: 'Pools',
          link: `/POOLS`,
        },
        {
          text: 'Optimisers',
          link: `/OPTIMISERS`,
        },
        {
          text: 'Portfolio',
          link: `/PORTFOLIO`,
          isNew: true,
        },
      ],
    },
    {
      isNew: true,
      text: 'Leaderboard',
      link: 'LEADERBOARD',
    },
    {
      isNew: true,
      text: 'Profile',
      link: 'PROFILE',
    },
    {
      text: 'Voyage',
      link: 'VOYAGE',
      colorToken: 'rainbow',
    },
  ],
};
