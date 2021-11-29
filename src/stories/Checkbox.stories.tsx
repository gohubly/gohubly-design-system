import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CheckBox } from '..';

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />;

export const CheckedBox = Template.bind({});
CheckedBox.args = {
  name: "checked",
  label: "Checked",
  checked: true,
  readOnly: false,
  disabled: false,
  onColor: false,
  onChange: () => {}
};
CheckedBox.parameters = {
  backgrounds: {
    default: 'light',
  },
};

export const UncheckedBox = Template.bind({});
UncheckedBox.args = {
  name: "uncheckedBox",
  label: "UncheckedBox",
  checked: false,
  readOnly: false,
  disabled: true,
  onColor: false,
  onChange: () => {}
};
UncheckedBox.parameters = {
  backgrounds: {
    default: 'light',
  },
};

export const CheckedBoxOnColor = Template.bind({});
CheckedBoxOnColor.args = {
  name: "checked",
  label: "Checked",
  checked: true,
  readOnly: false,
  disabled: false,
  onColor: true,
  onChange: () => {}
};
CheckedBoxOnColor.parameters = {
  backgrounds: {
    default: 'figma',
  },
};

export const UncheckedBoxOnColor = Template.bind({});
UncheckedBoxOnColor.args = {
  name: "uncheckedBox",
  label: "UncheckedBox",
  checked: false,
  readOnly: false,
  disabled: true,
  onColor: true,
  onChange: () => {}
};
UncheckedBoxOnColor.parameters = {
  backgrounds: {
    default: 'figma',
  },
};