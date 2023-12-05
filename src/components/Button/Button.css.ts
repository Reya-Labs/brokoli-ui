import { css, Theme } from '@emotion/react';

export const primaryButtonCSS = (theme: Theme) => css`
  background: ${theme.colors.white100};
  border: 1px solid ${theme.colors.black600};
  box-shadow:
    0px 2px 10px ${theme.colors.black700},
    0px 8px 40px rgba(38, 103, 255, 0.2),
    0px 5px 40px rgba(255, 74, 169, 0.2);
  color: ${theme.colors.black900};

  transition:
    box-shadow,
    color 200ms ease-in;
  &:hover {
    box-shadow:
      0px 2px 4px ${theme.colors.black700},
      0px 12px 43px rgba(38, 103, 255, 0.4),
      0px 10px 50px rgba(255, 74, 169, 0.2);
  }

  &:active {
    box-shadow:
      0px 2px 3px ${theme.colors.black700},
      0px 2px 12px rgba(38, 103, 255, 0.3),
      0px 0px 10px rgba(255, 74, 169, 0.2),
      inset 0px 4px 13px rgba(11, 9, 17, 0.3);
  }

  &:disabled {
    background: ${theme.colors.white800};
    color: ${theme.colors.white500};
    box-shadow: none;
    cursor: not-allowed;
  }
`;

export const secondaryButtonCSS = (theme: Theme) => css`
  background: transparent;
  border: 1px solid ${theme.colors.white800};
  color: ${theme.colors.white100};
  transition:
    border-color,
    color 200ms ease-in;

  &:hover {
    border: 1px solid ${theme.colors.white500};
  }

  &:disabled {
    color: ${theme.colors.white700};
    cursor: not-allowed;
  }
`;

export const tertiaryButtonCSS = (theme: Theme) => css`
  background: ${theme.colors.primary950};
  border: 1px solid ${theme.colors.primary800};
  color: ${theme.colors.primary500};
  transition:
    border-color,
    color 200ms ease-in;

  &:hover {
    border: 1px solid ${theme.colors.primary500};
  }

  &:disabled {
    color: ${theme.colors.primary100};
    cursor: not-allowed;
  }
`;
