import React from 'react';
import { addDecorator } from '@storybook/react';
import { Fonts } from '../src';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
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
