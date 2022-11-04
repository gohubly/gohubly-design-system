import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TagPercent } from '..';

export default {
  title: 'Components/TagPercent',
  component: TagPercent,
} as ComponentMeta<typeof TagPercent>;

const Template: ComponentStory<typeof TagPercent> = (args) => <TagPercent {...args} />;


export const Alert = Template.bind({});
Alert.args = {
  value: -10.544
}

export const Success = Template.bind({});
Success.args = {
  value: 5
}

export const AlertOnColor = Template.bind({});
AlertOnColor.args = {
  value: -30,
  OnColor: true,
}
AlertOnColor.parameters = {
  backgrounds: {
    default: 'figma',
  },
};

export const SuccessOnColor = Template.bind({});
SuccessOnColor.args = {
  value: 4,
  OnColor: true,
}
SuccessOnColor.parameters = {
  backgrounds: {
    default: 'figma',
  },
};