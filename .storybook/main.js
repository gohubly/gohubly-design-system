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
    "@storybook/preset-typescript",
    "storybook-dark-mode"
  ],
  staticDirs: ['../public'],
  webpackFinal: async (config) => {

    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    })

    return config;
  },
}