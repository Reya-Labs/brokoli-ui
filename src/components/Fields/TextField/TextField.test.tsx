import React from 'react';

import { fireEvent, render, screen } from '../../../test-utils';
import { TextField, TextFieldProps } from '.';

describe('<TextField />', () => {
  const defaultProps: TextFieldProps = {
    disabled: false,
    error: false,
    label: 'Text Field',
    labelColorToken: 'white300',
    labelTypographyToken: 'bodySmallMedium',
    onChange: jest.fn(),
    tooltipColorToken: 'white300',
    type: 'text',
    typographyToken: 'bodyMediumMedium',
    value: 'Test Value',
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with default props', () => {
    render(<TextField {...defaultProps} />);
    expect(screen.getByTestId('TextField-TextFieldBox')).toBeInTheDocument();
    expect(
      screen.getByTestId('TextField-TextFieldBox-bodySmallMedium-white300'),
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
    render(<TextField {...defaultProps} disabled={true} />);
    const input = screen.getByTestId('TextField-TextFieldBox-TextInputStyled');
    expect(input).toBeDisabled();
  });

  it('renders error styles when error prop is true', () => {
    render(<TextField {...defaultProps} error={true} />);
    const textFieldBox = screen.getByTestId('TextField-TextFieldBox-Error');
    expect(textFieldBox).toBeInTheDocument();
  });
});
