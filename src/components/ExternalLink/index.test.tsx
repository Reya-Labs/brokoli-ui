import React from 'react';

import { BaseColorTokens } from '../../foundation/Colors';
import { TypographyToken } from '../../foundation/Typography';
import { render, screen } from '../../test-utils';
import { ExternalLink } from '.';

describe('<ExternalLink />', () => {
  const colorToken: BaseColorTokens = 'white';
  const typographyToken: TypographyToken = 'primaryBodyMediumBold';

  it('renders a disabled link when disabled prop is true', () => {
    render(
      <ExternalLink
        colorToken={colorToken}
        disabled={true}
        href="https://example.com"
        typographyToken={typographyToken}
      >
        Link Text
      </ExternalLink>,
    );

    const disabledLink = screen.getByTestId(`ExternalLink-Disabled-${colorToken}`);
    expect(disabledLink).toBeInTheDocument();
    expect(disabledLink).toHaveTextContent('Link Text');
  });

  it('renders an external link when disabled prop is false', () => {
    render(
      <ExternalLink
        colorToken={colorToken}
        disabled={false}
        href="https://example.com"
        typographyToken={typographyToken}
      >
        Link Text
      </ExternalLink>,
    );

    const externalLink = screen.getByTestId(`ExternalLink-ExternalLinkStyled-${colorToken}`);
    expect(externalLink).toBeInTheDocument();
    expect(externalLink).toHaveTextContent('Link Text');

    const linkArrow = screen.getByTestId('ExternalLink-LinkArrow');
    expect(linkArrow).toBeInTheDocument();
    expect(linkArrow).toHaveAttribute('viewBox', '0 0 7 7');
  });
});
