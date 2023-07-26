import { render, screen } from '@testing-library/react';
import React from 'react';

import { MarketToken, MarketTokenProps } from '.';

describe('<MarketToken />', () => {
  const defaultProps: MarketTokenProps = {
    colorToken: 'liberty',
    iconSize: 20,
    market: 'Aave',
    typographyToken: 'primaryBodyMediumBold',
  };

  it('renders the market token component correctly', () => {
    render(<MarketToken {...defaultProps} />);
    const marketTokenBox = screen.getByTestId('MarketToken-MarketTokenBox');
    const iconsBox = screen.getByTestId('MarketToken-IconsBox');
    const typography = screen.getByTestId(
      `MarketToken-Typography-${defaultProps.colorToken}-${defaultProps.typographyToken}`,
    );

    expect(marketTokenBox).toBeInTheDocument();
    expect(iconsBox).toBeInTheDocument();
    expect(typography).toBeInTheDocument();
  });

  it('renders the correct market icon', () => {
    render(<MarketToken {...defaultProps} />);
    const marketIcon = screen.getByTestId(`MarketToken-IconStyled-aave`);

    expect(marketIcon).toBeInTheDocument();
  });

  it('renders the correct additional token icon when token prop is provided', () => {
    const propsWithToken: MarketTokenProps = {
      ...defaultProps,
      token: 'eth',
    };

    render(<MarketToken {...propsWithToken} />);
    const additionalIcon = screen.getByTestId('MarketToken-IconStyled-eth');

    expect(additionalIcon).toBeInTheDocument();
  });

  it('does not render additional token icon when token prop is not provided', () => {
    const propsWithoutToken: MarketTokenProps = {
      ...defaultProps,
      token: undefined,
    };

    render(<MarketToken {...propsWithoutToken} />);
    const additionalIcon = screen.queryByTestId('MarketToken-IconStyled-eth');

    expect(additionalIcon).not.toBeInTheDocument();
  });

  it('displays the correct text content', () => {
    render(<MarketToken {...defaultProps} />);
    const typography = screen.getByTestId(
      `MarketToken-Typography-${defaultProps.colorToken}-${defaultProps.typographyToken}`,
    );

    expect(typography).toHaveTextContent('Aave');
  });

  it('displays the correct text content with additional token', () => {
    const propsWithToken: MarketTokenProps = {
      ...defaultProps,
      token: 'eth',
    };

    render(<MarketToken {...propsWithToken} />);
    const typography = screen.getByTestId(
      `MarketToken-Typography-${defaultProps.colorToken}-${defaultProps.typographyToken}`,
    );

    expect(typography).toHaveTextContent('Aave-ETH');
  });

  it('displays the correct text content with additional token and custom formatter', () => {
    const propsWithToken: MarketTokenProps = {
      ...defaultProps,
      infoFormatter: ({ market, token }) =>
        `CustomFormatter ${market!}-${(token || '').toUpperCase()}`,
      token: 'eth',
    };

    render(<MarketToken {...propsWithToken} />);
    const typography = screen.getByTestId(
      `MarketToken-Typography-${defaultProps.colorToken}-${defaultProps.typographyToken}`,
    );

    expect(typography).toHaveTextContent('CustomFormatter Aave-ETH');
  });

  test.each([[0], [-1]])('does not render icons when icon size is %p', (iconSize) => {
    const propsWithIconSize: MarketTokenProps = {
      ...defaultProps,
      iconSize,
    };

    render(<MarketToken {...propsWithIconSize} />);
    const icon = screen.queryByTestId('MarketToken-IconStyled-aave');
    const additionalIcon = screen.queryByTestId('MarketToken-IconStyled-eth');

    expect(icon).not.toBeInTheDocument();
    expect(additionalIcon).not.toBeInTheDocument();
  });
});
