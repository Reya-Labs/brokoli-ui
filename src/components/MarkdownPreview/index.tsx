import MDPreview from '@uiw/react-markdown-preview';
import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { Typography } from '../Typography';

export const MarkdownPreview: React.FunctionComponent<{
  source: string;
  height: number;
  colorToken: ColorTokens;
}> = ({ source, height, colorToken = 'white100' }) => {
  return (
    <MDPreview
      components={{
        h1: ({ children }) => (
          <Typography colorToken={colorToken} typographyToken="h1SmallBold">
            {children}
          </Typography>
        ),
        h2: ({ children }) => (
          <Typography colorToken={colorToken} typographyToken="h2Bold">
            {children}
          </Typography>
        ),
        h3: ({ children }) => (
          <Typography colorToken={colorToken} typographyToken="h3Bold">
            {children}
          </Typography>
        ),
        li: ({ children }) => (
          <Typography colorToken={colorToken} typographyToken="bodyXSmallRegular">
            <li>{children}</li>
          </Typography>
        ),
        p: ({ children }) => (
          <Typography colorToken={colorToken} typographyToken="bodyXSmallRegular">
            {children}
          </Typography>
        ),
      }}
      source={source}
      /* eslint-disable-next-line react/forbid-component-props */
      style={{
        height,
      }}
    />
  );
};
