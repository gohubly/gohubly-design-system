import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HorizontalCountdown as HorizontalCountdownComponent, iHorizontalCountdown } from '..';
import { Flex } from 'rebass';

const HorizontalCountdown: React.FC<iHorizontalCountdown> = (props) => (
  <Flex width="800px">
    <HorizontalCountdownComponent {...props} />
  </Flex>
)

export default {
  title: 'Components/HorizontalCountdown',
  component: HorizontalCountdown,
} as ComponentMeta<typeof HorizontalCountdown>;

const Template: ComponentStory<typeof HorizontalCountdown> = (args) => <HorizontalCountdown {...args} />;

export const Default = Template.bind({});

Default.args = {
  countdown: 7
}