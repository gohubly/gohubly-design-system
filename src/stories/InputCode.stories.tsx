import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputCode } from '..';

export default {
  title: 'Components/InputCode',
  component: InputCode,
} as ComponentMeta<typeof InputCode>;

const Template: ComponentStory<typeof InputCode> = (args) => <InputCode {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Default',
  length: 6,
};