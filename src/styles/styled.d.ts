/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable prettier/prettier */
import 'styled-components';
import theme from './themes/default';

declare module 'styled-components' {
  type MyThemeType = typeof theme;

  export interface DefaultTheme extends MyThemeType {}
}
