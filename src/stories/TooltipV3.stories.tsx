import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Icon, Typography } from "..";
import { TooltipV3 } from "../components/Tooltip/v3";

export default {
  title: "Components/Tooltip/v3",
  component: TooltipV3,
} as ComponentMeta<typeof TooltipV3>;

const Template: ComponentStory<typeof TooltipV3> = (args) => (
  <TooltipV3 {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Passe o mouse por cima!",
  text: "ola",
  maxWidth: "300px",
  noPadding: true,
};

export const Up = Template.bind({});
Up.args = {
  children: "Passe o mouse por cima!",
  text: (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography color="neutralLow" size="14" fontWeight={400}>
        <Typography size="14" color="neutralLow" fontWeight={900}>
          Data limite para solicitação:{" "}
        </Typography>{" "}
        {`Até dia 12 do mês`}
      </Typography>
    </div>
  ),
  pointerOrientation: "down",
  position: "up",
  maxWidth: "300px",
  noPadding: true,
  color: "neutralHighLight",
};

export const Right = Template.bind({});
Right.args = {
  children: "Passe o mouse por cima!",
  text: (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography color="neutralLow" size="14" fontWeight={400}>
        <Typography size="14" color="neutralLow" fontWeight={900}>
          Data limite para solicitação:{" "}
        </Typography>{" "}
        {`Até dia 12 do mês`}
      </Typography>
    </div>
  ),
  pointerOrientation: "right",
  position: "right",
  maxWidth: "300px",
  noPadding: true,
  color: "neutralHighLight",
};

export const Bottom = Template.bind({});
Bottom.args = {
  children: "Passe o mouse por cima!",
  text: (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography color="neutralLow">Olá, sou um tooltip.</Typography>
      <Typography color="neutralLow">Olá, sou um tooltip.</Typography>
    </div>
  ),
  pointerOrientation: "up",
  position: "down",
  maxWidth: "300px",
  noPadding: true,
  color: "neutralHighLight",
};

export const Left = Template.bind({});
Left.args = {
  children: "Passe o mouse por cima!",
  text: (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography color="neutralLow">Olá, sou um tooltip.</Typography>
      <Typography color="neutralLow">Olá, sou um tooltip.</Typography>
    </div>
  ),
  pointerOrientation: "left",
  position: "left",
  maxWidth: "300px",
  noPadding: true,
  color: "neutralHighLight",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: <Icon iconId="helpCircle" size="XS" />,
  text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae culpa sint obcaecati. Illum dolore et quis natus id saepe expedita! Doloremque adipisci eos culpa expedita nam ex similique, officiis quas!",
  pointerOrientation: "up",
  pointerPosition: "center",
  position: "down",
  maxWidth: "200px",
};
