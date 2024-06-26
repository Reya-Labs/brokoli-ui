import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyTokens } from '../../foundation/Typography';

export type ButtonProps = React.PropsWithChildren<{
  /**
   * The background color of the button.
   */
  backgroundColorToken?: ColorTokens;
  /**
   * The border color of the button.
   */
  borderColorToken?: ColorTokens;
  /**
   * The text to display on the bottom left side of the button.
   */
  bottomLeftText?: string;
  /**
   * The color of the text on the bottom left side of the button.
   */
  bottomLeftTextColorToken?: ColorTokens;
  /**
   * The typography token of the text on the bottom left side of the button.
   */
  bottomLeftTextTypographyToken?: TypographyTokens;
  /**
   * The class name of the button.
   */
  className?: string;
  /**
   * The data-testid of the button.
   */
  'data-testid'?: string;
  /**
   * Whether the button is disabled.
   */
  disabled?: boolean;
  /**
   * The background color of the button when hovered.
   */
  hoverBackgroundColorToken?: ColorTokens;
  /**
   * The border color of the button when hovered.
   */
  hoverBorderColorToken?: ColorTokens;
  /**
   * The color of the icon when hovered.
   */
  hoverIconColorToken?: ColorTokens;
  /**
   * The color of the text when hovered.
   */
  hoverTypographyColorToken?: ColorTokens;
  /**
   * The color of the icon.
   */
  iconColorToken?: ColorTokens;
  /**
   * `iconLeft` allows you to insert a React Component (preferably an SVG) on the left side of the button content.
   * When an SVG is provided as `iconLeft`, it will inherit hover effects from the button, such as color changes.
   */
  iconLeft?: React.ReactNode;
  /**
   * `iconRight` allows you to insert a React Component (preferably an SVG) on the right side of the button content.
   * When an SVG is provided as `iconRight`, it will inherit hover effects from the button, such as color changes.
   */
  iconRight?: React.ReactNode;
  /**
   * Whether the button is loading.
   */
  loading?: boolean;
  /**
   * The function to call when the button is clicked.
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * Whether the button should be rounded.
   */
  rounded?: boolean;
  /**
   * The color of the text.
   */
  typographyColorToken?: ColorTokens;
  /**
   * The typography token of the text.
   */
  typographyToken?: TypographyTokens;
}>;
