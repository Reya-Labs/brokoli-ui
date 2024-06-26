import React, { useEffect, useState } from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { Box, PercentageBox } from './ProgressBar.styled';

export type ProgressBarProps = {
  backgroundColorToken?: 'transparent' | ColorTokens;
  barColorToken?: ColorTokens;
  className?: string;
  height?: number;
  percentageComplete: number;
  rounded?: boolean;
};

export const ProgressBar = ({
  barColorToken = 'white600',
  backgroundColorToken = 'black700',
  percentageComplete = 0,
  height = 4,
  className,
  rounded = false,
}: ProgressBarProps) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // This can be enhanced to calculate the difference and adjust the duration dynamically
    setWidth(percentageComplete);
  }, [percentageComplete]);

  return (
    <Box
      backgroundColorToken={backgroundColorToken}
      data-testid="ProgressBar-Box"
      height={height}
      rounded={rounded}
    >
      <PercentageBox
        barColorToken={barColorToken}
        className={className}
        data-testid="ProgressBar-PercentageBox"
        height={height}
        rounded={rounded}
        width={Math.min(width, 100)}
      />
    </Box>
  );
};
