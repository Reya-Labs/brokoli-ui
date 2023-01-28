import { css, Global, SerializedStyles } from '@emotion/react';
import React, { useEffect, useState } from 'react';

export const Fonts: React.FunctionComponent = () => {
  const [styles, setStyles] = useState<SerializedStyles>();
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const InterBlack = require('./assets/Inter-Black.woff');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const InterBold = require('./assets/Inter-Bold.woff');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const InterRegular = require('./assets/Inter-Regular.woff');

    const cssFonts = css`
      @font-face {
        font-family: 'Inter';
        src: url(${InterBlack}) format('woff');
        font-weight: 900;
      }
      @font-face {
        font-family: 'Inter';
        src: url(${InterBold}) format('woff');
        font-weight: 700;
      }
      @font-face {
        font-family: 'Inter';
        src: url(${InterRegular}) format('woff');
        font-weight: 400;
      }
    `;
    setStyles(cssFonts);
  }, []);

  return <Global styles={styles} />;
};
