import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Nav } from './index';

export default {
  argTypes: {},
  component: Nav,
  title: 'Components/Nav',
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
};
