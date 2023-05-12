import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { CloseButton } from '.';

describe('<CloseButton />', () => {
  it('renders with default props', () => {
    render(<CloseButton />);

    const closeButton = screen.getByTestId('CloseButton-CloseButtonStyled-lavenderWeb');
    expect(closeButton).toBeInTheDocument();
    expect(closeButton).toHaveTextContent('✕');
  });

  it('renders with provided color token', () => {
    render(<CloseButton colorToken="wildStrawberry" />);

    const closeButton = screen.getByTestId('CloseButton-CloseButtonStyled-wildStrawberry');
    expect(closeButton).toBeInTheDocument();
    expect(closeButton).toHaveTextContent('✕');
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<CloseButton onClick={handleClick} />);

    const closeButton = screen.getByTestId('CloseButton-CloseButtonStyled-lavenderWeb');
    fireEvent.click(closeButton);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
