import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Spinner } from '../components/Spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});

export const OnColor = Template.bind({});

OnColor.args = {
  onColor: true
};
OnColor.parameters = {
  backgrounds: {
    default: 'figma',
  },
};