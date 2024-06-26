import React from 'react';

import { render, screen } from '../../test-utils';
import { TokenTypography } from '.';

describe('<TokenTypography />', () => {
  it('renders without error', () => {
    render(
      <TokenTypography
        colorToken="white100"
        token="ETH"
        typographyToken="bodySmallMedium"
        value="123"
      />,
    );
  });

  it('displays the value and token', () => {
    render(
      <TokenTypography
        colorToken="white100"
        token="ETH"
        typographyToken="bodySmallMedium"
        value="123"
      />,
    );

    const valueElement = screen.getByText('123');
    const tokenElement = screen.getByTestId('TokenTypography-Token-Value');

    expect(valueElement).toBeInTheDocument();
    expect(tokenElement).toBeInTheDocument();
    expect(tokenElement).toHaveTextContent('ETH');
  });

  it('displays the second token if provided', () => {
    render(
      <TokenTypography
        colorToken="white100"
        token="ETH"
        token2="BTC"
        typographyToken="bodySmallMedium"
        value="123"
        value2="456"
      />,
    );

    const token2Element = screen.getByTestId('TokenTypography-Token-Token2');
    const value2Element = screen.getByText(/456/);

    expect(token2Element).toBeInTheDocument();
    expect(value2Element).toBeInTheDocument();
    expect(token2Element).toHaveTextContent('BTC');
    expect(value2Element).toHaveTextContent('456');
  });

  it('displays the difference arrow and value if differenceValue is not NaN', () => {
    render(
      <TokenTypography
        colorToken="white100"
        differenceToken="%"
        differenceValue={10}
        token="ETH"
        typographyToken="bodySmallMedium"
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
