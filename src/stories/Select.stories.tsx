import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from '../components/Select/index';

export default {
  title: 'Components/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;
const templateDefaultArgs = {
  placeholder: 'Placeholder',
  onSelect: console.log,
  items: [
    {
      value: 'item1',
      label: 'Item 1',
    },
    {
      value: 'item2',
      label: 'Item 2',
    },
  ]
}

export const Default = Template.bind({});
Default.args = {
  ...templateDefaultArgs
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...templateDefaultArgs,
  icon: 'information',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...templateDefaultArgs,
  icon: 'information',
  disabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
  ...templateDefaultArgs,
  error: true,
  helperText: 'helper text'
};
