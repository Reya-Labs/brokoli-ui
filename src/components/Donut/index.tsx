import React, { FunctionComponent } from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { Container, Hole } from './Donut.styled';

export type DonutProps = {
  colorToken: ColorTokens;
  holeColorToken?: ColorTokens;
  percentage: number;
};

export const Donut: FunctionComponent<DonutProps> = ({
  holeColorToken,
  colorToken,
  percentage,
}) => {
  const computedPercentage = Math.min(Math.max(percentage, 0), 100);
  const computedHoleColorToken = holeColorToken || 'liberty6';
  return (
    <Container
      colorToken={colorToken}
      data-testid={`Donut-Container-${colorToken}-${computedPercentage}`}
      percentage={computedPercentage}
    >
      <Hole
        colorToken={computedHoleColorToken}
        data-testid={`Donut-Hole-${computedHoleColorToken}`}
      />
    </Container>
  );
};
