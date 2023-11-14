import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import React from 'react';

import { reyaTheme } from '../../themes/reya';
import { voltzTheme } from '../../themes/voltz';

export type ThemeProviderProps = React.PropsWithChildren<{
  theme: 'voltz' | 'reya';
}>;

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({ children, theme }) => {
  return (
    <EmotionThemeProvider theme={theme === 'voltz' ? voltzTheme : reyaTheme}>
      {children}
    </EmotionThemeProvider>
  );
};
