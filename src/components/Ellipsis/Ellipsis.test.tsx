import React from 'react';

import { render, screen } from '../../test-utils';
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
