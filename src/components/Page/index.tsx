import React from 'react';

import { BackgroundBox, BackgroundNoiseBox, BrandLogo, ChildrenBox, PageBox } from './Page.styled';

export const Page: React.FunctionComponent = ({ children }) => (
  <PageBox data-testid="Page-PageBox">
    <ChildrenBox data-testid="Page-ChildrenBox">{children}</ChildrenBox>
    <BackgroundBox data-testid="Page-BackgroundBox" />
    <BrandLogo data-testid="Page-BrandLogo" />
    <BackgroundNoiseBox data-testid="Page-BackgroundNoiseBox" />
  </PageBox>
);
