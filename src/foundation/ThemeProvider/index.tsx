import { Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import React from 'react';

import { reyaTheme } from '../../themes/reya';
import { voltzTheme } from '../../themes/voltz';
import { globalColorVarsCss } from './global-color-vars-css';

export type ThemeProviderProps = React.PropsWithChildren<{
  theme: 'voltz' | 'reya';
}>;

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({ children, theme }) => {
  const themeValue = theme === 'voltz' ? voltzTheme : reyaTheme;
  return (
    <EmotionThemeProvider theme={themeValue}>
      <Global styles={globalColorVarsCss(themeValue)} />
      {children}
    </EmotionThemeProvider>
  );
};
