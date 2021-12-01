import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RadioButton } from '..';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: { onClick: { action: 'clicked' } },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />;

const options = [
  {
    value: '1',
    title: 'Option 1'
  },
  {
    value: '2',
    title: 'Option 2'
  },
]

export const RadioButtonGroup = Template.bind({});
RadioButtonGroup.args = {
  name: "RadioButtonGroup",
  label: "Radio Button",
  value: '1',
  readOnly: false,
  disabled: false,
  onColor: false,
  options: options,
  onChange: () => {}
};
RadioButtonGroup.parameters = {
  backgrounds: {
    default: 'light',
  },
};

export const DisabledRadioButton = Template.bind({});
DisabledRadioButton.args = {
  name: "DisabledRadioButton",
  label: "Disabled Radio Button",
  value: '',
  readOnly: false,
  disabled: true,
  onColor: false,
  options: options,
  onChange: () => {}
};
DisabledRadioButton.parameters = {
  backgrounds: {
    default: 'light',
  },
};

export const RadioButtonGroupOnColor = Template.bind({});
RadioButtonGroupOnColor.args = {
  name: "RadioButtonOnColor",
  label: "Radio Button onColor",
  value: '1',
  readOnly: false,
  disabled: false,
  onColor: true,
  options: options,
  onChange: () => {}
};
RadioButtonGroupOnColor.parameters = {
  backgrounds: {
    default: 'figma',
  },
};

export const DisabledRadioButtonOnColor = Template.bind({});
DisabledRadioButtonOnColor.args = {
  name: "DisabledRadioButtonOnColor",
  label: "Disabled Radio Button onColor",
  value: '',
  readOnly: false,
  disabled: true,
  onColor: true,
  options: options,
  onChange: () => {}
};
DisabledRadioButtonOnColor.parameters = {
  backgrounds: {
    default: 'figma',
  },
};