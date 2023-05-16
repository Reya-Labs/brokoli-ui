import { render, screen } from '@testing-library/react';
import React from 'react';

import { RainbowLoader, RainbowLoaderProps } from '.';

describe('<RainbowLoader />', () => {
  const defaultProps: RainbowLoaderProps = {
    height: 50,
    text: 'Loading...',
  };

  it('renders correctly with default props', () => {
    render(<RainbowLoader {...defaultProps} />);
    expect(screen.getByTestId('RainbowLoader-RainbowLoaderBox')).toBeInTheDocument();
    expect(screen.getByTestId('RainbowLoader-RainbowText')).toBeInTheDocument();
    expect(screen.getByTestId('RainbowLoader-LoadingBox')).toBeInTheDocument();
    expect(screen.getByTestId('RainbowLoader-LoadingRect1')).toBeInTheDocument();
    expect(screen.getByTestId('RainbowLoader-LoadingRect2')).toBeInTheDocument();
    expect(screen.getByTestId('RainbowLoader-LoadingEllipsis')).toBeInTheDocument();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders correctly without text', () => {
    render(<RainbowLoader height={50} />);
    expect(screen.getByTestId('RainbowLoader-LoadingBox')).toBeInTheDocument();
    expect(screen.queryByTestId('RainbowLoader-RainbowText')).toBeNull();
  });

  it('applies the correct height to the loading elements', () => {
    render(<RainbowLoader {...defaultProps} />);
    const loadingRect1 = screen.getByTestId('RainbowLoader-LoadingRect1');
    const loadingRect2 = screen.getByTestId('RainbowLoader-LoadingRect2');
    const loadingEllipsis = screen.getByTestId('RainbowLoader-LoadingEllipsis');
    expect(loadingRect1).toHaveStyle('height: 50px');
    expect(loadingRect2).toHaveStyle('height: 50px');
    expect(loadingEllipsis).toHaveStyle('height: 50px');
  });
});
