import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from '..';

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'input-name',
  label: 'Label',
  placeholder: 'placeholder...',
};

export const WithError = Template.bind({});
WithError.args = {
  name: 'input-name',
  label: 'Label',
  placeholder: 'placeholder...',
  error: true,
};

export const OnColor = Template.bind({});
OnColor.args = {
  name: 'input-name',
  label: 'Label',
  placeholder: 'placeholder...',
  OnColor: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'input-name',
  label: 'Label',
  placeholder: 'placeholder...',
  disabled: true,
};

export const WithIconLeft = Template.bind({});
WithIconLeft.args = {
  name: 'input-name',
  label: 'Label',
  placeholder: 'placeholder...',
  iconLeft: ''
};

export const WithIconRight = Template.bind({});
WithIconRight.args = {
  name: 'input-name',
  label: 'Label',
  placeholder: 'placeholder...',
  iconRight: ''
};

export const WithPrefix = Template.bind({});
WithPrefix.args = {
  name: 'input-name',
  label: 'Label',
  placeholder: 'placeholder...',
  prefix: 'R$'
};

export const WithSuffix = Template.bind({});
WithSuffix.args = {
  name: 'input-name',
  label: 'Label',
  placeholder: 'placeholder...',
  suffix: 'kg'
};

export const WithDropdown = Template.bind({});
WithDropdown.args = {
  name: 'input-name',
  label: 'Label',
  placeholder: 'placeholder...',
  dropdown: [
    {
      value: 'value-label-1'
    },
    {
      value: 'value-label-2'
    },
    {
      value: 'value-label-3',
      tag: {
        background: 'warning',
        label: 'Tag'
      }
    },
  ]
};