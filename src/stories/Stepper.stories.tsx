import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Stepper } from '../components/Stepper';

export default {
  title: 'Components/Stepper',
  component: Stepper,
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args) => <Stepper currentStep={1} {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Default',
  hierarchy: 'primary',
  steps: 5
};

export const Secondary = Template.bind({});

Secondary.args = {
  children: 'Default',
  hierarchy: 'secondary',
  steps: 5
};

export const Ghost = Template.bind({});

Ghost.args = {
  children: 'Default',
  hierarchy: 'ghost',
  steps: 5
};

export const WithoutProgressBar = Template.bind({});

WithoutProgressBar.args = {
  children: 'Default',
  hierarchy: 'primary',
  steps: 5,
  hasProgressBar: false
};