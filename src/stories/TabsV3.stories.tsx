import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TabsV3 } from "../components/Tabs/v3";

export default {
  title: "Components/Tabs/TabsV3 (without padding)",
  component: TabsV3,
} as ComponentMeta<typeof TabsV3>;

const Template: ComponentStory<typeof TabsV3> = (args) => <TabsV3 {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: "horizontal",
  items: ["Adicionar capa", "Capa"],
  selected: 1,
  isDesktop: false
};

export const Vertical = Template.bind({});
Vertical.args = {
  direction: "vertical",
  items: ["Adicionar capa", "Capa"],
  selected: 0,
  isDesktop: false
};
