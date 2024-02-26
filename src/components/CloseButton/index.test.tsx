import React from 'react';

import { fireEvent, render, screen } from '../../test-utils';
import { CloseButton } from '.';

describe('<CloseButton />', () => {
  it('renders with default props', () => {
    render(<CloseButton />);

    const closeButton = screen.getByTestId('CloseButton-CloseButtonStyled-white');
    expect(closeButton).toBeInTheDocument();
  });

  it('renders with provided color token', () => {
    render(<CloseButton colorToken="error" />);

    const closeButton = screen.getByTestId('CloseButton-CloseButtonStyled-error');
    expect(closeButton).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<CloseButton onClick={handleClick} />);

    const closeButton = screen.getByTestId('CloseButton-CloseButtonStyled-white');
    fireEvent.click(closeButton);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with provided backgroundColorToken', () => {
    render(<CloseButton backgroundColorToken="black800" />);

    const closeButton = screen.getByTestId('CloseButton-CloseButtonStyled-white');
    expect(closeButton).toBeInTheDocument();
  });
});
