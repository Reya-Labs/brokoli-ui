import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { SubLink } from './SubLink';

describe('<SubLink />', () => {
  it('renders the correct link text', () => {
    render(
      <BrowserRouter>
        <SubLink
          isActive={false}
          isNew={false}
          link="/some-link"
          text="Some Link"
          onClick={() => {}}
        />
      </BrowserRouter>,
    );
    expect(screen.getByText('Some Link')).toBeInTheDocument();
  });

  it('renders the new link indicator when isNew is true', () => {
    render(
      <BrowserRouter>
        <SubLink
          isActive={false}
          isNew={true}
          link="/some-link"
          text="Some Link"
          onClick={() => {}}
        />
      </BrowserRouter>,
    );
    expect(screen.getByTestId('AttentionIndicator')).toBeInTheDocument();
  });

  it('renders the ActiveSubLinkButton when isActive is true', () => {
    render(
      <BrowserRouter>
        <SubLink
          isActive={true}
          isNew={false}
          link="/some-link"
          text="Some Link"
          onClick={() => {}}
        />
      </BrowserRouter>,
    );
    expect(screen.getByTestId('ActiveSubLinkButton')).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const onClick = jest.fn();
    render(
      <BrowserRouter>
        <SubLink
          isActive={false}
          isNew={false}
          link="/some-link"
          text="Some Link"
          onClick={onClick}
        />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByText('Some Link'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
