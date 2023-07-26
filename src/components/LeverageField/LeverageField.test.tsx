import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { LeverageField, LeverageFieldProps } from '.';

describe('<LeverageField />', () => {
  const defaultProps: LeverageFieldProps = {
    disabled: false,
    error: false,
    label: 'Leverage',
    labelColorToken: 'lavenderWeb',
    labelTypographyToken: 'primaryBodyMediumBold',
    leverageOptions: ['1', '2', '3'],
    maxLeverageColorToken: 'wildStrawberry',
    maxLeverageText: 'Max Leverage',
    maxLeverageTypographyToken: 'primaryHeader2Black',
    onLeverageChange: jest.fn(),
    tooltipColorToken: 'lavenderWeb3',
    value: '2',
  };

  it('renders without error', () => {
    render(<LeverageField {...defaultProps} />);
  });

  it('displays the label', () => {
    render(<LeverageField {...defaultProps} />);
    const labelElement = screen.getByText('Leverage');
    expect(labelElement).toBeInTheDocument();
  });

  it('calls onLeverageChange when input value changes', () => {
    render(<LeverageField {...defaultProps} />);
    const currencyField = screen.getByTestId('LeverageField-CurrencyField');

    fireEvent.change(currencyField, { target: { value: '5' } });

    expect(defaultProps.onLeverageChange).toHaveBeenCalledWith('5', 'input');
  });

  it('calls onLeverageChange when a button is clicked', () => {
    render(<LeverageField {...defaultProps} />);
    const button = screen.getByTestId('LeverageField-ButtonStyled-Enabled-2');

    fireEvent.click(button);

    expect(defaultProps.onLeverageChange).toHaveBeenCalledWith('2', 'button');
  });
});
