import styled from '@emotion/styled';

import { addAlpha } from '../../foundation/Colors';

export const DialogBox = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;

  position: relative;
  box-shadow: 0px 0px 40px 0px ${({ theme }) => addAlpha(theme.colors.white100, 0.1)};
  background: linear-gradient(
    90.95deg,
    ${({ theme }) => theme.colors.white900} 0.66%,
    ${({ theme }) => theme.colors.liberty8} 99.34%
  );
  border: 1px solid ${({ theme }) => theme.colors.white800};
  border-radius: 8px;
`;
