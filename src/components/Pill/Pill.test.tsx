import React from 'react';

import { render, screen } from '../../test-utils';
import { Pill } from '.';

describe('<Pill />', () => {
  it('renders the correct text and variant', () => {
    const text = 'Hello';
    render(
      <Pill colorToken="error" typographyToken="primaryBodySmallRegular" variant="regular">
        {text}
      </Pill>,
    );
    const pillTypography = screen.getByTestId(
      `Pill-PillTypography-regular-error-primaryBodySmallRegular`,
    );
    expect(pillTypography).toHaveTextContent(text);
  });

  it('renders the correct className', () => {
    const className = 'my-custom-class';
    render(
      <Pill
        className={className}
        colorToken="error"
        typographyToken="primaryBodySmallRegular"
        variant="regular"
      >
        Hello
      </Pill>,
    );
    const pillBox = screen.getByTestId('Pill-PillBox');
    expect(pillBox).toHaveClass(className);
  });
});
