import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppLink, AppLinkProps } from '.';

describe('<AppLink />', () => {
  const defaultProps: AppLinkProps = {
    children: 'Link',
    colorToken: 'lavenderWeb',
    to: '/path',
    typographyToken: 'primaryBodyMediumBold',
  };

  it('renders enabled link correctly', () => {
    render(
      <BrowserRouter>
        <AppLink {...defaultProps} />
      </BrowserRouter>,
    );
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
