import React from 'react';

import { ProgressBarBoxContainer, ProgressBarPercentageBox } from './ProgressBar.styled';

type ProgressBarProps = {
  percentageComplete?: number;
  className: string;
};

export const ProgressBar = ({ percentageComplete = 0, className }: ProgressBarProps) => (
  <ProgressBarBoxContainer data-testid="ProgressBar-ProgressBarBoxContainer">
    <ProgressBarPercentageBox
      className={className}
      data-testid="ProgressBar-PercentageBox"
      percentage={Math.min(percentageComplete, 100)}
    />
  </ProgressBarBoxContainer>
);
