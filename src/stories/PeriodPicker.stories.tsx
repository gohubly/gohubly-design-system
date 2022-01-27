import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PeriodPicker } from '../components/PeriodPicker';

export default {
  title: 'Components/PeriodPicker',
  component: PeriodPicker,
} as ComponentMeta<typeof PeriodPicker>;

const Template: ComponentStory<typeof PeriodPicker> = (args) => <PeriodPicker {...args} />;

export const Primary = Template.bind({});

Primary.args = {
 onChange: console.log
};
Primary.parameters = {
  backgrounds: {
    default: 'figma',
  },
};

