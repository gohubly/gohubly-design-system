import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion } from '..';

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});

Default.args = {
  items: [
    { label: "Teste 1", value: "Teste 1", items: [ { label: "Teste teste 1", value: "Teste teste 1" }, { label: "Teste teste 1", value: "Teste teste 1" } ] },
    { label: "Teste 2", value: "Teste 2", items: [ { label: "Teste teste 1", value: "Teste teste 1" } ] },
  ]
};

Default.parameters = {
  backgrounds: {
    default: 'figma',
  },
};

export const HighlightLabel = Template.bind({});

HighlightLabel.args = {
  highlightLabel: true,
  items: [
    { label: "Teste 1", value: "Teste 1", items: [ { label: "Teste teste 1", value: "Teste teste 1" }, { label: "Teste teste 1", value: "Teste teste 1" } ] },
    { label: "Teste teste 2", value: "Teste 2", items: [ { label: "Teste teste 1", value: "Teste teste 1" } ] },
  ]
};

HighlightLabel.parameters = {
  backgrounds: {
    default: 'figma',
  },
};

export const WithAction = Template.bind({});

WithAction.args = {
  highlightLabel: true,
  loadingForItem: "Teste 1",
  action: { text: "Ação" },
  items: [
    { label: "Teste 1", value: "Teste 1", items: [ { label: "Teste teste 1", value: "Teste teste 1" }, { label: "Teste teste 1", value: "Teste teste 1" } ] },
    { label: "Teste teste 2", value: "Teste 2", items: [ { label: "Teste teste 1", value: "Teste teste 1" } ] },
  ]
};

WithAction.parameters = {
  backgrounds: {
    default: 'figma',
  },
};