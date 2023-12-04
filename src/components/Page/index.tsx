import React from 'react';

import { BackgroundBox, PageBox, PageContentBox } from './Page.styled';

export const Page: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => (
  <PageBox data-testid="Page-PageBox">
    <PageContentBox data-testid="Page-PageContentBox">{children}</PageContentBox>
    <BackgroundBox data-testid="Page-BackgroundBox" />
  </PageBox>
);
