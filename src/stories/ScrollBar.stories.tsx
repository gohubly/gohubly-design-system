import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ScrollBar } from "..";

export default {
  title: "Components/ScrollBar",
  component: ScrollBar,
} as ComponentMeta<typeof ScrollBar>;

const Template: ComponentStory<typeof ScrollBar> = (args) => (
  <ScrollBar {...args} />
);

const children =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium iusto ea quis, qui aliquid rerum facere consequatur. Molestias accusantium, veritatis beatae blanditiis modi quos vitae dolorum atque, rem fugiat aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident saepe modi, velit delectus accusamus ex. Vitae inventore quam unde nam adipisci, sed, recusandae perspiciatis laboriosam voluptate maxime repudiandae incidunt cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus excepturi asperiores nisi repellat, repudiandae dolore libero eaque cupiditate reiciendis deserunt, ratione eius distinctio id tenetur neque possimus eveniet explicabo!";

export const Default = Template.bind({});
Default.args = {
  maxHeigth: "200px",
  maxWidth: "400px",
  children: (
    <div style={{ width: "500px", height: "300px", paddingRight: "5px" }}>
      {children}
    </div>
  ),
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  maxHeigth: "100%",
  maxWidth: "400px",
  children: <div style={{ width: "500px" }}>{children}</div>,
};

export const Vertical = Template.bind({});
Vertical.args = {
  maxHeigth: "200px",
  maxWidth: "400px",
  children: (
    <div style={{ height: "300px", paddingRight: "5px" }}>{children}</div>
  ),
};
