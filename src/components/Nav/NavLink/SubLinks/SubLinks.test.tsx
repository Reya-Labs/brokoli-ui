import { render, screen } from '@testing-library/react';
import React from 'react';
import { HashRouter, useLocation } from 'react-router-dom';

import { SubLinks } from './SubLinks';

jest.mock(
  'react-router-dom',
  () =>
    ({
      ...jest.requireActual('react-router-dom'),
      useLocation: jest.fn(),
    } as unknown),
);

describe('<SubLinks />', () => {
  it('renders the correct number of SubLinks', () => {
    const subLinks = [
      { text: 'SubLink 1', link: '/sublink-1', isNew: true },
      { text: 'SubLink 2', link: '/sublink-2' },
      { text: 'SubLink 3', link: '/sublink-3' },
    ];
    (useLocation as jest.Mock).mockReturnValueOnce({ pathname: '/sublink-1' });
    render(
      <HashRouter>
        <SubLinks subLinks={subLinks} onClick={() => {}} />
      </HashRouter>,
    );
    expect(screen.getAllByTestId('SubLinkButton').length).toBe(2);
    expect(screen.getAllByTestId('ActiveSubLinkButton').length).toBe(1);
  });
});
