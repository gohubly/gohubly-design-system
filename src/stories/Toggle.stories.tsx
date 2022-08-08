import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Toggle } from "..";

export default {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: { onClick: { action: "clicked" } },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const ToggleDefault = Template.bind({});
ToggleDefault.args = {
  id: "toggle",
  active: true,
  disabled: false,
  onClick: (value: boolean) => console.log("value", value),
};