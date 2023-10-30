import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { getTypographyStyleFromToken } from '../../../../foundation/Typography';

export const SubLinkButton = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 8px;

  ${({ theme }) => css(getTypographyStyleFromToken({ theme, token: 'primaryBodySmallRegular' }))};

  color: ${({ theme }) => theme.colors.lavenderWeb};
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.liberty7};
  border-radius: 2px;
  width: 100%;
  box-sizing: border-box;
  transition: background-color 200ms ease-in;

  &:hover {
    text-decoration: none;
    text-shadow: 0px 0px 20px rgba(225, 221, 247, 0.7);
    background-color: ${({ theme }) => theme.colors.lavenderWeb8};
  }
`;

export const ActiveSubLinkButton = styled(SubLinkButton)`
  text-decoration: none;
  text-shadow: 0px 0px 20px rgba(225, 221, 247, 0.7);
  background: ${({ theme }) => theme.colors.lavenderWeb8};
`;
