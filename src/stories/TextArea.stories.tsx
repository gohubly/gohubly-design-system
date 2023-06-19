import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextArea } from "../components";

export default {
  title: "Components/TextArea",
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: "text area",
  type: "text",
  placeholder:
    "Precisa inserir algum tipo de informação sobre a sua nota? Insira aqui.",
  label: "Observações",
  textAreaHeight: "100px",
  maxCharacters: 100,
  maxCharactersPosition: "right",
  texteAreaOnBlur(e) {
    console.log("entrou onBlur", e);
  },
  texteAreaOnChange(e) {
    console.log("entrou onChange", e);
  },
};
