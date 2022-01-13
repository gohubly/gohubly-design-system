import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tabs } from '../components/Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Horizontal = Template.bind({});

Horizontal.args = {
  direction: 'horizontal',
  items: [
    'Vendas e Pedidos',
    'Revendedores',
    'Carrinhos',
    'Top Produtos Vendidos'
  ],
  selected: 1
};

export const Vertical = Template.bind({});

Vertical.args = {
  direction: 'vertical',
  items: [
    'Vendas e Pedidos',
    'Revendedores',
    'Carrinhos',
    'Top Produtos Vendidos'
  ],
  selected: 2
};