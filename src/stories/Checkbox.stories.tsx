import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CheckBox } from '..';

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
  argTypes: { onClick: { action: 'clicked' } },
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
  label: "CheckBox",
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

export const DisabledCheckedBox = Template.bind({});
DisabledCheckedBox.args = {
  name: "disabledBox",
  label: "Disabled Checked Box",
  checked: true,
  readOnly: false,
  disabled: true,
  onColor: false,
  onChange: () => {}
};
DisabledCheckedBox.parameters = {
  backgrounds: {
    default: 'light',
  },
};

export const DisabledUncheckedBox = Template.bind({});
DisabledUncheckedBox.args = {
  name: "disabledBox",
  label: "Disabled Unchecked Box",
  checked: false,
  readOnly: false,
  disabled: true,
  onColor: false,
  onChange: () => {}
};
DisabledUncheckedBox.parameters = {
  backgrounds: {
    default: 'light',
  },
};

export const CheckedBoxOnColor = Template.bind({});
CheckedBoxOnColor.args = {
  name: "checked",
  label: "CheckBox onColor",
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

export const disabledCheckedOnColor = Template.bind({});
disabledCheckedOnColor.args = {
  name: "disabledCheckedBoxOnColor",
  label: "Disabled Checked onColor",
  checked: true,
  readOnly: false,
  disabled: true,
  onColor: true,
  onChange: () => {}
};

disabledCheckedOnColor.parameters = {
  backgrounds: {
    default: 'figma',
  },
};

export const disabledUncheckedOnColor = Template.bind({});
disabledUncheckedOnColor.args = {
  name: "disabledUncheckedOnColor",
  label: "Disabled Unchecked onColor",
  checked: false,
  readOnly: false,
  disabled: true,
  onColor: true,
  onChange: () => {}
};

disabledUncheckedOnColor.parameters = {
  backgrounds: {
    default: 'figma',
  },
};