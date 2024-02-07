import React from 'react';
import darkTheme from './themes/dark';
import { ThemeProvider, GlobalScrollbarStyle, Page, ThemeProviderProps } from '../src';
import { HashRouter } from 'react-router-dom';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

const doesntNeedsPadding = (title: string) =>
  ['Components/Page', 'Components/Nav'].indexOf(title) !== -1;
function StoryAsPageDecorator(story: () => React.ReactNode, storyInfo: { title: string }) {
  return (
    <HashRouter>
      <Page>
        <GlobalScrollbarStyle />
        <div
          style={{
            padding: doesntNeedsPadding(storyInfo.title) ? 0 : 24,
          }}
        >
          {story()}
        </div>
      </Page>
    </HashRouter>
  );
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  docs: {
    theme: darkTheme,
  },
};

export const decorators = [
  StoryAsPageDecorator,
  withThemeFromJSXProvider({
    themes: {
      voltz: 'voltz',
      reya: 'reya',
    } as any,
    defaultTheme: 'reya',
    Provider: ThemeProvider,
  }),
];
