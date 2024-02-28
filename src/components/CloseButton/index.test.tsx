import React from 'react';

import { fireEvent, render, screen } from '../../test-utils';
import { CloseButton } from '.';

describe('<CloseButton />', () => {
  it('renders with default props', () => {
    render(<CloseButton />);

    const closeButton = screen.getByTestId('CloseButton-CloseButtonStyled-white900');
    expect(closeButton).toBeInTheDocument();
  });

  it('renders with provided color token', () => {
    render(<CloseButton buttonBackgroundColor="error900" buttonHoverBackgroundColor="error800" />);

    const closeButton = screen.getByTestId('CloseButton-CloseButtonStyled-error900');
    expect(closeButton).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<CloseButton onClick={handleClick} />);

    const closeButton = screen.getByTestId('CloseButton-CloseButtonStyled-white900');
    fireEvent.click(closeButton);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with provided backgroundColorToken', () => {
    render(<CloseButton buttonBackgroundColor="black800" />);

    const closeButton = screen.getByTestId('CloseButton-CloseButtonStyled-black800');
    expect(closeButton).toBeInTheDocument();
  });
});
