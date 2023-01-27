import { Global } from '@emotion/react';
import styled from '@emotion/styled';

import InterBlack from './assets/Inter-Black.woff';
import InterBold from './assets/Inter-Bold.woff';
import InterRegular from './assets/Inter-Regular.woff';

export const Fonts = styled(Global)`
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
