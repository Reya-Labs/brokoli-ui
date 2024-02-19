import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyTokens } from '../../foundation/Typography';
import { render, screen } from '../../test-utils';
import { ExternalLink } from '.';

describe('<ExternalLink />', () => {
  const colorToken: ColorTokens = 'white100';
  const typographyToken: TypographyTokens = 'bodyMediumBold';

  it('renders a disabled link when disabled prop is true', () => {
    render(
      <ExternalLink
        activeColorToken={colorToken}
        colorToken={colorToken}
        disabled={true}
        hoverColorToken={colorToken}
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
        activeColorToken={colorToken}
        colorToken={colorToken}
        disabled={false}
        hoverColorToken={colorToken}
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
  });
});
