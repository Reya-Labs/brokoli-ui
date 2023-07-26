import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Nav, NavProps } from './index';

describe('<Nav />', () => {
  const navProps: NavProps['links'] = [
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
      link: 'FIXED_BORROW',
      text: 'Fixed Borrow',
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
  ];

  it('renders the correct number of NavLinks', () => {
    render(
      <BrowserRouter>
        <Nav links={navProps} />
      </BrowserRouter>,
    );
    expect(screen.getAllByTestId('NavLinkButton').length).toBe(5);
  });

  it('renders the correct text for each NavLink', () => {
    render(
      <BrowserRouter>
        <Nav links={navProps} />
      </BrowserRouter>,
    );
    expect(screen.getAllByTestId('NavLinkButton')[0].textContent).toBe('Traders');
    expect(screen.getAllByTestId('NavLinkButton')[1].textContent).toBe('Liquidity Providers');
    expect(screen.getAllByTestId('NavLinkButton')[2].textContent).toBe('Fixed Borrow');
    expect(screen.getAllByTestId('NavLinkButton')[3].textContent).toBe('Leaderboard');
    expect(screen.getAllByTestId('NavLinkButton')[4].textContent).toBe('Profile');
  });

  it('renders the new link indicator for NavLinks with isNew prop', () => {
    render(
      <BrowserRouter>
        <Nav links={navProps} />
      </BrowserRouter>,
    );
    expect(
      screen
        .getAllByTestId('NavLinkButton')[3]
        .querySelector('[data-testid="AttentionIndicator-wildStrawberry"]'),
    ).toBeInTheDocument();
    expect(
      screen
        .getAllByTestId('NavLinkButton')[4]
        .querySelector('[data-testid="AttentionIndicator-wildStrawberry"]'),
    ).toBeInTheDocument();
  });
});
