import React from 'react';

import {
  LoadingBox,
  LoadingEllipsis,
  LoadingRect1,
  LoadingRect2,
  RainbowLoaderBox,
  RainbowText,
} from './RainbowLoader.styled';

type RainbowLoaderProps = {
  width: number;
  height: number;
  text?: string;
};
export const RainbowLoader: React.FunctionComponent<RainbowLoaderProps> = React.memo(
  ({ width, height, text }) => {
    const loader = (
      <LoadingBox width={width}>
        <LoadingRect1 height={height} width={width} />
        <LoadingRect2 height={height} width={width} />
        <LoadingEllipsis height={height} width={width} />
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
