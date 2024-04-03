import React from 'react';
import Markdown from 'react-markdown';

import { ColorTokens } from '../../foundation/Colors';
import { ExternalLink } from '../ExternalLink';
import {
  CodeStyled,
  H1Styled,
  H2Styled,
  H3Styled,
  LiStyled,
  ParagraphStyled,
  PreStyled,
} from './MarkdownPreview.styled';

export const MarkdownPreview: React.FunctionComponent<{
  markdownText: string;
  className?: string;
  colorToken: ColorTokens;
}> = ({ markdownText, className, colorToken = 'white100' }) => {
  return (
    <Markdown
      className={className}
      components={{
        a: ({ children, href }) => (
          <ExternalLink
            colorToken="primary500"
            hideArrowIcon={true}
            href={href || '#'}
            typographyToken="bodyXSmallRegular"
          >
            {children?.toString() || ''}
          </ExternalLink>
        ),
        code: ({ children }) => (
          <CodeStyled colorToken={colorToken} typographyToken="bodyXSmallRegular">
            <PreStyled>{children}</PreStyled>
          </CodeStyled>
        ),
        h1: ({ children }) => (
          <H1Styled colorToken={colorToken} typographyToken="h1SmallBold">
            {children}
          </H1Styled>
        ),
        h2: ({ children }) => (
          <H2Styled colorToken={colorToken} typographyToken="h2Bold">
            {children}
          </H2Styled>
        ),
        h3: ({ children }) => (
          <H3Styled colorToken={colorToken} typographyToken="h3Bold">
            {children}
          </H3Styled>
        ),
        li: ({ children }) => (
          <LiStyled colorToken={colorToken} typographyToken="bodyXSmallRegular">
            <li>{children}</li>
          </LiStyled>
        ),
        p: ({ children }) => (
          <ParagraphStyled colorToken={colorToken} typographyToken="bodyXSmallRegular">
            {children}
          </ParagraphStyled>
        ),
      }}
    >
      {markdownText}
    </Markdown>
  );
};
