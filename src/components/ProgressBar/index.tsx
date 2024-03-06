import React, { useEffect, useState } from 'react';

import { ProgressBarBoxContainer, ProgressBarPercentageBox } from './ProgressBar.styled';

type ProgressBarProps = {
  percentageComplete?: number;
  className?: string;
};

export const ProgressBar = ({ percentageComplete = 0, className }: ProgressBarProps) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // This can be enhanced to calculate the difference and adjust the duration dynamically
    setWidth(percentageComplete);
  }, [percentageComplete]);

  return (
    <ProgressBarBoxContainer data-testid="ProgressBar-ProgressBarBoxContainer">
      <ProgressBarPercentageBox
        className={className}
        data-testid="ProgressBar-PercentageBox"
        width={Math.min(width, 100)}
      />
    </ProgressBarBoxContainer>
  );
};
