import styled from '@emotion/styled';
import CurrencyInput from 'react-currency-input-field';

import { colors } from '../../foundation/Colors';
import { secondaryBodySmallRegularCSS } from '../Typography/Typography.css';

export const CurrencyInputStyled = styled(CurrencyInput)<{ error?: boolean }>`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 10px;
  gap: 8px;

  height: 100%;
  width: 100%;

  background: linear-gradient(90.95deg, ${colors.lavenderWeb8} 0.66%, ${colors.liberty8} 99.34%);
  box-shadow: ${({ error }) =>
    error
      ? `0px 0px 1px ${colors.wildStrawberry}, inset 1px 2px 2px ${colors.wildStrawberry7}`
      : `0px 0px 1px ${colors.lavenderWeb3}, inset 1px 2px 6px ${colors.liberty8}`};
  border-radius: 4px;
  border: none;

  ${secondaryBodySmallRegularCSS};
  color: ${({ error }) => (error ? colors.wildStrawberry3 : colors.lavenderWeb3)};

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
