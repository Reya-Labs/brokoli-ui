import React from 'react';

import { CloseButtonStyled } from './CloseButton.styled';

type CloseButtonProps = {
  onClick?: () => void;
};

export const CloseButton: React.FunctionComponent<CloseButtonProps> = React.memo(({ onClick }) => {
  return <CloseButtonStyled onClick={onClick}>✕</CloseButtonStyled>;
});
