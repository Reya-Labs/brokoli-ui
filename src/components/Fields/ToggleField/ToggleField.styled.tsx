import styled from '@emotion/styled';

import { createTransition } from '../../../utils/create-transition';

export const ToggleFieldBox = styled('div')`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  input {
    opacity: 0;
    position: absolute;
    z-index: -1;
  }

  label {
    position: relative;
    cursor: pointer;
    transition: ${createTransition({ properties: 'background' })};

    display: inline-flex;
    width: 26px;
    padding: 4px;
    align-items: flex-start;
    gap: 8px;
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.colors.black100};
    background: ${({ theme }) => theme.colors.black950};
  }

  label::after {
    content: '';
    transition: ${createTransition({ properties: 'transform' })};

    width: 8px;
    height: 6px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.white100};
    background: ${({ theme }) => theme.colors.white100};
    box-shadow: 0px 0px 8.2px 0px ${({ theme }) => theme.colors.white100};
  }

  input:checked + label::after {
    border: 1px solid ${({ theme }) => theme.colors.primary500};
    background: ${({ theme }) => theme.colors.primary500};
    box-shadow: 0px 0px 8.2px 0px ${({ theme }) => theme.colors.primary500};
  }

  input:checked + label::after {
    transform: translateX(100%);
  }

  input:disabled + label::after {
    border: 1px solid ${({ theme }) => theme.colors.black100};
    background: ${({ theme }) => theme.colors.black100};
    box-shadow: 0px 0px 8.2px 0px ${({ theme }) => theme.colors.black100};
    cursor: not-allowed;
  }
`;
