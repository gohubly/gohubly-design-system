import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CheckBox } from '..';
import { CardSmall } from '../components/Card/CardSmall/index';

export default {
  title: 'Components/CardSmall',
  component: CardSmall,
} as ComponentMeta<typeof CardSmall>;

const Template: ComponentStory<typeof CardSmall> = (args) => <CardSmall {...args} />;

export const Default = Template.bind({ });

Default.args = {
  title: 'Card Title',
  content: 'Secondary Content'
};

export const WithOnColor = Template.bind({});

WithOnColor.args = {
  title: 'Card Title',
  content: 'Secondary Content',
  OnColor: true,
};

WithOnColor.parameters = {
  backgrounds: {
    default: 'figma',
  },
};

export const WithCustomComponent = Template.bind({});

WithCustomComponent.args = {
  title: 'Card Title',
  content: 'Secondary Content',
  rightComponent: <CheckBox name='checkbox' value="" />
};