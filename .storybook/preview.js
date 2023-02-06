import React from 'react';
import { addDecorator } from '@storybook/react';
import { Fonts } from '../src';
import darkTheme from './themes/dark';

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

addDecorator((story) => (
  <React.Fragment>
    <div
      style={{
        padding: 24,
      }}
    >
      {story()}
      <Fonts />
    </div>
  </React.Fragment>
));
