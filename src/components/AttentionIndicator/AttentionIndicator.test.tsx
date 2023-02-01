import { render, screen } from '@testing-library/react';
import React from 'react';

import { AttentionIndicator } from './AttentionIndicator';

describe('<AttentionIndicator />', () => {
  it('renders the attention indicator', () => {
    render(<AttentionIndicator />);
    const component = screen.getByTestId('AttentionIndicator');
    expect(component).toBeInTheDocument();
  });
});
