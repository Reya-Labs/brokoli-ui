import styled from '@emotion/styled';

export const TooltipBox = styled('div', {
  shouldForwardProp: (prop) => prop !== 'limitWidth',
})<{
  limitWidth: boolean;
}>`
  box-sizing: border-box;
  background: linear-gradient(
    90.95deg,
    ${({ theme }) => theme.colors.white900} 0.66%,
    ${({ theme }) => theme.colors.liberty8} 99.34%
  );
  border: 1px solid ${({ theme }) => theme.colors.white800};
  border-radius: 8px;
  width: max-content;
  ${({ limitWidth }) => (limitWidth ? 'max-width: 240px' : '')};
  padding: 12px;
`;

export const TriggerBox = styled('span')`
  display: inline-block;
`;
