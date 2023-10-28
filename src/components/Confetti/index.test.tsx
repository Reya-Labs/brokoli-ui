import React from 'react';

import { render, screen } from '../../test-utils';
import { Confetti } from '.';

describe('<Confetti />', () => {
  it('renders children and leaf elements', () => {
    render(
      <Confetti>
        <div data-testid="ChildElement">Hello</div>
      </Confetti>,
    );

    const container = screen.getByTestId('Confetti-Container');
    expect(container).toBeInTheDocument();

    const childElement = screen.getByTestId('ChildElement');
    expect(childElement).toBeInTheDocument();

    for (let i = 0; i < 20; i++) {
      const leafElement = screen.getByTestId(`Confetti-Item${i}`);
      expect(leafElement).toBeInTheDocument();
      expect(leafElement.tagName.toLowerCase()).toBe('i');
    }
  });
});
