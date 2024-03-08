import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { addAlpha } from '../../../../foundation/Colors';
import { getResponsiveTypographyStyleFromToken } from '../../../../foundation/Typography';
import { createTransition } from '../../../../utils/create-transition';

export const SubLinkButton = styled('a')`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 8px;

  ${({ theme }) =>
    css(getResponsiveTypographyStyleFromToken({ theme, token: 'bodySmallRegular' }))};

  color: ${({ theme }) => theme.colors.white100};
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.black800};
  border-radius: 2px;
  width: 100%;
  transition: ${createTransition({ properties: 'background-color' })};

  &:hover:enabled {
    text-decoration: none;
    text-shadow: 0px 0px 20px ${({ theme }) => addAlpha(theme.colors.white100, 0.7)};
    background-color: ${({ theme }) => theme.colors.white900};
  }
`;

export const ActiveSubLinkButton = styled('a')`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 8px;

  ${({ theme }) =>
    css(getResponsiveTypographyStyleFromToken({ theme, token: 'bodySmallRegular' }))};

  color: ${({ theme }) => theme.colors.white100};
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.black800};
  border-radius: 2px;
  width: 100%;
  transition: ${createTransition({ properties: 'background-color' })};

  &:hover:enabled {
    text-decoration: none;
    text-shadow: 0px 0px 20px ${({ theme }) => addAlpha(theme.colors.white100, 0.7)};
    background-color: ${({ theme }) => theme.colors.white900};
  }

  text-shadow: 0px 0px 20px ${({ theme }) => addAlpha(theme.colors.white100, 0.7)};
  background: ${({ theme }) => theme.colors.white900};
`;
