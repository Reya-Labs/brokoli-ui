// eslint-disable-next-line no-restricted-imports
import { render, RenderOptions } from '@testing-library/react';
import React, { ReactElement } from 'react';

import { ThemeProvider } from '../foundation/ThemeProvider';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme="voltz">{children}</ThemeProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// eslint-disable-next-line import/export,no-restricted-imports
export * from '@testing-library/react';
// eslint-disable-next-line import/export
export { customRender as render };
