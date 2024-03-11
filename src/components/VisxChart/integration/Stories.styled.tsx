import styled from '@emotion/styled';

export const ParentBox = styled('div')`
  height: 445px;
  border: 1px solid yellow;
  display: flex;
  flex-direction: row;
  gap: 8px;
  background: ${({ theme }) => theme.colors.black900};
  padding: 32px;
`;

export const Box = styled('div')`
  height: 100%;
  border: 1px solid gainsboro;
  overflow: hidden;
  border-radius: 8px;
  flex: 5;
  background: ${({ theme }) => theme.colors.black900};
`;

export const LeftBox = styled('div')`
  height: 100%;
  border-radius: 8px;
  flex: 1;
  background: ${({ theme }) => theme.colors.black900};
  overflow-y: auto;
`;

export const RightBox = styled('div')`
  height: 100%;
  border-radius: 8px;
  flex: 1;
  background: ${({ theme }) => theme.colors.black900};
  overflow-y: auto;
`;

export const TooltipBox = styled('div')`
  background: ${({ theme }) => theme.colors.secondary900};
  border: 1px solid ${({ theme }) => theme.colors.secondary700};
  border-radius: 8px;
  padding: 16px;
`;
