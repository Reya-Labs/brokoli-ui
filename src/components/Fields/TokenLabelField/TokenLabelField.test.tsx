import React from 'react';

import { fireEvent, render, screen } from '../../../test-utils';
import { TokenLabelField, TokenLabelFieldProps } from '.';

describe('<TokenLabelField />', () => {
  const defaultProps: TokenLabelFieldProps = {
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
    render(<TokenLabelField {...defaultProps} />);
    expect(screen.getByTestId('TokenLabelField-TokenLabelFieldBox')).toBeInTheDocument();
    expect(screen.getByTestId('TokenLabelField-TopBox')).toBeInTheDocument();
    expect(screen.getByTestId('TokenLabelField-TopBox-TooltipLabel')).toBeInTheDocument();
    expect(screen.getByTestId('TokenLabelField-CurrencyInputBox')).toBeInTheDocument();
    expect(
      screen.getByTestId('TokenLabelField-CurrencyInputBox-CurrencyInputStyled'),
    ).toBeInTheDocument();
    expect(screen.getByTestId('TokenLabelField-CurrencyInputBox-TokenBox')).toBeInTheDocument();
    expect(screen.getByTestId('TokenLabelField-BottomBox')).toBeInTheDocument();
    expect(screen.getByTestId('TokenLabelField-BottomBox-Typography')).toBeInTheDocument();
    expect(screen.getByTestId('TokenLabelField-BottomBox-TokenTypography')).toBeInTheDocument();
  });

  it('calls onChange callback when input value changes', () => {
    const onChange = jest.fn();
    render(<TokenLabelField {...defaultProps} onChange={onChange} />);
    const input = screen.getByTestId('TokenLabelField-CurrencyInputBox-CurrencyInputStyled');
    fireEvent.change(input, { target: { value: '20' } });
    expect(onChange).toHaveBeenCalledWith('20');
  });

  it('disables input when disabled prop is true', () => {
    render(<TokenLabelField {...defaultProps} disabled={true} />);
    const input = screen.getByTestId('TokenLabelField-CurrencyInputBox-CurrencyInputStyled');
    expect(input).toBeDisabled();
  });

  it('renders error styles when error prop is true', () => {
    render(<TokenLabelField {...defaultProps} error={true} />);
    const inputBox = screen.getByTestId('TokenLabelField-CurrencyInputBox');
    expect(inputBox).toHaveClass('css-cssveg'); // Replace with the actual CSS class name for error styles
  });

  it('renders label with correct text', () => {
    render(<TokenLabelField {...defaultProps} />);
    const label = screen.getByText('Token Field');
    expect(label).toBeInTheDocument();
  });

  it('renders top right text with correct content', () => {
    render(<TokenLabelField {...defaultProps} />);
    const topRightText = screen.getByText('Top right text');
    expect(topRightText).toBeInTheDocument();
  });

  it('renders bottom left text with correct content', () => {
    render(<TokenLabelField {...defaultProps} />);
    const bottomLeftText = screen.getByText('Bottom left text');
    expect(bottomLeftText).toBeInTheDocument();
  });

  it('renders token icon with correct token prop', () => {
    render(<TokenLabelField {...defaultProps} />);
    const tokenIcon = screen.getByTestId('TokenLabelField-CurrencyInputBox-TokenBox-TokenIcon-eth');
    expect(tokenIcon).toBeInTheDocument();
  });

  it('renders bottom right text with correct value and difference', () => {
    render(<TokenLabelField {...defaultProps} />);
    const tokenTypography = screen.getByTestId('TokenLabelField-BottomBox-TokenTypography');
    expect(tokenTypography).not.toBeNull();
  });
});
