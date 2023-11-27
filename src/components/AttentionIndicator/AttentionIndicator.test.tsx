import React from 'react';

import { render, screen } from '../../test-utils';
import { AttentionIndicator } from '.';

describe('<AttentionIndicator />', () => {
  it('renders the attention indicator', () => {
    render(<AttentionIndicator colorToken="error100" />);
    const component = screen.getByTestId('AttentionIndicator-error100');
    expect(component).toBeInTheDocument();
  });
});
