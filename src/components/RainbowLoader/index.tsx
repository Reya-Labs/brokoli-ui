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
      <LoadingBox>
        <LoadingRect1 height={height} />
        <LoadingRect2 height={height} />
        <LoadingEllipsis height={height} />
      </LoadingBox>
    );
    if (!text) {
      return loader;
    }

    return (
      <RainbowLoaderBox>
        <RainbowText colorToken="lavenderWeb" typographyToken="secondaryBodyMediumRegular">
          {text}
        </RainbowText>
        {loader}
      </RainbowLoaderBox>
    );
  },
);
