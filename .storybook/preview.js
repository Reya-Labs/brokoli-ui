import React from 'react';
import { addDecorator } from '@storybook/react';
import darkTheme from './themes/dark';
import { Page } from '../src';

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

const doesntNeedsPadding = (title) => ['Components/Page', 'Components/Nav'].indexOf(title) !== -1;
addDecorator((story, storyInfo) => {
  return (
    <Page>
      <div
        style={{
          padding: doesntNeedsPadding(storyInfo.title) ? 0 : 24,
        }}
      >
        {story()}
      </div>
    </Page>
  );
});
