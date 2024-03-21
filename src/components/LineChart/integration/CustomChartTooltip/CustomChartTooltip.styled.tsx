import styled from '@emotion/styled';

export const Box = styled('div')`
  display: flex;
  min-width: 200px;
  padding: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.black700};
  background: ${({ theme }) => theme.colors.black900};
`;

export const RowBox = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;
