import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppTab } from '../components/AppTab';

export default {
  title: 'Components/AppTab',
  component: AppTab,
} as ComponentMeta<typeof AppTab>;

const Template: ComponentStory<typeof AppTab> = (args) => <AppTab {...args} />;

export const Saque = Template.bind({});

Saque.args = {
  items: [
    'Regras de saque',
    'Integração',
    'Exemplo'
  ],
  selected: 0
};