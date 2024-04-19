import React from 'react';

import { BaseColorTokens } from '../../foundation/Colors';
import { ExperiencePill, ExperiencePillsBox } from './ExperiencePills.styled';

export type ExperiencePillsProps = {
  colorToken: BaseColorTokens;
  experiencePercentage: number;
};

export const ExperiencePills: React.FunctionComponent<ExperiencePillsProps> = ({
  experiencePercentage,
  colorToken,
}) => {
  return (
    <ExperiencePillsBox data-testid="ExperiencePills-ExperiencePillsBox">
      <ExperiencePill
        colorToken={colorToken}
        data-testid="ExperiencePills-ExperiencePill1"
        isActive={experiencePercentage > 0}
      />
      <ExperiencePill
        colorToken={colorToken}
        data-testid="ExperiencePills-ExperiencePill2"
        isActive={experiencePercentage >= 20}
      />
      <ExperiencePill
        colorToken={colorToken}
        data-testid="ExperiencePills-ExperiencePill3"
        isActive={experiencePercentage >= 40}
      />
      <ExperiencePill
        colorToken={colorToken}
        data-testid="ExperiencePills-ExperiencePill4"
        isActive={experiencePercentage >= 60}
      />
      <ExperiencePill
        colorToken={colorToken}
        data-testid="ExperiencePills-ExperiencePill5"
        isActive={experiencePercentage >= 80}
      />
    </ExperiencePillsBox>
  );
};
