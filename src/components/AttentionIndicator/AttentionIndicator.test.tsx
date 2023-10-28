import React from 'react';

import { render, screen } from '../../test-utils';
import { AttentionIndicator } from './index';

describe('<AttentionIndicator />', () => {
  it('renders the attention indicator', () => {
    render(<AttentionIndicator colorToken="wildStrawberry" />);
    const component = screen.getByTestId('AttentionIndicator-wildStrawberry');
    expect(component).toBeInTheDocument();
  });
});
