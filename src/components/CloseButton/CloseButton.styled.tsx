import styled from '@emotion/styled';

import { colors } from '../../foundation/Colors';

export const CloseButtonStyled = styled('button')`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px 8px;
  gap: 4px;
  background: ${colors.lavenderWeb8};
  border-radius: 4px;
  color: ${colors.lavenderWeb};
  cursor: pointer;
  border: none;
  &:hover {
    background: ${colors.lavenderWeb7};
  }
`;
