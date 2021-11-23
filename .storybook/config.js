import { configure, addParameters, addDecorator } from '@storybook/react';
import { withThemesProvider } from "themeprovider-storybook"
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered/react';
import { withPropsTable } from 'storybook-addon-react-docgen';

import defaultTheme from './defaultTheme'
import storybookTheme from './storybookTheme';

import './reset.css';

addParameters({
  options: {
    storybookTheme,
  },
});

addDecorator(withInfo);
addDecorator(centered);

// Add support for Styled Components
addDecorator(withThemesProvider([defaultTheme]));

// Show props details
addDecorator(withPropsTable);

// Import all stories
configure(require.context('../stories', true, /\.stories\.tsx$/), module);
