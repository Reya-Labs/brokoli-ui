import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { ChainOption, ChainOptionProps } from './ChainOption';

describe('ChainOption', () => {
  const defaultProps: ChainOptionProps = {
    name: 'Option 1',
    Icon: () => <span>Icon</span>,
    isActive: false,
    onClick: jest.fn(),
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders chain option button correctly', () => {
    render(<ChainOption {...defaultProps} />);
    const chainOptionButton = screen.getByTestId('ChainOptionButton');
    expect(chainOptionButton).toBeInTheDocument();
    expect(chainOptionButton).toHaveTextContent(defaultProps.name);
  });

  it('renders active chain option button correctly', () => {
    render(<ChainOption {...defaultProps} isActive />);
    const activeChainOptionButton = screen.getByTestId('ActiveChainOptionButton');
    expect(activeChainOptionButton).toBeInTheDocument();
    expect(activeChainOptionButton).toHaveTextContent(defaultProps.name);
  });

  it('calls the onClick callback when chain option button is clicked', () => {
    render(<ChainOption {...defaultProps} />);
    const chainOptionButton = screen.getByTestId('ChainOptionButton');
    fireEvent.click(chainOptionButton);
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('calls the onClick callback when active chain option button is clicked', () => {
    render(<ChainOption {...defaultProps} isActive />);
    const activeChainOptionButton = screen.getByTestId('ActiveChainOptionButton');
    fireEvent.click(activeChainOptionButton);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
});
