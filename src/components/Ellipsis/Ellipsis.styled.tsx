import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const ellipsisAnimation = keyframes`
  0% {
    content: '.  ';
  }
  33% {
    content: '.. ';
  }
  66% {
    content: '...';
  }
`;

export const EllipsisTypography = styled('span', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  color: ${({ color }) => color};
  :after {
    animation: ${ellipsisAnimation} 900ms infinite ease-in-out;
    content: '.  ';
  }
`;
