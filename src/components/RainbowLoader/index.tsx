import React from 'react';

import {
  LoadingBox,
  LoadingEllipsis,
  LoadingRect1,
  LoadingRect2,
  RainbowLoaderBox,
  RainbowText,
} from './RainbowLoader.styled';

export type RainbowLoaderProps = {
  className?: string;
  'data-testid'?: string;
  height: number;
  text?: string;
};

export const RainbowLoader: React.FunctionComponent<RainbowLoaderProps> = React.memo(
  ({ height, text, className, 'data-testid': dataTestId }) => {
    const loader = (
      <LoadingBox data-testid="RainbowLoader-LoadingBox">
        <LoadingRect1 data-testid="RainbowLoader-LoadingRect1" height={height} />
        <LoadingRect2 data-testid="RainbowLoader-LoadingRect2" height={height} />
        <LoadingEllipsis data-testid="RainbowLoader-LoadingEllipsis" height={height} />
      </LoadingBox>
    );
    if (!text) {
      return loader;
    }

    return (
      <RainbowLoaderBox
        className={className}
        data-testid={dataTestId || 'RainbowLoader-RainbowLoaderBox'}
      >
        <RainbowText
          colorToken="white100"
          data-testid="RainbowLoader-RainbowText"
          typographyToken="bodyMediumMedium"
        >
          {text}
        </RainbowText>
        {loader}
      </RainbowLoaderBox>
    );
  },
);
