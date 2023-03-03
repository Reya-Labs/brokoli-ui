import styled from '@emotion/styled';

import { colors } from '../../foundation/Colors';
import { secondaryBodyXSmallRegularCSS } from '../Typography/Typography.css';

export const LeverageFieldBox = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;
`;

export const FieldButtonsBox = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;
export const CurrencyFieldBox = styled('div')`
  width: 77px;
`;

export const ButtonsBox = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;
`;

export const ButtonStyled = styled('button')<{
  active: boolean;
}>`
  flex: 1;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 8px 14px;

  background: ${({ active }) =>
    active
      ? `linear-gradient(259.45deg, ${colors.lavenderWeb8} 0%, ${colors.lavenderWeb7} 84.3%)`
      : `linear-gradient(90.95deg, ${colors.lavenderWeb8} 0.66%, ${colors.liberty8} 99.34%)`};
  box-shadow: ${({ active }) =>
    active ? `0px 0px 1px ${colors.lavenderWeb}` : `0px 0px 1px ${colors.lavenderWeb6}`};

  border-radius: 4px;

  ${secondaryBodyXSmallRegularCSS};
  color: ${colors.lavenderWeb};
  cursor: pointer;
  transition: all 200ms ease-in;

  &:hover {
    box-shadow: 0px 0px 1px ${colors.lavenderWeb};
  }

  &:active {
    background: linear-gradient(259.45deg, ${colors.liberty6} 0%, ${colors.lavenderWeb7} 84.3%);
    box-shadow: 0px -1px 4px ${colors.liberty8}, 0px 0px 1px ${colors.lavenderWeb};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({ active }) => (!active ? colors.lavenderWeb4 : colors.lavenderWeb2)};
    background: ${({ active }) =>
      active
        ? `linear-gradient(
      259.45deg,
      ${colors.liberty8} 0%,
      ${colors.lavenderWeb8} 33.14%,
      ${colors.lavenderWeb7} 84.3%)`
        : `linear-gradient(261.54deg, ${colors.lavenderWeb8} -58.11%, ${colors.liberty8} 12.89%)`};

    box-shadow: 0px 0px 1px ${colors.lavenderWeb};
  }
`;
