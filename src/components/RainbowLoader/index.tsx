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
  height: number;
  text?: string;
};

export const RainbowLoader: React.FunctionComponent<RainbowLoaderProps> = React.memo(
  ({ height, text }) => {
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
      <RainbowLoaderBox data-testid="RainbowLoader-RainbowLoaderBox">
        <RainbowText
          colorToken="lavenderWeb"
          data-testid="RainbowLoader-RainbowText"
          typographyToken="secondaryBodyMediumRegular"
        >
          {text}
        </RainbowText>
        {loader}
      </RainbowLoaderBox>
    );
  },
);
