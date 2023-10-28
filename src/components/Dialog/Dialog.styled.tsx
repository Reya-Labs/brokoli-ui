import styled from '@emotion/styled';

export const DialogBox = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;

  position: relative;
  box-shadow: 0px 0px 40px 0px rgba(225, 221, 247, 0.1);
  background: linear-gradient(
    90.95deg,
    ${({ theme }) => theme.colors.lavenderWeb8} 0.66%,
    ${({ theme }) => theme.colors.liberty8} 99.34%
  );
  border: 1px solid ${({ theme }) => theme.colors.lavenderWeb7};
  border-radius: 8px;
`;
