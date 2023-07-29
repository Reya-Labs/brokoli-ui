import React from 'react';

import { Mark } from './Highlight.styled';

type HighlightProps = {
  children: string;
  highlight: string | undefined;
};

export const Highlight: React.FunctionComponent<HighlightProps> = ({ highlight, children }) => {
  if (!highlight) {
    return <>{children}</>;
  }
  const parts = children.split(new RegExp(`(${highlight})`, 'gi'));
  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? <Mark key={index}>{part}</Mark> : part,
      )}
    </>
  );
};
