import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from '../src/theme';

import dsTheme from './designSystemTheme'

const themes = [dsTheme];
export const parameters = {
  // Add to center components iside the preview in Storybook.
  layout: 'centered',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: theme.colors.white,
      },
      {
        name: 'dark',
        value: theme.colors.neutralLowLight,
      },
      {
        name: 'figma',
        value: theme.colors.primary,
      },
    ]
  },
  darkMode: {
    // Override the default dark theme
    dark: {
      base: 'dark',
      colorSecondary: theme.colors.primary,
      appBg: theme.colors.themeHighDark,
      appContentBg: theme.colors.themeDark,
      appBorderColor: theme.colors.primary,
      textColor: theme.colors.white,
      // Toolbar default and active colors
      barTextColor: theme.colors.themeLightDark,
      barSelectedColor: theme.colors.white,
      barBg: theme.colors.themeLowDark,
    },
    // Override the default light theme
    light: {
      base: 'ligth',
      colorSecondary: theme.colors.primary,
      appBg: theme.colors.themeHightLigth,
      appContentBg: theme.colors.white,
      appBorderColor: theme.colors.primaryLight,
      textColor: theme.colors.neutralLow,
      // Toolbar default and active colors
      barTextColor: theme.colors.neutralLowLight,
      barSelectedColor: theme.colors.primary,
      barBg: theme.colors.white,
    }
  }
}

// Add styled components and default theme
addDecorator(withThemesProvider(themes), ThemeProvider);

// Add DS Global Style in Storybook
addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));