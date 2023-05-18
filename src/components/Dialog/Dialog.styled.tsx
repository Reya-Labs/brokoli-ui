import styled from '@emotion/styled';

import { colors } from '../../foundation/Colors';

export const DialogBox = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;

  position: relative;

  background: linear-gradient(90.95deg, ${colors.lavenderWeb8} 0.66%, ${colors.liberty8} 99.34%);
  border: 1px solid ${colors.lavenderWeb7};
  border-radius: 8px;
`;
