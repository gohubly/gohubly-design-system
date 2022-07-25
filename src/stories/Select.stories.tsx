import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Select } from "../components/Select/index";
import { Typography } from "../components";

export default {
  title: "Components/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

const templateTextDefaultArgs = {
  placeholder: (
    <div style={{ display: "flex", gap: "5px"}}>
      <Typography color="neutralLowMedium" size="XS" lineHeight="MD" fontWeight={400}>Filtrar por</Typography>
      <Typography color="neutralLowDark" size="XS" lineHeight="MD" fontWeight={500}>Status</Typography>
    </div>
  ),
  onSelect: (item: any) =>
    console.log(item)
  ,
  items: [
    {
      value: "item1",
      label: "Item 1 Item 1 Item 1 Item 1",
    },
    {
      value: "item2",
      label: "Item 2",
    },
    {
      value: "item3",
      label: "Item 3",
    },
    {
      value: "item4",
      label: "Item 4",
    },
    {
      value: "item5",
      label: "Item 5",
    },
    {
      value: "item6",
      label: "Item 6",
    },
  ],
};

export const DefaultText = Template.bind({});
DefaultText.args = {
  ...templateTextDefaultArgs,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...templateTextDefaultArgs,
  icon: "information",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...templateTextDefaultArgs,
  icon: "information",
  disabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
  ...templateTextDefaultArgs,
  error: true,
  helperText: "helper text",
};

export const DefaultNumber = Template.bind({});
DefaultNumber.args = {
  placeholder: "10",
  width: "32px",
  height: "34px",
  type: "number",
  fontSize: "XXXS",
  onSelect: console.log,
  items: [
    {
      value: "10",
      label: "10",
    },
    {
      value: "50",
      label: "50",
    },
    {
      value: "100",
      label: "100",
    },
  ],
};
