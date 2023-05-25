import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Loading } from "../components/Loading";

export default {
  title: "Components/Loading",
  component: Loading,
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => (
  <Loading {...args} />
);

export const Default = Template.bind({});

Default.args = {
  color: "#26282F",
  speedMultiplier: 1.5,
  radius: 3,
};
