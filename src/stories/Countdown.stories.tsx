import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Countdown } from '..';

export default {
  title: 'Components/Countdown',
  component: Countdown,
} as ComponentMeta<typeof Countdown>;

const Template: ComponentStory<typeof Countdown> = (args) => <Countdown {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Olá, Gustavo'
}