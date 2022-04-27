import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dropdown } from '../components/Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <div style={{ position: 'absolute' }}>
    <Dropdown {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  children: 'Dropdown text',
  direction: 'top',
  opened: true,
};
Default.parameters = {
  backgrounds: {
    default: 'figma',
  },
};
