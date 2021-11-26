import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from '../src/theme'

import dsTheme from './designSystemTheme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// Add styled components and default theme
const themes = [dsTheme];
addDecorator(withThemesProvider(themes), ThemeProvider);

// Add DS Global Style in Storybook
addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));