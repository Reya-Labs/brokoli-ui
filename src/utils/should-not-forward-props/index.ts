const propCache: Record<string, boolean> = {};

export const shouldNotForwardProps = (excludedProps: string[] = []) => {
  return {
    shouldForwardProp: (prop: string) => {
      const key = `${prop}-${excludedProps.join(',')}`;

      if (propCache.hasOwnProperty(key)) {
        return propCache[key];
      }

      const shouldForward = excludedProps.length > 0 ? !excludedProps.includes(prop) : true;
      propCache[key] = shouldForward;
      return shouldForward;
    },
  };
};
