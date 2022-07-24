import React from 'react'
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
OnColor.parameters = {
  backgrounds: {
    default: 'figma',
  },
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
  iconLeft: 'heart'
};

export const WithIconRight = Template.bind({});
WithIconRight.args = {
  name: 'input-name',
  label: 'Label',
  placeholder: 'placeholder...',
  iconRight: 'instagram'
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
  size: 'MD',
  onClickDropdownItem(itemValue, itemLabel) {
    console.log(`value: ${itemValue}, label: ${itemLabel ?? 'Não há'}`)
  }
  ,
  dropdown: [
    {
      value: 'value-label-1',
      label: "valor 1"
    },
    {
      value: 'value-label-2',
      label: "valor 2"
    },
    {
      value: 'value-label-3',
      label: "valor 3"
    },
    {
      value: 'value-label-4',
      label: "valor 4"
    },
    {
      value: 'value-label-5'
    },
    {
      value: 'value-label-6'
    },
    {
      value: 'value-label-7'
    },
    {
      value: 'value-label-8'
    },
    {
      value: 'value-label-9'
    },
    {
      value: 'value-label-10'
    },
    {
      label: 'Valor com tag',
      value: 'value-valor-com-tag',
      tag: {
        background: 'warning',
        label: 'Tag'
      }
    },
  ]
};

export const WithDropdownNumber = Template.bind({});
WithDropdownNumber.args = {
  name: 'input-name',
  iconRight: 'chevronDown',
  placeholder: '',
  size: 'XXS',
  dropdown: [
    {
      value: '1'
    },
    {
      value: '2'
    },
    {
      value: '3'
    },
    {
      value: '4'
    },
  ]
};