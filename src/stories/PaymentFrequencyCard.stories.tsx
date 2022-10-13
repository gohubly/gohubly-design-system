import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PaymentFrequencyCard } from '..';

export default {
  title: 'Components/PaymentFrequencyCard',
  component: PaymentFrequencyCard,
} as ComponentMeta<typeof PaymentFrequencyCard>;

const Template: ComponentStory<typeof PaymentFrequencyCard> = (args) => <PaymentFrequencyCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'PaymentFrequencyCard'
};

export const Selected = Template.bind({});

Selected.args = {
  selected: true
};

export const WithDiscountFlag = Template.bind({});

WithDiscountFlag.args = {
  hasDiscountFlag: true,
  discountText: 'Economize 10%'
};