import { ThemeProvider } from '@emotion/react';
// eslint-disable-next-line no-restricted-imports
import { render, RenderOptions } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { theme } from '../foundation/Theme';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </BrowserRouter>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// eslint-disable-next-line import/export,no-restricted-imports
export * from '@testing-library/react';
// eslint-disable-next-line import/export
export { customRender as render };
