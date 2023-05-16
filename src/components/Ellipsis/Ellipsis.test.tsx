import { render, screen } from '@testing-library/react';
import React from 'react';

import { Ellipsis } from './index';

describe('<Ellipsis />', () => {
  it('should render proper UI', () => {
    render(<Ellipsis />);

    expect(screen.getByTestId('EllipsisTypography-inherit')).not.toBeNull();
  });

  it('should render proper UI when passing color token', () => {
    render(<Ellipsis colorToken="lavenderWeb" />);

    expect(screen.getByTestId('EllipsisTypography-lavenderWeb')).not.toBeNull();
  });
});
