import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StyledRadioButton, Typography } from "..";

export default {
  title: "Components/StyledRadioButton",
  component: StyledRadioButton,
  argTypes: { onClick: { action: "clicked" } },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
} as ComponentMeta<typeof StyledRadioButton>;

const Template: ComponentStory<typeof StyledRadioButton> = (args) => (
  <StyledRadioButton {...args} />
);

const options = [
  {
    value: "1",
    child: (
      <div
        style={{
          width: "100%",
          border: "1px solid #E0E2E8",
          borderRadius: "8px",
        }}
      >
        <div
          style={{ width: "226px", height: "128px", background: "#EAECF6" }}
        ></div>

        <div style={{ padding: "12px" }}>
          <Typography as="p" color="neutralLowDark" size="12" lineHeight="16">
            {"Imagem 1"}
          </Typography>
        </div>
      </div>
    ),
  },

  {
    value: "2",
    child: (
      <div
        style={{
          width: "100%",
          border: "1px solid #E0E2E8",
          borderRadius: "8px",
        }}
      >
        <div
          style={{ width: "226px", height: "128px", background: "#EAECF6" }}
        ></div>

        <div style={{ padding: "12px" }}>
          <Typography as="p" color="neutralLowDark" size="12" lineHeight="16">
            {"Imagem 2"}
          </Typography>
        </div>
      </div>
    ),
  },
];

const options2 = [
  {
    value: "1",
    title: "Option 1",
  },
  {
    value: "2",
    child: (
      <div
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Typography
          color="neutralLowDark"
          size="XXS"
          lineHeight="LG"
          fontWeight={500}
          as="p"
        >
          Visa
        </Typography>
        <Typography
          color="neutralLowDark"
          size="XXXS"
          lineHeight="MD"
          fontWeight={400}
          as="p"
        >
          •••• •••• •••• 1111
        </Typography>
      </div>
    ),
  },
];

export const RadioGroupStyled = Template.bind({});
RadioGroupStyled.args = {
  name: "RadioGroupStyled",
  label: "Radio",
  value: "1",
  readOnly: false,
  disabled: false,
  onColor: false,
  options: options,
  positionLeft: "8px",
  positionTop: "8px",
  onChange: () => {
    console.log("clicou");
  },
};
RadioGroupStyled.parameters = {
  backgrounds: {
    default: "light",
  },
};

export const RadioButtonGroupStyled = Template.bind({});
RadioButtonGroupStyled.args = {
  name: "RadioButtonGroupStyled",
  label: "Radio Button",
  value: "1",
  readOnly: false,
  disabled: false,
  onColor: false,
  options: options2,
  positionLeft: "-30px",
  positionTop: "50%",
  transformY: "translateY(-50%)",
  gapOptions: '12',
  onChange: () => {},
};
RadioButtonGroupStyled.parameters = {
  backgrounds: {
    default: "light",
  },
};
