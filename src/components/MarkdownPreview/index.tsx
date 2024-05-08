import React from 'react';
import Markdown, { Options as MarkdownProps } from 'react-markdown';

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
  children: MarkdownProps['children'];
  className?: string;
  colorToken: ColorTokens;
  components?: MarkdownProps['components'];
}> = ({ components, children: markdownText, className, colorToken = 'white100' }) => {
  return (
    <Markdown
      className={className}
      components={{
        a: ({ children, href }) => (
          <ExternalLink
            colorToken="primary500"
            hideArrowIcon={true}
            href={href || '#'}
            typographyToken="bodyXSmallMedium"
          >
            {children?.toString() || ''}
          </ExternalLink>
        ),
        code: ({ children }) => (
          <CodeStyled colorToken={colorToken} typographyToken="bodyXSmallMedium">
            <PreStyled>{children}</PreStyled>
          </CodeStyled>
        ),
        h1: ({ children }) => (
          <H1Styled as="h1" colorToken={colorToken} typographyToken="h1SmallBold">
            {children}
          </H1Styled>
        ),
        h2: ({ children }) => (
          <H2Styled as="h2" colorToken={colorToken} typographyToken="h2Bold">
            {children}
          </H2Styled>
        ),
        h3: ({ children }) => (
          <H3Styled as="h3" colorToken={colorToken} typographyToken="h3Bold">
            {children}
          </H3Styled>
        ),
        li: ({ children }) => (
          <LiStyled as="li" colorToken={colorToken} typographyToken="bodyXSmallMedium">
            {children}
          </LiStyled>
        ),
        p: ({ children }) => (
          <ParagraphStyled as="p" colorToken={colorToken} typographyToken="bodyXSmallMedium">
            {children}
          </ParagraphStyled>
        ),
        ...components,
      }}
    >
      {markdownText}
    </Markdown>
  );
};
