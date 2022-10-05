import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StepperLine } from '../components/StepperLine';

export default {
  title: 'Components/StepperLine',
  component: StepperLine,
} as ComponentMeta<typeof StepperLine>;

const Template: ComponentStory<typeof StepperLine> = (args) => <StepperLine currentStep={1} {...args} />;

export const Line = Template.bind({});

Line.args = {
  children: 'Default',
  steps: 5,
  fluid: true
};