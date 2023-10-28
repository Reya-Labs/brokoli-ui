import React from 'react';

import { fireEvent, render, screen } from '../../test-utils';
import { Button } from './';

describe('<Button />', () => {
  it('renders children correctly', () => {
    render(<Button variant="primary">Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('disables the button when passed the disabled prop', () => {
    render(
      <Button variant="primary" disabled>
        Click Me
      </Button>,
    );
    const button = screen.getByText('Click Me');
    expect(button).toBeDisabled();
  });

  it('calls the onClick function when clicked', () => {
    const onClick = jest.fn();
    render(
      <Button variant="primary" onClick={onClick}>
        Click Me
      </Button>,
    );
    const button = screen.getByText('Click Me');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it('does not call the onClick function when disabled', () => {
    const onClick = jest.fn();
    render(
      <Button variant="primary" disabled onClick={onClick}>
        Click Me
      </Button>,
    );
    const button = screen.getByText('Click Me');
    fireEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });
});
