import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Chip } from '..';

export default {
  title: 'Components/Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Chip'
};

export const Selected = Template.bind({});

Selected.args = {
  children: 'Chip chip',
  selected: true
};