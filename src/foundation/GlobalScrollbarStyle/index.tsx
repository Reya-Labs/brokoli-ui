import { Global } from '@emotion/react';
import React from 'react';

import { globalScrollbarCSS } from './GlobalScrollbarStyle.styled';

export const GlobalScrollbarStyle: React.FunctionComponent = () => (
  <Global styles={globalScrollbarCSS} />
);
