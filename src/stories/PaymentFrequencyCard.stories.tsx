import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PaymentFrequencyCard } from "..";

export default {
  title: "Components/PaymentFrequencyCard",
  component: PaymentFrequencyCard,
} as ComponentMeta<typeof PaymentFrequencyCard>;

const Template: ComponentStory<typeof PaymentFrequencyCard> = (args) => (
  <PaymentFrequencyCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "PaymentFrequencyCard",
  radioProps: {
    name: "Radio Default",
    value: "radioDefault",
    label: "Radio Default",
    options: [{ title: "Default", value: "1" }],
  },
};

export const Selected = Template.bind({});

Selected.args = {
  selected: true,
  radioProps: {
    name: "Radio Selected",
    value: "radioSelected",
    label: "Radio Selected",
    options: [{ title: "Selected", value: "1" }],
  },
};

export const WithDiscountFlag = Template.bind({});

WithDiscountFlag.args = {
  hasDiscountFlag: true,
  discountText: "Economize 10%",
  pricing: {
    price: 10,
  },
  radioProps: {
    name: "Radio teste",
    value: "radioTeste",
    label: "Radio teste",
    options: [{ title: "Teste 1", value: "1" }],
  },
};