import { css, Theme } from '@emotion/react';

export const primaryButtonCSS = (theme: Theme) => css`
  background: ${theme.colors.lavenderWeb};
  border: 1px solid ${theme.colors.liberty5};
  box-shadow:
    0px 2px 10px ${theme.colors.liberty6},
    0px 8px 40px rgba(38, 103, 255, 0.2),
    0px 5px 40px rgba(255, 74, 169, 0.2);
  color: ${theme.colors.liberty8};

  transition:
    box-shadow,
    color 200ms ease-in;
  &:hover {
    box-shadow:
      0px 2px 4px ${theme.colors.liberty6},
      0px 12px 43px rgba(38, 103, 255, 0.4),
      0px 10px 50px rgba(255, 74, 169, 0.2);
  }

  &:active {
    box-shadow:
      0px 2px 3px ${theme.colors.liberty6},
      0px 2px 12px rgba(38, 103, 255, 0.3),
      0px 0px 10px rgba(255, 74, 169, 0.2),
      inset 0px 4px 13px rgba(11, 9, 17, 0.3);
  }

  &:disabled {
    background: ${theme.colors.lavenderWeb7};
    color: ${theme.colors.lavenderWeb4};
    box-shadow: none;
    cursor: not-allowed;
  }
`;

export const secondaryButtonCSS = (theme: Theme) => css`
  background: transparent;
  border: 1px solid ${theme.colors.lavenderWeb7};
  color: ${theme.colors.lavenderWeb};
  transition:
    border-color,
    color 200ms ease-in;

  &:hover {
    border: 1px solid ${theme.colors.lavenderWeb4};
  }

  &:disabled {
    color: ${theme.colors.lavenderWeb6};
    cursor: not-allowed;
  }
`;
