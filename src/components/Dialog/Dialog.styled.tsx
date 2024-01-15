import styled from '@emotion/styled';

export const DialogBox = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;

  position: relative;
  background: ${({ theme }) => theme.colors.black900};
  border: 1px solid ${({ theme }) => theme.colors.black500};
  border-radius: 8px;
`;
