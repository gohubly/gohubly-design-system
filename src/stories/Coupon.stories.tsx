import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CouponCard } from '..';

export default {
  title: 'Components/CouponCard',
  component: CouponCard,
} as ComponentMeta<typeof CouponCard>;

const Template: ComponentStory<typeof CouponCard> = (args) => <CouponCard {...args} />;

export const Default = Template.bind({});

Default.args = {};