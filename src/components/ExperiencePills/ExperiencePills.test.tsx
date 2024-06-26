import React from 'react';

import { BaseColorTokens } from '../../foundation/Colors';
import { render, screen } from '../../test-utils';
import { ExperiencePills } from '.';

describe('<ExperiencePills />', () => {
  const renderComponent = (experiencePercentage: number, colorToken: BaseColorTokens) =>
    render(<ExperiencePills colorToken={colorToken} experiencePercentage={experiencePercentage} />);

  it('should render the correct number of pills', () => {
    renderComponent(50, 'error');
    expect(screen.getAllByTestId(/ExperiencePills-ExperiencePill\d/).length).toBe(5);
  });

  it('should render active and inactive pills based on experiencePercentage', () => {
    renderComponent(50, 'error');

    expect(screen.getByTestId('ExperiencePills-ExperiencePill1-error-Active')).toBeInTheDocument();
    expect(screen.getByTestId('ExperiencePills-ExperiencePill2-error-Active')).toBeInTheDocument();
    expect(screen.getByTestId('ExperiencePills-ExperiencePill3-error-Active')).toBeInTheDocument();
    expect(
      screen.getByTestId('ExperiencePills-ExperiencePill4-error-NotActive'),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId('ExperiencePills-ExperiencePill5-error-NotActive'),
    ).toBeInTheDocument();
  });

  it('should apply the correct colorToken to all pills', () => {
    renderComponent(100, 'primary');
    expect(screen.getAllByTestId(/ExperiencePills-ExperiencePill\d-primary/).length).toBe(5);
  });

  it('should handle edge cases for experiencePercentage', () => {
    renderComponent(0, 'primary');
    expect(
      screen.getByTestId('ExperiencePills-ExperiencePill1-primary-NotActive'),
    ).toBeInTheDocument();

    renderComponent(20, 'primary');
    expect(
      screen.getByTestId('ExperiencePills-ExperiencePill2-primary-Active'),
    ).toBeInTheDocument();

    renderComponent(80, 'primary');
    expect(
      screen.getByTestId('ExperiencePills-ExperiencePill5-primary-Active'),
    ).toBeInTheDocument();
  });
});
