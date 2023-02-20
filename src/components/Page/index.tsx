import React from 'react';

import {
  BackgroundBox,
  BackgroundNoiseBox,
  BrandLogo,
  PageBox,
  PageContentBox,
} from './Page.styled';

export const Page: React.FunctionComponent = ({ children }) => (
  <PageBox data-testid="Page-PageBox">
    <PageContentBox data-testid="Page-PageContentBox">{children}</PageContentBox>
    <BackgroundBox data-testid="Page-BackgroundBox" />
    <BrandLogo data-testid="Page-BrandLogo" />
    <BackgroundNoiseBox data-testid="Page-BackgroundNoiseBox" />
  </PageBox>
);
