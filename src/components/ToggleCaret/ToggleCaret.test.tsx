import { render, screen } from '@testing-library/react';
import React from 'react';

import { ToggleCaret, ToggleCaretProps } from '.';

describe('<ToggleCaret />', () => {
  const defaultProps: ToggleCaretProps = {
    isOpen: true,
  };

  it('renders correctly with default props when open', () => {
    render(<ToggleCaret {...defaultProps} />);
    expect(screen.getByTestId('ToggleCaret-ToggleCaretBox')).toBeInTheDocument();
    expect(screen.getByTestId('ToggleCaretArrow-Open')).toBeInTheDocument();
  });

  it('renders correctly with default props when closed', () => {
    render(<ToggleCaret isOpen={false} />);
    expect(screen.getByTestId('ToggleCaret-ToggleCaretBox')).toBeInTheDocument();
    expect(screen.getByTestId('ToggleCaretArrow-Closed')).toBeInTheDocument();
  });
});
