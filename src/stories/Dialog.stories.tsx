import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Dialog } from "..";
import { Button, DialogBody, DialogFooter, Typography } from "../components";

export default {
  title: "Components/Dialog",
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

export const Default = Template.bind({});

const Content = () => (
  <Typography color="neutralLowMedium" size="XS" lineHeight="XL" fontWeight={400}>
    Tem certeza? Você não pode recuperar esse cliente após isso.
  </Typography>
)

const Footer = () => (
  <>
    <Button hierarchy="secondary">
      Cancelar
    </Button>
    
    <Button>
      Sim
    </Button>
  </>
)

Default.args = {
  title: "Deletar cliente",
  isOpen: true,
  children: (
    <>
      <DialogBody>
        <Content />
      </DialogBody>
      <DialogFooter>
        <Footer />
      </DialogFooter>
    </>
  )
};
