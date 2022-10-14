import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PaymentTypeCard } from '..';

export default {
  title: 'Components/PaymentTypeCard',
  component: PaymentTypeCard,
} as ComponentMeta<typeof PaymentTypeCard>;

const Template: ComponentStory<typeof PaymentTypeCard> = (args) => <PaymentTypeCard {...args} />;

export const Default = Template.bind({});
Default.args = {}

export const Selected = Template.bind({});

Selected.args = {
  selected: true
};

export const WithFlag = Template.bind({});

WithFlag.args = {
  recomended: true
};