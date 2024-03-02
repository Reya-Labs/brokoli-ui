import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100%;
  cursor: crosshair;
  user-select: none;

  text {
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'zero' 1;
  }
`;

export const YAxisBackground = styled.foreignObject`
  background: yellow;
  z-index: 1;
`;
