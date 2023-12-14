import { css, Theme } from '@emotion/react';

import { ColorTokens } from '../Colors';

export const globalColorVarsCss = (theme: Theme) => css`
  :root {
    ${Object.keys(theme.colors)
      .map((token) => `--brokoli-ui-${token}: ${theme.colors[token as ColorTokens]};`)
      .join('\n\n')}
  }
`;
