import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TabsV2 } from '../components/Tabs/v2';

export default {
  title: 'Components/Tabs/TabsV2',
  component: TabsV2,
} as ComponentMeta<typeof TabsV2>;

const Template: ComponentStory<typeof TabsV2> = (args) => <TabsV2 {...args} />;

export const Horizontal = Template.bind({});

Horizontal.args = {
  direction: 'horizontal',
  items: [
    'Visão Geral',
    'Configurações',
  ],
  iconItems: [
    'barChart',
    'settings',
  ],
  selected: 1
};

export const Vertical = Template.bind({});

Vertical.args = {
  direction: 'vertical',
  items: [
    'Visão Geral',
    'Configurações',
  ],
  iconItems: [
    'barChart',
    'settings',
  ],
  selected: 2
};