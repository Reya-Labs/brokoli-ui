import styled from '@emotion/styled';

import { shouldNotForwardProps } from '../../utils/should-not-forward-props';
import { Button } from '../Button';

export const OptionButtonsWrapperBox = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const OptionButtonsBox = styled('div')`
  display: flex;
  flex-direction: row;
  position: relative;

  > *:not(:first-child) {
    margin-left: -16px;
  }
`;

export const OptionButton = styled(Button, shouldNotForwardProps(['isActive']))<{
  isActive: boolean;
}>`
  padding: 8px 16px;
  z-index: ${({ isActive }) => (isActive ? '1' : '0')};
  flex: 1;
`;
