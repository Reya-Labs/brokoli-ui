import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import React from 'react';

import { reyaTheme } from '../../themes/reya';
import { voltzTheme } from '../../themes/voltz';

export const ThemeProvider: React.FunctionComponent<{
  children?: React.ReactNode;
  theme: 'voltz' | 'reya';
}> = ({ children, theme }) => {
  return (
    <EmotionThemeProvider theme={theme === 'voltz' ? voltzTheme : reyaTheme}>
      {children}
    </EmotionThemeProvider>
  );
};
