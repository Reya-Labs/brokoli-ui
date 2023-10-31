import React from 'react';

import { fireEvent, render, screen } from '../../test-utils';
import { CloseButton } from '.';

describe('<CloseButton />', () => {
  it('renders with default props', () => {
    render(<CloseButton />);

    const closeButton = screen.getByTestId('CloseButton-CloseButtonStyled-white100');
    expect(closeButton).toBeInTheDocument();
    expect(closeButton).toHaveTextContent('✕');
  });

  it('renders with provided color token', () => {
    render(<CloseButton colorToken="error100" />);

    const closeButton = screen.getByTestId('CloseButton-CloseButtonStyled-error100');
    expect(closeButton).toBeInTheDocument();
    expect(closeButton).toHaveTextContent('✕');
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<CloseButton onClick={handleClick} />);

    const closeButton = screen.getByTestId('CloseButton-CloseButtonStyled-white100');
    fireEvent.click(closeButton);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
