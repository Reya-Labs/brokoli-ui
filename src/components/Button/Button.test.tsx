import React from 'react';

import { fireEvent, render, screen } from '../../test-utils';
import { ReactComponent as TestIcon } from '../CloseButton/close-icon.svg';
import { Button } from './';

describe('<Button />', () => {
  it('renders children correctly', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('disables the button when passed the disabled prop', () => {
    render(<Button disabled>Click Me</Button>);
    const button = screen.getByText('Click Me');
    expect(button).toBeDisabled();
  });

  it('calls the onClick function when clicked', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click Me</Button>);
    const button = screen.getByText('Click Me');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it('does not call the onClick function when disabled', () => {
    const onClick = jest.fn();
    render(
      <Button disabled onClick={onClick}>
        Click Me
      </Button>,
    );
    const button = screen.getByText('Click Me');
    fireEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('renders left and right icons when passed as props', () => {
    render(
      <Button iconLeft={TestIcon} iconRight={TestIcon}>
        Click Me
      </Button>,
    );
    const iconLeft = screen.getByTestId('iconLeft-testid');
    const iconRight = screen.getByTestId('iconRight-testid');
    expect(iconLeft).toBeInTheDocument();
    expect(iconRight).toBeInTheDocument();
  });

  it('does not render icons when loading is true', () => {
    render(
      <Button iconLeft={TestIcon} iconRight={TestIcon} loading>
        Click Me
      </Button>,
    );
    const iconLeft = screen.queryByTestId('iconLeft-testid');
    const iconRight = screen.queryByTestId('iconRight-testid');
    expect(iconLeft).not.toBeInTheDocument();
    expect(iconRight).not.toBeInTheDocument();
  });
});
