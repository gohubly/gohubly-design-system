import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Link } from '..';

export default {
  title: 'Components/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => false,
  children: 'Link'
};

export const OnColor = Template.bind({});
OnColor.args = {
  onClick: () => false,
  OnColor: true,
  children: 'Link OnColor'
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  onClick: () => false,
  children: 'Link with Icon'
};

export const Disabled = Template.bind({});
Disabled.args = {
  onClick: () => false,
  children: 'Link Disabled',
  disabled: true,
};
