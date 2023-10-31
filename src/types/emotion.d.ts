// eslint-disable-next-line simple-import-sort/imports
import '@emotion/react';
import { BrokoliTheme } from '../foundation/Theme';

declare module '@emotion/react' {
  export interface Theme extends BrokoliTheme {}
}
