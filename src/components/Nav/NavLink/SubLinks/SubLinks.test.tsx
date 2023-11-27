import React from 'react';

import { render, screen } from '../../../../test-utils';
import { useLocation } from '../useLocation';
import { SubLinks } from './SubLinks';

jest.mock(
  '../useLocation',
  () =>
    ({
      useLocation: jest.fn(),
    }) as unknown,
);

describe('<SubLinks />', () => {
  it('renders the correct number of SubLinks', () => {
    const subLinks = [
      { isNew: true, link: '/sublink-1', text: 'SubLink 1' },
      { link: '/sublink-2', text: 'SubLink 2' },
      { link: '/sublink-3', text: 'SubLink 3' },
    ];
    (useLocation as jest.Mock).mockReturnValue({ pathname: '/sublink-1' });
    render(<SubLinks subLinks={subLinks} onClick={() => {}} />);
    expect(screen.getAllByTestId('SubLinkButton').length).toBe(2);
    expect(screen.getAllByTestId('ActiveSubLinkButton').length).toBe(1);
  });
});
