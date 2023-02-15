import { render, screen } from '@testing-library/react';
import React from 'react';

import { Ellipsis } from './index';

describe('<Ellipsis />', () => {
  it('should render proper UI', () => {
    render(<Ellipsis />);

    expect(screen.getByTestId('EllipsisTypography')).not.toBeNull();
  });
});
