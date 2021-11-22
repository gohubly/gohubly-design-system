import { configure, addParameters, addDecorator } from '@storybook/react';
import { withThemesProvider } from "themeprovider-storybook"
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered/react';

import defaultTheme from './defaultTheme'

import storybookTheme from './storybookstorybookTheme';

import './reset.css';

addParameters({
  options: {
    storybookTheme,
  },
});

addDecorator(withInfo);
addDecorator(centered);
addDecorator(withThemesProvider([defaultTheme]));

// Import all stories
configure(require.context('../stories', true, /\.stories\.tsx$/), module);
