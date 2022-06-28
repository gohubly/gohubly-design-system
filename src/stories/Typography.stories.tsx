import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from '..';

export default {
  title: 'Components/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Padrão de texto',
  color: 'primaryDark',
  textAlign: 'center'
};
