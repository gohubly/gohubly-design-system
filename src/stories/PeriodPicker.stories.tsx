import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PeriodPicker } from "../components/PeriodPicker";
import moment from "moment";

export default {
  title: "Components/PeriodPicker",
  component: PeriodPicker,
} as ComponentMeta<typeof PeriodPicker>;

const Template: ComponentStory<typeof PeriodPicker> = (args) => (
  <PeriodPicker {...args} />
);

export const Period = Template.bind({});

Period.args = {
  onChange: console.log,
  count: 1,
};

export const WithCustomWidth = Template.bind({});

WithCustomWidth.args = {
  width: "200px",
  count: 1,
  onChange: console.log,
};

export const WithBlockedMonths = Template.bind({});

WithBlockedMonths.args = {
  count: 3,
  onChange: console.log,
  limit: {
    endDate: moment().utc().endOf("month").toDate(),
  },
};

export const WithBlockedAfterMonths = Template.bind({});

WithBlockedAfterMonths.args = {
  count: 1,
  onChange: console.log,
  limit: {
    initialDate: moment().utc().toDate(),
  },
  period: {
    initialDate: moment().utc(),
    finalDate: moment().utc().endOf("month"),
  },
};
