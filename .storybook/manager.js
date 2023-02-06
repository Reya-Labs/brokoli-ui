import { addons } from '@storybook/addons';
import darkTheme from './themes/dark';
import { themes } from '@storybook/theming';
console.log(themes.dark);
addons.setConfig({
  theme: darkTheme,
});
