import React from 'react';

import { ChildrenBox, Lines, PageBox } from './Page.styled';

export const Page: React.FunctionComponent = ({ children }) => (
  <PageBox data-testid="Page-PageBox">
    <ChildrenBox data-testid="Page-ChildrenBox">{children}</ChildrenBox>
    <Lines data-testid="Page-Lines" />
  </PageBox>
);
