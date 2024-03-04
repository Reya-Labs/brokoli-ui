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
    render(<Button disabled={true}>Click Me</Button>);
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
      <Button disabled={true} onClick={onClick}>
        Click Me
      </Button>,
    );
    const button = screen.getByText('Click Me');
    fireEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('renders left and right icons when passed as props', () => {
    render(
      <Button iconLeft={<TestIcon />} iconRight={<TestIcon />}>
        Click Me
      </Button>,
    );
    const iconLeft = screen.getByTestId('Button-IconLeftBox');
    const iconRight = screen.getByTestId('Button-IconRightBox');
    expect(iconLeft).toBeInTheDocument();
    expect(iconRight).toBeInTheDocument();
  });

  it('does not render icons when loading is true', () => {
    render(
      <Button iconLeft={<TestIcon />} iconRight={<TestIcon />} loading={true}>
        Click Me
      </Button>,
    );
    const iconLeft = screen.queryByTestId('Button-IconLeftBox');
    const iconRight = screen.queryByTestId('Button-IconRightBox');
    expect(iconLeft).not.toBeInTheDocument();
    expect(iconRight).not.toBeInTheDocument();
  });
});
