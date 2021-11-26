import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from '..';

export default {
  title: 'Components/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  iconId: 'twitter'
};

export const OnColor = Template.bind({});
OnColor.args = {
  iconId: 'pinLocation',
  OnColor: true
};
