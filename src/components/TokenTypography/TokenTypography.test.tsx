import React from 'react';

import { render, screen } from '../../test-utils';
import { TokenTypography } from '.';

describe('<TokenTypography />', () => {
  it('renders without error', () => {
    render(
      <TokenTypography
        colorToken="white"
        token="ETH"
        typographyToken="bodySmallRegular"
        value="123"
      />,
    );
  });

  it('displays the value and token', () => {
    render(
      <TokenTypography
        colorToken="white"
        token="ETH"
        typographyToken="bodySmallRegular"
        value="123"
      />,
    );

    const valueElement = screen.getByText('123');
    const tokenElement = screen.getByTestId('TokenTypography-Token-Value');

    expect(valueElement).toBeInTheDocument();
    expect(tokenElement).toBeInTheDocument();
    expect(tokenElement).toHaveTextContent('ETH');
  });

  it('displays the second value and token if provided', () => {
    render(
      <TokenTypography
        colorToken="white"
        token="ETH"
        typographyToken="bodySmallRegular"
        value="123"
        value2="456"
      />,
    );

    const value2Element = screen.getByTestId('TokenTypography-Token-Value2');

    expect(value2Element).toBeInTheDocument();
    expect(value2Element).toHaveTextContent('ETH');
  });

  it('displays the difference arrow and value if differenceValue is not NaN', () => {
    render(
      <TokenTypography
        colorToken="white"
        differenceToken="%"
        differenceValue={10}
        token="ETH"
        typographyToken="bodySmallRegular"
        value="123"
      />,
    );

    const upIconElement = screen.getByTestId('TokenTypography-UpIcon');
    const differenceValueElement = screen.getByTestId('TokenTypography-DifferenceValue');
    const differenceTokenElement = screen.getByTestId('TokenTypography-DifferenceToken');

    expect(upIconElement).toBeInTheDocument();
    expect(differenceValueElement).toBeInTheDocument();
    expect(differenceValueElement).toHaveTextContent('10');
    expect(differenceTokenElement).toBeInTheDocument();
    expect(differenceTokenElement).toHaveTextContent('%');
  });
});
