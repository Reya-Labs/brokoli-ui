import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';

import { NavLink } from './NavLink';

jest.mock(
  'react-router-dom',
  () =>
    ({
      ...jest.requireActual('react-router-dom'),
      useLocation: jest.fn(),
    } as unknown),
);

jest.mock('react-tiny-popover', () => ({
  Popover: (props: Record<string, never>) => <div {...props} />,
}));

describe('<NavLink />', () => {
  it('renders the correct link text', () => {
    (useLocation as jest.Mock).mockReturnValueOnce({ pathname: '/some-link' });
    render(
      <BrowserRouter>
        <NavLink isNew={false} link="/some-link">
          Some Link
        </NavLink>
      </BrowserRouter>,
    );
    expect(screen.getByText('Some Link')).toBeInTheDocument();
  });

  it('renders the new link indicator when isNew is true', () => {
    (useLocation as jest.Mock).mockReturnValueOnce({ pathname: '/some-link' });
    render(
      <BrowserRouter>
        <NavLink isNew={true} link="/some-link">
          Some Link
        </NavLink>
      </BrowserRouter>,
    );
    expect(screen.getByTestId('AttentionIndicator-wildStrawberry')).toBeInTheDocument();
  });

  it('renders the ActiveNavLinkButton when the link is active', () => {
    (useLocation as jest.Mock).mockReturnValueOnce({ pathname: '/some-link' });
    render(
      <BrowserRouter>
        <NavLink isNew={false} link="/some-link">
          Some Link
        </NavLink>
      </BrowserRouter>,
    );
    expect(screen.getByTestId('ActiveNavLinkButton')).toBeInTheDocument();
  });

  it('renders the NavLinkPopover when it has subLinks', () => {
    (useLocation as jest.Mock).mockReturnValue({ pathname: '/some-link' });
    render(
      <BrowserRouter>
        <NavLink
          isNew={false}
          link="/some-link"
          subLinks={[{ link: '/sub-link-1', text: 'SubLink 1' }]}
        >
          Some Link
        </NavLink>
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByText('Some Link'));
    expect(screen.getByTestId('NavLinkPopover')).toBeInTheDocument();
  });
});
