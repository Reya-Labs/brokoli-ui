import styled from '@emotion/styled';

const ARROW_SIZE = 10;

export const TooltipBox = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 8px;

  background: ${({ theme }) => theme.colors.black900};
  border: 1px solid ${({ theme }) => theme.colors.black500};
  border-radius: 8px;

  &:after {
    content: '';
    width: ${ARROW_SIZE}px;
    height: ${ARROW_SIZE}px;
    transform: rotate(-45deg);
    background: ${({ theme }) => theme.colors.black900};
    border-left: 1px solid ${({ theme }) => theme.colors.black500};
    border-bottom: 1px solid ${({ theme }) => theme.colors.black500};
    position: absolute;
    z-index: 1;
    bottom: -${ARROW_SIZE / 2}px;
    left: calc(50% - ${ARROW_SIZE / 2}px);
  }
`;
