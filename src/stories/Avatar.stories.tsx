import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from '..';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Avatar',
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Default',
};

export const WithBadge = Template.bind({});
WithBadge.args = {
  name: 'Badge',
  badge: true,
};

export const OnColor = Template.bind({});
OnColor.args = {
  OnColor: true,
  name: "On Color",
};

export const ImageAndLarge = Template.bind({});
ImageAndLarge.args = {
  size: 'LG',
  image: 'https://www.wikileaf.com/thestash/wp-content/uploads/2020/09/screen-shot-2014-06-20-at-1-11-15-pm.png'
};
