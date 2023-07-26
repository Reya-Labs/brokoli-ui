import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';

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
      { isNew: true, link: '/sublink-1', text: 'SubLink 1' },
      { link: '/sublink-2', text: 'SubLink 2' },
      { link: '/sublink-3', text: 'SubLink 3' },
    ];
    (useLocation as jest.Mock).mockReturnValue({ pathname: '/sublink-1' });
    render(
      <BrowserRouter>
        <SubLinks subLinks={subLinks} onClick={() => {}} />
      </BrowserRouter>,
    );
    expect(screen.getAllByTestId('SubLinkButton').length).toBe(2);
    expect(screen.getAllByTestId('ActiveSubLinkButton').length).toBe(1);
  });
});
