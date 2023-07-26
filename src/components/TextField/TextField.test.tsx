import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { TextField, TextFieldFieldProps } from '.';

describe('<TextField />', () => {
  const defaultProps: TextFieldFieldProps = {
    disabled: false,
    error: false,
    label: 'Text Field',
    labelColorToken: 'lavenderWeb2',
    labelTypographyToken: 'primaryBodySmallRegular',
    onChange: jest.fn(),
    tooltipColorToken: 'lavenderWeb2',
    type: 'text',
    typographyToken: 'primaryBodyMediumRegular',
    value: 'Test Value',
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with default props', () => {
    render(<TextField {...defaultProps} />);
    expect(screen.getByTestId('TextField-TextFieldBox')).toBeInTheDocument();
    expect(
      screen.getByTestId('TextField-TextFieldBox-primaryBodySmallRegular-lavenderWeb2'),
    ).toBeInTheDocument();
    expect(screen.getByTestId('TextField-TextFieldBox-TextInputStyled')).toBeInTheDocument();
  });

  it('calls onChange callback when input value changes', () => {
    const onChange = jest.fn();
    render(<TextField {...defaultProps} onChange={onChange} />);
    const input = screen.getByTestId('TextField-TextFieldBox-TextInputStyled');
    fireEvent.change(input, { target: { value: 'Updated Value' } });
    expect(onChange).toHaveBeenCalledWith('Updated Value');
  });

  it('displays the correct label', () => {
    render(<TextField {...defaultProps} />);
    expect(screen.getByText('Text Field')).toBeInTheDocument();
  });

  it('disables input when disabled prop is true', () => {
    render(<TextField {...defaultProps} disabled />);
    const input = screen.getByTestId('TextField-TextFieldBox-TextInputStyled');
    expect(input).toBeDisabled();
  });

  it('renders error styles when error prop is true', () => {
    render(<TextField {...defaultProps} error />);
    const textFieldBox = screen.getByTestId('TextField-TextFieldBox');
    expect(textFieldBox).toHaveClass('css-3yyx3e'); // Replace with the actual CSS class name for error styles
  });
});
