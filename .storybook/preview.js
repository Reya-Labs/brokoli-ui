import React from 'react';
import darkTheme from './themes/dark';
import { ThemeProvider, GlobalScrollbarStyle, Page, voltzTheme, reyaTheme } from '../src';
import { BrowserRouter } from 'react-router-dom';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

const doesntNeedsPadding = (title) => ['Components/Page', 'Components/Nav'].indexOf(title) !== -1;
function StoryAsPageDecorator(story, storyInfo) {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
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
    },
    defaultTheme: 'voltz',
    Provider: ThemeProvider,
  }),
];
