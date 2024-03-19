import { create } from '@storybook/theming';
import { colors } from '../../src/themes/voltz/colors';

export default create({
  base: 'dark',
  colorPrimary: colors.error100,
  colorSecondary: colors.error300,

  // UI
  appBg: colors.black700,
  appContentBg: colors.black800,
  appBorderColor: colors.white700,
  appBorderRadius: 4,

  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: colors.white100,
  textInverseColor: colors.white900,

  // Toolbar default and active colors
  barTextColor: colors.white100,
  barSelectedColor: colors.error100,
  barBg: colors.black700,

  // Form colors
  inputBg: colors.black600,
  inputBorder: colors.white700,
  inputTextColor: colors.white100,
  inputBorderRadius: 4,

  brandTitle: 'brokoli-ui',
  brandUrl: 'https://github.com/Reya-Labs/brokoli-ui',
  brandImage: 'https://cdn.discordapp.com/emojis/938848589499732058.webp?size=128&quality=lossless',
  brandTarget: '_self',
});
