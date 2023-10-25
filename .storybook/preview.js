import React from 'react';
import darkTheme from './themes/dark';
import { GlobalScrollbarStyle, Page } from '../src';

const doesntNeedsPadding = (title) => ['Components/Page', 'Components/Nav'].indexOf(title) !== -1;
function StoryAsPageDecorator(story, storyInfo) {
  return (
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

export const decorators = [StoryAsPageDecorator];
