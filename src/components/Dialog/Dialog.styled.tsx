import styled from '@emotion/styled';

import { colors } from '../../foundation/Colors';

export const DialogBox = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 40px;

  position: relative;

  background: ${colors.liberty8};
  box-shadow: 0px 4px 30px ${colors.liberty5}, 0px 0px 1px ${colors.lavenderWeb3},
    inset 1px 2px 6px ${colors.liberty8};
  border-radius: 4px;
`;
