import React, { FunctionComponent } from 'react';

import { Container } from './Confetti.styled';

export const Confetti: FunctionComponent = ({ children }) => {
  const leafElements = React.useMemo(
    () =>
      Array.from({ length: 20 }, (_, index) => (
        <i key={index} data-testid={`Confetti-Item${index}`} tabIndex={-1} />
      )),
    [],
  );

  return (
    <Container data-testid="Confetti-Container">
      {children}
      {leafElements}
    </Container>
  );
};
