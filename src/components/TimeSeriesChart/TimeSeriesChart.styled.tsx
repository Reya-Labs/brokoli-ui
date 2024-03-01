import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { ParentSize as ParentSizeVISX } from '@visx/responsive';

export const Container = styled.div`
  display: grid;
  grid-template-areas: 'stack';

  > *,
  &:before,
  &:after {
    grid-area: stack;
  }

  width: 0;
  min-width: 100%;
  height: 0;
  min-height: 100%;

  background: var(--brokoli-ui-black800);

  font-size: 0.75rem;

  transform-style: flat;

  cursor: crosshair;
  user-select: none;

  text {
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'zero' 1;
    fill: var(--brokoli-ui-white100);
  }

  @media (prefers-reduced-motion: no-preference) {
    g[data-state='open'] {
      animation: ${keyframes`
        from {
          opacity: 0;
        }
      `} 0.1s ease-in-out;
    }
    &:not(:hover) g[data-state] {
      animation: ${keyframes`
        to {
          opacity: 0;
        }
      `} 0.2s 0.3s ease-in-out forwards;
    }
  }
`;

export const ParentSize = styled(ParentSizeVISX)`
  min-height: 0;
  display: grid;

  overflow: auto;
  overscroll-behavior: contain;
`;

export const YAxisBackground = styled.foreignObject`
  background: var(--brokoli-ui-black800);

  /* Safari */
  @supports (background: - webkit-named-image(i)) {
    background: var(--brokoli-ui-black800);
  }
`;
