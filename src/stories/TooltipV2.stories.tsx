import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon, TooltipV2 as Tooltip } from '..';
import 'react-tooltip/dist/react-tooltip.css'

export default {
  title: 'Components/Tooltip/v2',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "tooltip",
  children: 'Passe o mouse por cima!',
  text: 'Olá, sou um tooltip',
  pointerOrientation: 'right',
  position: 'left',
  width: '300px'
};