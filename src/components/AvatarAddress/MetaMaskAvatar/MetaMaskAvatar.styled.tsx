import styled from '@emotion/styled';

export const AvatarWrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'size',
})<{
  size: number;
}>`
  border-radius: 50%;
  padding: 0;
  margin: 0;
  display: inline-block;
  background: rgb(242, 98, 2);
  overflow: hidden;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;
