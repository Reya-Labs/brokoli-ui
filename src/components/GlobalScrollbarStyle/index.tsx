import { Global, useTheme } from '@emotion/react';
import React from 'react';

import { globalScrollbarCSS } from './GlobalScrollbarStyle.styled';

export const GlobalScrollbarStyle: React.FunctionComponent = () => {
  const theme = useTheme();
  return <Global styles={globalScrollbarCSS(theme)} />;
};
