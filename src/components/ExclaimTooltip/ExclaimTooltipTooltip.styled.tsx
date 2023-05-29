import styled from '@emotion/styled';

export const ExclaimBox = styled('span', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  cursor: pointer;
  vertical-align: middle;
  & svg {
    width: 1em;
    height: 1em;
  }
  & g {
    stroke: ${({ color }) => color};
  }
`;
