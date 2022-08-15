import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon, Tooltip } from '..';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Passe o mouse por cima!',
  text: 'Olá, sou um tooltip',
  pointerOrientation: 'right',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: <Icon iconId="helpCircle" size="XS" />,
  text: 'Receita líquida: valor somado considerando pedidos com cupom ou descontos aplicados.',
  pointerOrientation: 'up',
  pointerPosition: 'left',
  position: 'down'
};