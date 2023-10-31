import styled from '@emotion/styled';

const ARROW_SIZE = 10;

export const TooltipBox = styled('div')`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  padding: 8px;

  background: linear-gradient(
    90.95deg,
    ${({ theme }) => theme.colors.white900} 0.66%,
    ${({ theme }) => theme.colors.liberty8} 99.34%
  );
  border: 1px solid ${({ theme }) => theme.colors.white800};
  border-radius: 8px;

  &:after {
    content: '';
    width: ${ARROW_SIZE}px;
    height: ${ARROW_SIZE}px;
    transform: rotate(-45deg);
    background: ${({ theme }) => theme.colors.liberty7};
    border-left: 1px solid ${({ theme }) => theme.colors.lavenderWeb6};
    border-bottom: 1px solid ${({ theme }) => theme.colors.lavenderWeb6};
    position: absolute;
    z-index: 1;
    bottom: -${ARROW_SIZE / 2}px;
    left: calc(50% - ${ARROW_SIZE / 2}px);
  }
`;
