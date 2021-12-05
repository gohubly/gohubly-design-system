import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from '..';

export default {
  title: 'Components/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Passe o mouse por cima!',
  color: 'primaryDark',
};
