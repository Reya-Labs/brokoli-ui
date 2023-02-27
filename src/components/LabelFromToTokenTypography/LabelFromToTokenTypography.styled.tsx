import styled from '@emotion/styled';

import { getColorFromToken } from '../../foundation/Colors';

export const LabelFromToTokenTypographyBox = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const FromToBox = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 8px;

  & > strong {
    font-weight: inherit;

    color: ${getColorFromToken('lavenderWeb3')};
  }

  & strong {
    margin-right: 0 !important;
  }
`;
