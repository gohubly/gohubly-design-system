import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CardSelector } from '..';

export default {
  title: 'Components/CardSelector',
  component: CardSelector,
} as ComponentMeta<typeof CardSelector>;

const Template: ComponentStory<typeof CardSelector> = (args) => <CardSelector {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Criar um link de produto",
  color: "successMedium",
  icon: {
    iconId: "link"
  }
};

Default.parameters = {
  backgrounds: {
    default: 'figma',
  },
};