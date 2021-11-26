const path = require("path");

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "storybook-addon-styled-component-theme/dist/preset",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/preset-typescript"
  ],
  webpackFinal: async (config) => {

    return config;
  },
}