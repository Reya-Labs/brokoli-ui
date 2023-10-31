import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { BaseColorTokens, getColorFromToken } from '../../foundation/Colors';
import { getResponsiveTypographyStyleFromToken } from '../../foundation/Typography';

export type PillSelectorVariant = 'compact' | 'regular';
export const PillSelectorBox = styled('div', {
  shouldForwardProp: (prop) => prop !== 'variant',
})<{
  variant: PillSelectorVariant;
}>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  & button:nth-child(n + 1) {
    margin-right: ${({ variant }) => (variant === 'compact' ? '-2px' : '8px')};
  }
`;

export const PillSelectorButton = styled('button', {
  shouldForwardProp: (prop) =>
    prop !== 'error' && prop !== 'active' && prop !== 'attentionPrefixColorToken',
})<{
  error?: boolean;
  active: boolean;
  attentionPrefixColorToken: BaseColorTokens;
}>`
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 4px 8px;

  background: ${({ theme, active }) => (active ? theme.colors.white800 : theme.colors.liberty8)};
  box-shadow: ${({ theme, error, active }) =>
    !error
      ? active
        ? `0px 2px 10px ${theme.colors.liberty6}, 0px 8px 40px rgba(38, 103, 255, 0.2), 0px 5px 40px rgba(255, 74, 169, 0.2)`
        : `0px 0px 1px ${theme.colors.white700}`
      : `0px 4px 4px ${theme.colors.liberty8}, 0px 0px 1px ${theme.colors.wildStrawberry}`};

  border-radius: 4px;
  z-index: ${({ active }) => (active ? 1 : 0)};

  ${({ theme }) =>
    css(getResponsiveTypographyStyleFromToken({ theme, token: 'primaryBodyXSmallRegular' }))};

  color: ${({ theme, error, active }) =>
    !error
      ? active
        ? theme.colors.lavenderWeb
        : theme.colors.white400
      : active
      ? theme.colors.wildStrawberry
      : theme.colors.wildStrawberry3};
  cursor: pointer;
  transition: all 200ms ease-in;

  & > span {
    color: ${({ theme, attentionPrefixColorToken }) =>
      getColorFromToken({ colorToken: attentionPrefixColorToken, theme })};
  }

  &:disabled > span {
    color: ${({ theme, attentionPrefixColorToken }) =>
      getColorFromToken({ colorToken: `${attentionPrefixColorToken}3`, theme })};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme, active }) => (!active ? theme.colors.white500 : theme.colors.lavenderWeb2)};
    background: ${({ theme, active }) => (active ? theme.colors.white700 : theme.colors.liberty7)};
  }
`;

export const PillWrapperBox = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
