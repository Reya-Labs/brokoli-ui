import styled from '@emotion/styled';

export const CheckboxFieldBox = styled('label')`
  font-family: system-ui, sans-serif;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.1;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
  cursor: pointer;

  .form-control--disabled {
    color: var(--form-control-disabled);
    cursor: not-allowed;
  }

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
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid ${({ theme }) => theme.colors.white950};
    border-radius: 0.15em;
    transform: translateY(-0.075em);

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
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em ${({ theme }) => theme.colors.white100};
    /* Windows High Contrast Mode */
    background-color: CanvasText;
  }

  & input[type='checkbox']:checked::before {
    transform: scale(1);
  }

  & input[type='checkbox']:focus {
    outline: max(2px, 0.15em) solid ${({ theme }) => theme.colors.white950};
    outline-offset: max(2px, 0.15em);
  }

  & input[type='checkbox']:disabled {
    color: ${({ theme }) => theme.colors.black700};
    cursor: not-allowed;
  }
`;
