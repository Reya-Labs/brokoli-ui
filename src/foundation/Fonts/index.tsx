import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

import InterBlack from './assets/Inter-Black.woff';
import InterBold from './assets/Inter-Bold.woff';
import InterRegular from './assets/Inter-Regular.woff';

const FontFaces = styled(Global)`
  @font-face {
    font-family: 'Inter';
    src: url(${InterBlack}) format('woff');
    font-weight: 900;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${InterBold}) format('woff');
    font-weight: 700;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${InterRegular}) format('woff');
    font-weight: 400;
  }
`;

export const Fonts = () => <FontFaces styles={{}} />;
