import styled from '@emotion/styled';

import { colors } from '../../../foundation/Colors';
import { primaryBodySmallRegularCSS } from '../../Typography/Typography.css';

export const IconBox = styled('div')`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${colors.lavenderWeb8};
  transition: background-color 300ms ease-in;
`;

export const ChainOptionButton = styled('button')`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 8px;

  ${primaryBodySmallRegularCSS};

  color: ${colors.lavenderWeb};
  text-decoration: none;
  background-color: ${colors.liberty7};
  border-radius: 2px;
  width: 100%;
  box-sizing: border-box;
  transition: background-color 300ms ease-in;
  border: 0;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    text-shadow: 0px 0px 20px rgba(225, 221, 247, 0.7);
    background-color: ${colors.lavenderWeb8};
  }

  &:hover div {
    background: ${colors.liberty7};
  }
`;

export const ActiveChainOptionButton = styled(ChainOptionButton)`
  text-decoration: none;
  text-shadow: 0px 0px 20px rgba(225, 221, 247, 0.7);
  background: ${colors.lavenderWeb8};
`;
