import React from 'react';

import { render, screen } from '../../test-utils';
import { AppLink, AppLinkProps } from '.';

describe('<AppLink />', () => {
  const defaultProps: AppLinkProps = {
    children: 'Link',
    colorToken: 'white',
    to: '/path',
    typographyToken: 'bodyMediumBold',
  };

  it('renders enabled link correctly', () => {
    render(<AppLink {...defaultProps} />);
    const link = screen.getByTestId('AppLink-AppLinkStyled');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', defaultProps.to);
    expect(link).toHaveTextContent(defaultProps.children);
  });

  it('renders disabled link correctly', () => {
    render(<AppLink {...defaultProps} disabled />);
    const disabledTypography = screen.getByTestId('AppLink-DisabledTypography');
    expect(disabledTypography).toBeInTheDocument();
    expect(disabledTypography).toHaveTextContent(defaultProps.children);
  });
});
