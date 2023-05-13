import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { LeverageField, LeverageFieldProps } from '.';

describe('<LeverageField />', () => {
  const defaultProps: LeverageFieldProps = {
    value: '2',
    leverageOptions: ['1', '2', '3'],
    onLeverageChange: jest.fn(),
    error: false,
    disabled: false,
    labelTypographyToken: 'primaryBodyMediumBold',
    tooltipColorToken: 'lavenderWeb3',
    labelColorToken: 'lavenderWeb',
    label: 'Leverage',
    maxLeverageColorToken: 'wildStrawberry',
    maxLeverageText: 'Max Leverage',
    maxLeverageTypographyToken: 'primaryHeader2Black',
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
