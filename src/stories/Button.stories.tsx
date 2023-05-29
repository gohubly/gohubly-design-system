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
  hierarchy: 'primary',
  onClick: () => {console.log("Clicou")}
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

export const TonalFilled = Template.bind({});
TonalFilled.args = {
  children: 'TonalFilled',
  hierarchy: 'tonalFilled'
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

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  icon: 'information',
  children: 'With left icon'
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  rightIcon: 'information',
  children: 'With right icon'
};

export const WithLeftAndRightIcon = Template.bind({});
WithLeftAndRightIcon.args = {
  rightIcon: 'information',
  rightIconStrokeWidth: 1,
  icon: 'information',
  iconStrokeWidth: 2,
  children: 'With right icon'
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

export const Loading = Template.bind({});
Loading.args = {
  children:  'Loading',
  loading: true
};