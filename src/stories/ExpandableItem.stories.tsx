import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ExpandableItem } from '..';
import { Tag } from '../components/Tag/tag.style';

export default {
  title: 'Components/ExpandableItem',
  component: ExpandableItem,
} as ComponentMeta<typeof ExpandableItem>;

const Template: ComponentStory<typeof ExpandableItem> = (args) => <ExpandableItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Expandable',
  expanded: true,
  buttonsProps: [
    { children: 'Button' }
  ],
  data: [
    { label: 'Row 1', value: 'Row 1' },
    { label: 'Row 2', value: 'Row 2' },
    { label: 'Row 3', value: 'Row 3' },
  ]
};

export const WithTwoButtons = Template.bind({});

WithTwoButtons.args = {
  title: 'Expandable 2B',
  expanded: true,
  buttonsProps: [
    { children: 'Button' },
    { children: 'Button 2', hierarchy: 'secondary' },
  ],
  data: [
    { label: 'Row 1', value: 'Row 1' },
    { label: 'Row 2', value: 'Row 2' },
    { label: 'Row 3', value: 'Row 3' },
  ]
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  title: 'Expandable 2B WI',
  expanded: true,
  itemRight: (
    <Tag hierarchy='success'>
      Icon test
    </Tag>
  ),
  buttonsProps: [
    { children: 'Button' },
    { children: 'Button 2', hierarchy: 'secondary' },
  ],
  data: [
    { label: 'Row 1', value: 'Row 1' },
    { label: 'Row 2', value: 'Row 2' },
    { label: 'Row 3', value: 'Row 3' },
  ]
};