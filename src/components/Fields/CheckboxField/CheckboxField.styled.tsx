import styled from '@emotion/styled';

import { createTransition } from '../../../utils/create-transition';
import { shouldNotForwardProps } from '../../../utils/should-not-forward-props';

export const CheckboxFieldBox = styled(
  'label',
  shouldNotForwardProps(['error', 'size', 'disabled']),
)<{
  disabled: boolean;
  size: number;
  error: boolean;
}>`
  font-family: system-ui, sans-serif;
  font-size: ${({ size }) => size}px;
  font-weight: bold;
  line-height: 1.1;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  & input[type='checkbox'] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    /* Remove most all native input styles */
    appearance: none;
    /* For iOS < 15 */
    background-color: ${({ theme }) => theme.colors.black950};
    /* Not removed via appearance */
    margin: 0;

    font: inherit;
    color: ${({ theme }) => theme.colors.white100};
    width: 1em;
    height: 1em;
    border: 1px solid
      ${({ theme, error }) => (error ? theme.colors.error500 : theme.colors.white950)};
    border-radius: 4px;

    display: grid;
    place-content: center;
  }

  & input[type='checkbox']::before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: ${createTransition({ properties: 'transform' })};
    box-shadow: inset 1em 1em
      ${({ disabled, theme, error }) =>
        disabled ? theme.colors.black400 : error ? theme.colors.error500 : theme.colors.white100};

    /* Windows High Contrast Mode */
    background-color: CanvasText;
  }

  & input[type='checkbox']:checked::before {
    transform: scale(1);
  }

  & input[type='checkbox']:focus {
    outline: max(3px, 0.15em) solid ${({ theme }) => theme.colors.black400};
  }

  & input[type='checkbox']:disabled {
    color: ${({ theme }) => theme.colors.black400};
    border: 1px solid ${({ theme }) => theme.colors.black400};
    background-color: ${({ theme }) => theme.colors.black800};
    cursor: not-allowed;
  }
`;
