import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { OptionButtons } from '.';

export default {
  args: {},
  component: OptionButtons,
  title: 'Components/Options',
} as Meta<typeof OptionButtons>;

const Template: StoryFn<typeof OptionButtons> = (args) => {
  const [activeOptionId, setActiveOptionId] = useState(args.activeOptionId);

  return (
    <OptionButtons {...args} activeOptionId={activeOptionId} onOptionClick={setActiveOptionId} />
  );
};

export const Default: StoryObj<typeof OptionButtons> = {
  args: {
    activeOptionId: 'yes',
    label: 'Options label',
    labelColorToken: 'white950',
    labelTypographyToken: 'bodySmallRegular',
    options: [
      {
        activeBackgroundColorToken: 'primary950',
        activeBorderColorToken: 'primary800',
        activeHoverBorderColorToken: 'primary500',
        activeTypographyColorToken: 'primary500',
        backgroundColorToken: 'black900',
        borderColorToken: 'black900',
        hoverBorderColorToken: 'black900',
        id: 'yes',
        label: 'Yes',
        typographyColorToken: 'primary500',
      },
      {
        activeBackgroundColorToken: 'error950',
        activeBorderColorToken: 'error800',
        activeHoverBorderColorToken: 'error500',
        activeTypographyColorToken: 'error500',
        backgroundColorToken: 'black900',
        borderColorToken: 'black900',
        hoverBorderColorToken: 'black900',
        id: 'no',
        label: 'No',
        typographyColorToken: 'error500',
      },
    ],
    typographyToken: 'bodyMediumRegular',
  },
  render: Template,
};
