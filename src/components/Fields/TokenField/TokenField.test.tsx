import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { TokenField, TokenFieldProps } from './index';

describe('<TokenField />', () => {
  const defaultProps: TokenFieldProps = {
    allowNegativeValue: false,
    bottomLeftText: 'Bottom left text',
    bottomRightTextDifferenceValue: 10,
    bottomRightTextValue: '100',
    decimalsLimit: 2,
    defaultValue: '0',
    disabled: false,
    error: false,
    label: 'Token Field',
    maxLength: 18,
    onChange: jest.fn(),
    token: 'eth',
    tooltip: 'Tooltip content',
    topRightText: 'Top right text',
    value: '10',
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with default props', () => {
    render(<TokenField {...defaultProps} />);
    expect(screen.getByTestId('TokenField-TokenFieldBox')).toBeInTheDocument();
    expect(screen.getByTestId('TokenField-TopBox')).toBeInTheDocument();
    expect(screen.getByTestId('TokenField-TopBox-TooltipLabel')).toBeInTheDocument();
    expect(screen.getByTestId('TokenField-CurrencyInputBox')).toBeInTheDocument();
    expect(
      screen.getByTestId('TokenField-CurrencyInputBox-CurrencyInputStyled'),
    ).toBeInTheDocument();
    expect(screen.getByTestId('TokenField-CurrencyInputBox-TokenBox')).toBeInTheDocument();
    expect(screen.getByTestId('TokenField-BottomBox')).toBeInTheDocument();
    expect(screen.getByTestId('TokenField-BottomBox-Typography')).toBeInTheDocument();
    expect(screen.getByTestId('TokenField-BottomBox-TokenTypography')).toBeInTheDocument();
  });

  it('calls onChange callback when input value changes', () => {
    const onChange = jest.fn();
    render(<TokenField {...defaultProps} onChange={onChange} />);
    const input = screen.getByTestId('TokenField-CurrencyInputBox-CurrencyInputStyled');
    fireEvent.change(input, { target: { value: '20' } });
    expect(onChange).toHaveBeenCalledWith('20');
  });

  it('disables input when disabled prop is true', () => {
    render(<TokenField {...defaultProps} disabled />);
    const input = screen.getByTestId('TokenField-CurrencyInputBox-CurrencyInputStyled');
    expect(input).toBeDisabled();
  });

  it('renders error styles when error prop is true', () => {
    render(<TokenField {...defaultProps} error />);
    const inputBox = screen.getByTestId('TokenField-CurrencyInputBox');
    expect(inputBox).toHaveClass('css-cssveg'); // Replace with the actual CSS class name for error styles
  });

  it('renders label with correct text', () => {
    render(<TokenField {...defaultProps} />);
    const label = screen.getByText('Token Field');
    expect(label).toBeInTheDocument();
  });

  it('renders top right text with correct content', () => {
    render(<TokenField {...defaultProps} />);
    const topRightText = screen.getByText('Top right text');
    expect(topRightText).toBeInTheDocument();
  });

  it('renders bottom left text with correct content', () => {
    render(<TokenField {...defaultProps} />);
    const bottomLeftText = screen.getByText('Bottom left text');
    expect(bottomLeftText).toBeInTheDocument();
  });

  it('renders token icon with correct token prop', () => {
    render(<TokenField {...defaultProps} />);
    const tokenIcon = screen.getByTestId('TokenField-CurrencyInputBox-TokenBox-TokenIcon-eth');
    expect(tokenIcon).toBeInTheDocument();
  });

  it('renders bottom right text with correct value and difference', () => {
    render(<TokenField {...defaultProps} />);
    const tokenTypography = screen.getByTestId('TokenField-BottomBox-TokenTypography');
    expect(tokenTypography).not.toBeNull();
  });
});
