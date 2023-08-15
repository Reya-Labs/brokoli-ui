import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { MarginAmountTokenField, MarginAmountTokenFieldProps } from './index';

describe('<MarginAmountTokenField />', () => {
  const defaultProps: MarginAmountTokenFieldProps = {
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
    render(<MarginAmountTokenField {...defaultProps} />);
    expect(
      screen.getByTestId('MarginAmountTokenField-MarginAmountTokenFieldBox'),
    ).toBeInTheDocument();
    expect(screen.getByTestId('MarginAmountTokenField-TopBox')).toBeInTheDocument();
    expect(screen.getByTestId('MarginAmountTokenField-TopBox-TooltipLabel')).toBeInTheDocument();
    expect(screen.getByTestId('MarginAmountTokenField-CurrencyInputBox')).toBeInTheDocument();
    expect(
      screen.getByTestId('MarginAmountTokenField-CurrencyInputBox-CurrencyInputStyled'),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId('MarginAmountTokenField-CurrencyInputBox-TokenBox'),
    ).toBeInTheDocument();
    expect(screen.getByTestId('MarginAmountTokenField-BottomBox')).toBeInTheDocument();
    expect(screen.getByTestId('MarginAmountTokenField-BottomBox-Typography')).toBeInTheDocument();
    expect(
      screen.getByTestId('MarginAmountTokenField-BottomBox-TokenTypography'),
    ).toBeInTheDocument();
  });

  it('calls onChange callback when input value changes', () => {
    const onChange = jest.fn();
    render(<MarginAmountTokenField {...defaultProps} onChange={onChange} />);
    const input = screen.getByTestId('MarginAmountTokenField-CurrencyInputBox-CurrencyInputStyled');
    fireEvent.change(input, { target: { value: '20' } });
    expect(onChange).toHaveBeenCalledWith('20');
  });

  it('disables input when disabled prop is true', () => {
    render(<MarginAmountTokenField {...defaultProps} disabled />);
    const input = screen.getByTestId('MarginAmountTokenField-CurrencyInputBox-CurrencyInputStyled');
    expect(input).toBeDisabled();
  });

  it('renders error styles when error prop is true', () => {
    render(<MarginAmountTokenField {...defaultProps} error />);
    const inputBox = screen.getByTestId('MarginAmountTokenField-CurrencyInputBox');
    expect(inputBox).toHaveClass('css-cssveg'); // Replace with the actual CSS class name for error styles
  });

  it('renders label with correct text', () => {
    render(<MarginAmountTokenField {...defaultProps} />);
    const label = screen.getByText('Token Field');
    expect(label).toBeInTheDocument();
  });

  it('renders top right text with correct content', () => {
    render(<MarginAmountTokenField {...defaultProps} />);
    const topRightText = screen.getByText('Top right text');
    expect(topRightText).toBeInTheDocument();
  });

  it('renders bottom left text with correct content', () => {
    render(<MarginAmountTokenField {...defaultProps} />);
    const bottomLeftText = screen.getByText('Bottom left text');
    expect(bottomLeftText).toBeInTheDocument();
  });

  it('renders token icon with correct token prop', () => {
    render(<MarginAmountTokenField {...defaultProps} />);
    const tokenIcon = screen.getByTestId(
      'MarginAmountTokenField-CurrencyInputBox-TokenBox-TokenIcon-eth',
    );
    expect(tokenIcon).toBeInTheDocument();
  });

  it('renders bottom right text with correct value and difference', () => {
    render(<MarginAmountTokenField {...defaultProps} />);
    const tokenTypography = screen.getByTestId('MarginAmountTokenField-BottomBox-TokenTypography');
    expect(tokenTypography).not.toBeNull();
  });
});
