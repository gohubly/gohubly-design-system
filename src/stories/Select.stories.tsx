import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from '../components/Select/index';

export default {
  title: 'Components/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

const templateTextDefaultArgs = {
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

const templateNumberDefaultArgs = {
  placeholder: '1',
  width: '72px',
  height: '34px',
  onSelect: console.log,
  items: [
    {
      value: '1',
      label: '1',
    },
    {
      value: '2',
      label: '2',
    },
  ]
}

export const DefaultText = Template.bind({});
DefaultText.args = {
  ...templateTextDefaultArgs
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...templateTextDefaultArgs,
  icon: 'information',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...templateTextDefaultArgs,
  icon: 'information',
  disabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
  ...templateTextDefaultArgs,
  error: true,
  helperText: 'helper text'
};

export const DefaultNumber = Template.bind({});
DefaultNumber.args = {
  ...templateNumberDefaultArgs
};