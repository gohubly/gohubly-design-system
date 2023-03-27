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
  maxWidth: '300px',
  noPadding: true
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: <Icon iconId="helpCircle" size="XS" />,
  text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae culpa sint obcaecati. Illum dolore et quis natus id saepe expedita! Doloremque adipisci eos culpa expedita nam ex similique, officiis quas!',
  pointerOrientation: 'up',
  pointerPosition: 'left',
  position: 'down',
  maxWidth: '200px',
};
