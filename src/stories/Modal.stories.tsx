import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Modal from "../components/Modal/modal.component";
import { Typography } from "../components";

export default {
  title: "Components/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Modal",
  show: true,
  showCloseIcon: true,
  // width: ""
  children: (
    <Typography color="neutralLowMedium" size="XS" lineHeight="XL" fontWeight={400}>
      Texto exmplo para o Modal!
    </Typography>
  ),
};
