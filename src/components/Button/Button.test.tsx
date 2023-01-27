import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Button } from './index';

describe('<Button />', () => {
  it('Check Button Disabled', () => {
    render(<Button>Button</Button>);
    expect(screen.getByRole('button', { name: 'Button' }));
  });
});
