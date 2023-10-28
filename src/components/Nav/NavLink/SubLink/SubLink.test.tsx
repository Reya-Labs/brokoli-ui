import React from 'react';

import { fireEvent, render, screen } from '../../../../test-utils';
import { SubLink } from './SubLink';

describe('<SubLink />', () => {
  it('renders the correct link text', () => {
    render(
      <SubLink
        isActive={false}
        isNew={false}
        link="/some-link"
        text="Some Link"
        onClick={() => {}}
      />,
    );
    expect(screen.getByText('Some Link')).toBeInTheDocument();
  });

  it('renders the new link indicator when isNew is true', () => {
    render(
      <SubLink
        isActive={false}
        isNew={true}
        link="/some-link"
        text="Some Link"
        onClick={() => {}}
      />,
    );
    expect(screen.getByTestId('AttentionIndicator-wildStrawberry')).toBeInTheDocument();
  });

  it('renders the ActiveSubLinkButton when isActive is true', () => {
    render(
      <SubLink
        isActive={true}
        isNew={false}
        link="/some-link"
        text="Some Link"
        onClick={() => {}}
      />,
    );
    expect(screen.getByTestId('ActiveSubLinkButton')).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const onClick = jest.fn();
    render(
      <SubLink
        isActive={false}
        isNew={false}
        link="/some-link"
        text="Some Link"
        onClick={onClick}
      />,
    );
    fireEvent.click(screen.getByText('Some Link'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
