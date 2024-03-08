import styled from '@emotion/styled';

import { UnstyledButton } from '../UnstyledButton';

export const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ActionButton = styled(UnstyledButton)<{
  disabled: boolean;
}>`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 8px;
  cursor: pointer;
  ${({ disabled }) => (disabled ? 'pointer-events: none' : '')}
`;

export const BarBox = styled.div`
  width: 96px;
`;
