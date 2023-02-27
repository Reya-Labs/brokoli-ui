import { render, screen } from '@testing-library/react';
import React from 'react';

import { Pill } from './index';

describe('<Pill />', () => {
  it('renders the correct text and variant', () => {
    const text = 'Hello';
    render(
      <Pill colorToken="wildStrawberry" typographyToken="primaryBodySmallRegular">
        {text}
      </Pill>,
    );
    const pillTypography = screen.getByTestId(
      `Pill-PillTypography-wildStrawberry-primaryBodySmallRegular`,
    );
    expect(pillTypography).toHaveTextContent(text);
  });

  it('renders the correct className', () => {
    const className = 'my-custom-class';
    render(
      <Pill
        className={className}
        colorToken="wildStrawberry"
        typographyToken="primaryBodySmallRegular"
      >
        Hello
      </Pill>,
    );
    const pillTypography = screen.getByTestId(
      'Pill-PillTypography-wildStrawberry-primaryBodySmallRegular',
    );
    expect(pillTypography).toHaveClass(className);
  });
});
