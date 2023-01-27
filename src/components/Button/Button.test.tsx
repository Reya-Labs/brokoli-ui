import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';

import { Button } from './index';

describe('<Button />', () => {
  it('should render Button correctly', () => {
    render(<Button>Button</Button>);
    expect(screen.getByRole('button', { name: 'Button' })).toBeInTheDocument();
  });
});
