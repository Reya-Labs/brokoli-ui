import React from 'react';

import { render, screen } from '../../test-utils';
import { Donut, DonutProps } from '.'; // Make sure the path to the Donut component is correct

describe('<Donut />', () => {
  const props: DonutProps = {
    colorToken: 'orangeYellow',
    holeColorToken: 'liberty7',
    percentage: 50,
  };

  it('renders the Donut component with provided props', () => {
    render(<Donut {...props} />);
    const container = screen.getByTestId(`Donut-Container-${props.colorToken}-50`);
    const hole = screen.getByTestId(`Donut-Hole-${props.holeColorToken || 'liberty6'}`);
    expect(container).toBeInTheDocument();
    expect(hole).toBeInTheDocument();
  });

  it('clamps the percentage prop between 0 and 100', () => {
    const invalidProps: DonutProps = {
      ...props,
      percentage: -10,
    };
    render(<Donut {...invalidProps} />);
    const container = screen.getByTestId(`Donut-Container-${props.colorToken}-0`);
    expect(container).toBeInTheDocument();

    const validPercentageProps: DonutProps = {
      ...props,
      percentage: 150,
    };
    render(<Donut {...validPercentageProps} />);
    const container2 = screen.getByTestId(`Donut-Container-${props.colorToken}-100`);
    expect(container2).toBeInTheDocument();
  });

  it('uses default holeColorToken if holeColorToken is not provided', () => {
    const propsWithoutHoleColor: DonutProps = {
      ...props,
      holeColorToken: undefined,
    };
    render(<Donut {...propsWithoutHoleColor} />);
    const hole = screen.getByTestId('Donut-Hole-liberty6');
    expect(hole).toBeInTheDocument();
  });
});
