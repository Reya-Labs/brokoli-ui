import React from 'react';

import { ProgressBarBoxContainer, ProgressBarPercentageBox } from './ProgressBar.styled';

type ProgressBarProps = {
  percentageComplete?: number;
};

export const ProgressBar = ({ percentageComplete = 0 }: ProgressBarProps) => (
  <ProgressBarBoxContainer data-testid="ProgressBar-ProgressBarBoxContainer">
    <ProgressBarPercentageBox
      data-testid="ProgressBar-PercentageBox"
      percentage={Math.min(percentageComplete, 100)}
    />
  </ProgressBarBoxContainer>
);
