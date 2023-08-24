import React from 'react';

import { BackgroundBox, BackgroundNoiseBox, PageBox, PageContentBox } from './Page.styled';

export const Page: React.FunctionComponent = ({ children }) => (
  <PageBox data-testid="Page-PageBox">
    <PageContentBox data-testid="Page-PageContentBox">{children}</PageContentBox>
    <BackgroundBox data-testid="Page-BackgroundBox" />
    <BackgroundNoiseBox data-testid="Page-BackgroundNoiseBox" />
  </PageBox>
);
