import React, { useMemo } from 'react';

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
  const pills = useMemo(
    () => [
      experiencePercentage > 0,
      experiencePercentage >= 20,
      experiencePercentage >= 40,
      experiencePercentage >= 60,
      experiencePercentage >= 80,
    ],
    [experiencePercentage],
  );
  return (
    <ExperiencePillsBox data-testid="ExperiencePills-ExperiencePillsBox">
      {pills.map((isActive, index) => (
        <ExperiencePill
          key={index}
          colorToken={colorToken}
          data-testid={`ExperiencePills-ExperiencePill${index + 1}-${colorToken}-${
            isActive ? 'Active' : 'NotActive'
          }`}
          isActive={isActive}
        />
      ))}
    </ExperiencePillsBox>
  );
};
