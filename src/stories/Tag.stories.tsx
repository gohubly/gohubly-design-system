import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tag } from '..';

export default {
  title: 'Components/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  hierarchy: 'primary',
  children: 'Tag'
};

export const Warning = Template.bind({});
Warning.args = {
  hierarchy: 'warning',
  children: 'Tag'
}

export const Alert = Template.bind({});
Alert.args = {
  hierarchy: 'alert',
  children: 'Tag'
}

export const Success = Template.bind({});
Success.args = {
  hierarchy: 'success',
  children: 'Tag'
}

export const PrimaryOnColor = Template.bind({});
PrimaryOnColor.args = {
  hierarchy: 'primary',
  children: 'Tag',
  OnColor: true,
};
PrimaryOnColor.parameters = {
  backgrounds: {
    default: 'figma',
  },
};

export const WarningOnColor = Template.bind({});
WarningOnColor.args = {
  hierarchy: 'warning',
  children: 'Tag',
  OnColor: true,
}
WarningOnColor.parameters = {
  backgrounds: {
    default: 'figma',
  },
};

export const AlertOnColor = Template.bind({});
AlertOnColor.args = {
  hierarchy: 'alert',
  children: 'Tag',
  OnColor: true,
}
AlertOnColor.parameters = {
  backgrounds: {
    default: 'figma',
  },
};

export const SuccessOnColor = Template.bind({});
SuccessOnColor.args = {
  hierarchy: 'success',
  children: 'Tag',
  OnColor: true,
}
SuccessOnColor.parameters = {
  backgrounds: {
    default: 'figma',
  },
};