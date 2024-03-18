import React, { useLayoutEffect, useRef, useState } from 'react';

import { findParentBackgroundColor } from '../helpers';
import { Box } from './YAxisBackground.styled';

export const YAxisBackground: React.FunctionComponent<React.SVGProps<SVGForeignObjectElement>> = (
  props,
) => {
  const [background, setBackground] = useState<string>('transparent');
  const elementRef = useRef<SVGForeignObjectElement | null>(null);
  useLayoutEffect(() => {
    if (elementRef.current) {
      setBackground(findParentBackgroundColor(elementRef.current));
    }
  }, []);
  return <Box ref={elementRef} {...props} backgroundColor={background} />;
};
