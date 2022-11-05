import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from '..';

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Default',
};

export const DefaultTwoLetter = Template.bind({});
DefaultTwoLetter.args = {
  name: 'Default two letter',
  twoLetter: true
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
OnColor.parameters = {
  backgrounds: {
    default: 'figma',
  },
};

export const LargeWithImage = Template.bind({});
LargeWithImage.args = {
  size: 'LG',
  image: 'https://www.wikileaf.com/thestash/wp-content/uploads/2020/09/screen-shot-2014-06-20-at-1-11-15-pm.png'
};
