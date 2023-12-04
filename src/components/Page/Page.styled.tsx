import styled from '@emotion/styled';

import { getColorFromToken } from '../../foundation/Colors';

export const PageBox = styled('div')`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

export const PageContentBox = styled('div')`
  z-index: ${({ theme }) => theme.layerIndexes.pageContent};
  position: relative;
  width: 100%;
  height: 100%;
`;

export const BackgroundBox = styled('div')`
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: ${({ theme }) => theme.layerIndexes.background};
  width: 100%;
  height: 100%;
  background: ${({ theme }) => getColorFromToken({ colorToken: 'black950', theme })};
`;
