import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DatePicker } from '../components/DatePicker';
import { Box } from 'rebass';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => {
  const [from, setFrom] = useState<string | undefined>()
  const [to, setTo] = useState<string | undefined>()

  return (
    <Box width="100%" style={{ position: 'relative' }}>
      <DatePicker {...args}
        from={from}
        to={to}
        onPeriodChange={({ initialDate, finalDate }) => {
          setFrom(initialDate?.utc().toISOString())
          setTo(finalDate?.utc().toISOString())
        }}
        onReset={() => {
          setFrom(undefined)
          setTo(undefined)
        }}
      />
    </Box>
  )
};

export const Picker = Template.bind({});

Picker.args = {
 onPeriodChange: console.log
};

