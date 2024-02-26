import styled from '@emotion/styled';

import { ColorTokens } from '../../foundation/Colors';
import { shouldNotForwardProps } from '../../utils/should-not-forward-props';

export const CloseButtonWrapper = styled(
  'button',
  shouldNotForwardProps(['colorToken, backgroundColorToken, hoverColorToken']),
)<{
  colorToken: ColorTokens;
  backgroundColorToken: ColorTokens;
  hoverBackgroundColorToken: ColorTokens;
}>`
  padding: 6px;
  line-height: 0;
  color: ${({ colorToken }) => colorToken};
  background: ${({ backgroundColorToken }) => backgroundColorToken};
  border-radius: 4px;
  cursor: pointer;
  border: none;

  &:hover {
    background: ${({ hoverBackgroundColorToken }) => hoverBackgroundColorToken};
  }
`;
