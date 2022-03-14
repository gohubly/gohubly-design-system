import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from '..';

export default {
  title: 'Components/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  iconId: 'defaut'
};

export const OnColor = Template.bind({});
OnColor.args = {
  iconId: 'close',
  OnColor: true
};
OnColor.parameters = {
  backgrounds: {
    default: 'figma',
  },
};