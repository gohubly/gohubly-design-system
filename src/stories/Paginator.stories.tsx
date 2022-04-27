import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Paginator } from '..';

export default {
  title: 'Components/Paginator',
  component: Paginator,
} as ComponentMeta<typeof Paginator>;

const Template: ComponentStory<typeof Paginator> = (args) => <Paginator {...args} />;

export const Page = Template.bind({});
Page.args = {
  length: 10,
  goToPage: (selectedPage: number) => { console.log(selectedPage)},
  groupAt: 0
};

