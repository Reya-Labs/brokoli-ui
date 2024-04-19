import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { BaseColorTokens, getColorFromToken } from '../../foundation/Colors';
import { getResponsiveTypographyStyleFromToken } from '../../foundation/Typography';
import { createTransition } from '../../utils/create-transition';
import { shouldNotForwardProps } from '../../utils/should-not-forward-props';

export type PillSelectorVariant = 'compact' | 'regular';
export const PillSelectorBox = styled('div', shouldNotForwardProps(['variant']))<{
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

export const PillSelectorButton = styled(
  'button',
  shouldNotForwardProps(['active', 'attentionPrefixColorToken']),
)<{
  active: boolean;
  attentionPrefixColorToken: BaseColorTokens;
  error?: boolean;
}>`
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 4px 8px;

  background: ${({ theme, active }) => (active ? theme.colors.white800 : theme.colors.black900)};
  box-shadow: ${({ theme, error, active }) =>
    !error
      ? active
        ? `0px 2px 10px ${theme.colors.black700}, 0px 8px 40px rgba(38, 103, 255, 0.2), 0px 5px 40px rgba(255, 74, 169, 0.2)`
        : `0px 0px 1px ${theme.colors.white700}`
      : `0px 4px 4px ${theme.colors.black900}, 0px 0px 1px ${theme.colors.error100}`};

  border-radius: 4px;
  z-index: ${({ active }) => (active ? 1 : 0)};

  ${({ theme }) =>
    css(getResponsiveTypographyStyleFromToken({ theme, token: 'bodyXSmallRegular' }))};

  color: ${({ theme, error, active }) =>
    !error
      ? active
        ? theme.colors.white100
        : theme.colors.white400
      : active
      ? theme.colors.error100
      : theme.colors.error400};
  cursor: pointer;
  transition: ${createTransition()};

  & > span {
    color: ${({ theme, attentionPrefixColorToken }) =>
      getColorFromToken({ colorToken: `${attentionPrefixColorToken}100`, theme })};
  }

  &:disabled > span {
    color: ${({ theme, attentionPrefixColorToken }) =>
      getColorFromToken({ colorToken: `${attentionPrefixColorToken}400`, theme })};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme, active }) => (!active ? theme.colors.white500 : theme.colors.white300)};
    background: ${({ theme, active }) => (active ? theme.colors.white700 : theme.colors.black800)};
  }
`;

export const PillWrapperBox = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
