import React, { FunctionComponent } from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { Container } from './BouncedLoading.styled';

export type BouncedLoadingProps = {
  colorToken?: ColorTokens;
  highlightColorToken?: ColorTokens;
};

export const BouncedLoading: FunctionComponent<BouncedLoadingProps> = ({
  colorToken = 'white400',
  highlightColorToken = 'primary400',
}) => {
  const bouncingElements = React.useMemo(
    () =>
      Array.from({ length: 3 }, (_, index) => (
        <i key={index} data-testid={`BouncedLoading-Item-${index}`} />
      )),
    [],
  );

  return (
    <Container
      colorToken={colorToken}
      data-testid="BouncedLoading-Container"
      highlightColorToken={highlightColorToken}
    >
      {bouncingElements}
    </Container>
  );
};
