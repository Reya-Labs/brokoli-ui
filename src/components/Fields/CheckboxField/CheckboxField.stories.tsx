import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { ExternalLink } from '../../ExternalLink';
import { Typography } from '../../Typography';
import { CheckboxField } from '.';

export default {
  args: {},
  component: CheckboxField,
  title: 'Components/Fields/CheckboxField',
} as Meta<typeof CheckboxField>;

const Template: StoryFn<typeof CheckboxField> = (args) => {
  const [checked, setChecked] = useState<boolean>(args.checked);
  return <CheckboxField {...args} checked={checked} onChange={setChecked} />;
};

export const Default: StoryObj<typeof CheckboxField> = {
  args: {
    text: (
      <Typography colorToken="white100" typographyToken="bodySmallMedium">
        Do you agree?
      </Typography>
    ),
  },
  render: Template,
};

export const WithChecked: StoryObj<typeof CheckboxField> = {
  args: {
    checked: true,
    text: (
      <Typography colorToken="white100" typographyToken="bodySmallMedium">
        Do you agree?
      </Typography>
    ),
  },
  render: Template,
};

export const WithDisabled: StoryObj<typeof CheckboxField> = {
  args: {
    checked: true,
    disabled: true,
    text: (
      <Typography colorToken="white100" typographyToken="bodySmallMedium">
        Do you agree?
      </Typography>
    ),
  },
  render: Template,
};

export const WithError: StoryObj<typeof CheckboxField> = {
  args: {
    checked: true,
    error: true,
    text: (
      <Typography colorToken="white100" typographyToken="bodySmallMedium">
        Do you agree?
      </Typography>
    ),
  },
  render: Template,
};

export const WithSize: StoryObj<typeof CheckboxField> = {
  args: {
    checked: true,
    size: 32,
    text: (
      <Typography colorToken="white100" typographyToken="bodyMediumMedium">
        Do you agree?
      </Typography>
    ),
  },
  render: Template,
};

export const WithComplexText: StoryObj<typeof CheckboxField> = {
  args: {
    text: (
      <Typography colorToken="white100" typographyToken="bodySmallMedium">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.{' '}
        <ExternalLink
          activeColorToken="white100"
          colorToken="white950"
          disabled={false}
          hoverColorToken="white300"
          href="https://example.com"
          typographyToken="bodySmallMedium"
        >
          Link Text
        </ExternalLink>{' '}
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Typography>
    ),
  },
  render: Template,
};
