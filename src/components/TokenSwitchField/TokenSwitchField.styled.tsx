import { css } from '@emotion/react';
import styled from '@emotion/styled';
import CurrencyInput from 'react-currency-input-field';

import { colors } from '../../foundation/Colors';
import { secondaryBodyMediumBoldCSSObject } from '../Typography/Typography.css';

export const TokenFieldBox = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const TopBox = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const BottomBox = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const CurrencyInputBox = styled('div')`
  position: relative;
`;
export const TokenBox = styled('div')`
  position: absolute;
  right: 8px;
  top: calc(50% - 9px);
  display: flex;
  gap: 8px;
`;
export const SwitchButtonsBox = styled('div')`
  position: absolute;
  left: 8px;
  top: 6px;
`;
export const CurrencyInputStyled = styled(CurrencyInput)<{ error?: boolean }>`
  box-sizing: border-box;
  direction: rtl;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 6px 44px 6px 146px;
  gap: 8px;
  border-radius: 4px;
  height: 44px;
  width: 100%;

  /* background: linear-gradient(90.95deg, ${colors.lavenderWeb8} 0.66%, ${colors.liberty8} 99.34%); */
  background: linear-gradient(91.94deg, ${colors.lavenderWeb8} 48.36%, ${colors.liberty8} 99.28%);
  box-shadow: ${({ error }) =>
    error
      ? `0px 0px 1px ${colors.wildStrawberry}, inset 1px 2px 2px ${colors.wildStrawberry7}`
      : `0px 0px 1px ${colors.lavenderWeb3}, inset 1px 2px 6px ${colors.liberty8}`};
  border: none;

  ${css(secondaryBodyMediumBoldCSSObject)};
  color: ${({ error }) => (error ? colors.wildStrawberry3 : colors.lavenderWeb3)};

  text-shadow: 0px 0px 20px rgba(225, 221, 247, 0.3);

  outline: none;
  transition: all 200ms ease-in;

  &:focus,
  &:hover {
    color: ${({ error }) => (error ? colors.wildStrawberry : colors.lavenderWeb)};
    background: linear-gradient(
      128.99deg,
      ${colors.lavenderWeb8} -14.63%,
      ${colors.liberty8} 97.68%
    );
    box-shadow: ${({ error }) =>
      error
        ? `0px 0px 1px ${colors.wildStrawberry}, inset 1px 2px 2px ${colors.wildStrawberry7}`
        : `0px 0px 1px ${colors.lavenderWeb}, inset 2px 4px 6px ${colors.liberty8}`};
  }

  &:disabled {
    color: ${colors.lavenderWeb4};
    background: linear-gradient(90.49deg, ${colors.lavenderWeb8} 0.43%, ${colors.liberty8} 99.37%);
    box-shadow: 0px 0px 1px ${colors.liberty2};
    cursor: not-allowed;
  }
`;
