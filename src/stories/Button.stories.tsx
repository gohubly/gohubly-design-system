import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '..';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Default',
  hierarchy: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  hierarchy: 'secondary'
};

export const Ghost = Template.bind({});
Ghost.args = {
  children: 'Ghost',
  hierarchy: 'ghost'
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  disabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
  error: true,
  children: 'Error'
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: 'information',
  children: 'With icon'
};

export const PrimaryOnColor = Template.bind({});
PrimaryOnColor.args = {
  OnColor: true,
  children: 'On Color'
};
PrimaryOnColor.parameters = {
  backgrounds: {
    default: 'figma',
  },
};
