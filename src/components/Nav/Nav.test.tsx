import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Nav, NavProps } from './index';

describe('<Nav />', () => {
  const navProps: NavProps['links'] = [
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
      text: 'Fixed Borrow',
      link: 'FIXED_BORROW',
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
      screen.getAllByTestId('NavLinkButton')[3].querySelector('[data-testid="AttentionIndicator"]'),
    ).toBeInTheDocument();
    expect(
      screen.getAllByTestId('NavLinkButton')[4].querySelector('[data-testid="AttentionIndicator"]'),
    ).toBeInTheDocument();
  });
});
