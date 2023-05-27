import { render, screen } from '@testing-library/react';
import React from 'react';

import { AttentionIndicator } from './index';

describe('<AttentionIndicator />', () => {
  it('renders the attention indicator', () => {
    render(<AttentionIndicator colorToken="wildStrawberry" />);
    const component = screen.getByTestId('AttentionIndicator-wildStrawberry');
    expect(component).toBeInTheDocument();
  });
});
