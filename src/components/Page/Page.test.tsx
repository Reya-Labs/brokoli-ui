import { render, screen } from '@testing-library/react';
import React from 'react';

import { Page } from '.';

describe('<Page />', () => {
  it('renders children and required elements', () => {
    render(
      <Page>
        <div>Page Content</div>
      </Page>,
    );
    expect(screen.getByTestId('Page-PageBox')).toBeInTheDocument();
    expect(screen.getByTestId('Page-PageContentBox')).toBeInTheDocument();
    expect(screen.getByTestId('Page-BackgroundBox')).toBeInTheDocument();
    expect(screen.getByTestId('Page-BackgroundNoiseBox')).toBeInTheDocument();
    expect(screen.getByText('Page Content')).toBeInTheDocument();
  });
});
