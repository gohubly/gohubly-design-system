import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input, Typography } from "..";

export default {
  title: "Components/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const TextArea = Template.bind({});
TextArea.args = {
  name: "input-name",
  type: "text",
  placeholder: "Precisa inserir algum tipo de informação sobre a sua nota? Insira aqui.",
  label: "Observações",
  textAlign: "initial",
  textArea: true,
  textAreaHeight: '100px',
  maxCharacters: 100,
  maxCharactersPosition: 'right',
  textAreaOnBlur() {
    console.log('entrou aqui')
  },
};

export const Default = Template.bind({});
Default.args = {
  name: "input-name",
  type: "text",
  label: "Label",
  placeholder: "placeholder...",
  helperText: "Clique em mim",
  textAlign: "initial",
  helperTextOnClick() {
    console.log("Clicou");
  },
  onBlur: () => { console.log('deu')}
};

export const DefaultWithPlaceholderStyled = Template.bind({});
DefaultWithPlaceholderStyled.args = {
  name: "input-name",
  label: "Label",
  placeholderStyled: (
    <Typography
      color="neutralLowMedium"
      size="XS"
      lineHeight="MD"
      fontWeight={400}
    >
      Placeholder Styled
    </Typography>
  ),
};

export const WithError = Template.bind({});
WithError.args = {
  name: "input-name",
  label: "Label",
  placeholder: "placeholder...",
  error: true,
  helperText: "Teste",
};

export const OnColor = Template.bind({});
OnColor.args = {
  name: "input-name",
  label: "Label",
  placeholder: "placeholder...",
  OnColor: true,
};
OnColor.parameters = {
  backgrounds: {
    default: "figma",
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: "input-name",
  label: "Label",
  placeholder: "placeholder...",
  disabled: true,
};

export const WithIconLeft = Template.bind({});
WithIconLeft.args = {
  name: "input-name",
  label: "Label",
  placeholder: "placeholder...",
  iconLeft: "link",
  paddingLeft: '32px',
  iconLeftSize: 'XS',
  size: 'SM'
};

export const WithIconRight = Template.bind({});
WithIconRight.args = {
  name: "input-name",
  label: "Label",
  placeholder: "placeholder...",
  iconRight: "instagram",
};

export const WithPrefix = Template.bind({});
WithPrefix.args = {
  name: "input-name",
  label: "Label",
  placeholder: "placeholder...",
  prefix: "Exemplo",
  iconLeftOnClick() {
    console.log("Clicou");
  },
};

export const WithPrefixAndIconRight = Template.bind({});
WithPrefixAndIconRight.args = {
  name: "input-name",
  label: "Label",
  placeholder: "placeholder...",
  prefix: "R$",
  iconRight: "camera",
  iconLeftOnClick() {
    console.log("Clicou");
  },
};

export const WithPrefixAndIconLeft = Template.bind({});
WithPrefixAndIconLeft.args = {
  name: "input-name",
  label: "Label",
  placeholder: "placeholder...",
  prefix: "R$",
  iconLeft: "camera",
  iconLeftOnClick() {
    console.log("Clicou");
  },
};

export const WithSuffix = Template.bind({});
WithSuffix.args = {
  name: "input-name",
  label: "Label",
  placeholder: "placeholder...",
  suffix: "kg",
  iconRightOnClick() {
    console.log("Clicou");
  },
};

export const WithSuffixAndIconLeft = Template.bind({});
WithSuffixAndIconLeft.args = {
  name: "input-name",
  label: "Label",
  placeholder: "placeholder...",
  suffix: "kg",
  iconLeft: "bag",
  iconRightOnClick() {
    console.log("Clicou");
  },
};

export const WithSuffixAndIconRight = Template.bind({});
WithSuffixAndIconRight.args = {
  name: "input-name",
  label: "Label",
  placeholder: "placeholder...",
  suffix: "kg",
  iconRight: "bag",
  iconRightOnClick() {
    console.log("Clicou");
  },
};

export const WithPrefixAndSuffixAndIcons = Template.bind({});
WithPrefixAndSuffixAndIcons.args = {
  name: "input-name",
  label: "Label",
  placeholder: "placeholder...",
  prefix: "https://",
  iconLeft: "camera",
  suffix: "kg",
  iconRight: "bag",
  iconRightOnClick() {
    console.log("Clicou");
  },
};

export const WithDropdown = Template.bind({});
WithDropdown.args = {
  name: "input-name",
  label: "Label",
  placeholder: "placeholder...",
  size: "MD",
  type: "text",
  iconRight: "chevronDown",
  onClickDropdownItem(itemValue, itemLabel) {
    console.log(`value: ${itemValue}, label: ${itemLabel ?? "Não há"}`);
  },
  dropdown: [
    {
      value: "value-label-1",
      label: "valor 1 valor 1 valor",
    },
    {
      value: "value-label-2",
      label: "valor 2",
    },
    {
      value: "value-label-3",
      label: "valor 3",
    },
    {
      value: "value-label-4",
      label: "valor 4",
    },
    {
      label: "Valor com tag",
      value: "value-valor-com-tag",
      tag: {
        background: "warning",
        label: "Tag",
      },
    },
  ],
};

export const WithDropdownNumber = Template.bind({});
WithDropdownNumber.args = {
  name: "input-name",
  iconRight: "chevronDown",
  size: "XXS",
  dropdown: [
    {
      value: "1",
    },
    {
      value: "2",
    },
    {
      value: "3",
    },
    {
      value: "4",
    },
  ],
};

export const WithDropdownEndPlaceholderStyled = Template.bind({});
WithDropdownEndPlaceholderStyled.args = {
  name: "input-name",
  iconRight: "chevronDown",
  iconRightOnClick: () => {},
  size: "MD",
  type: "text",
  disabled: false,
  error: false,
  placeholderStyled: (
    <div style={{ display: "flex", gap: "5px" }}>
      <Typography
        color="neutralLowMedium"
        size="XS"
        lineHeight="MD"
        fontWeight={400}
      >
        Filtrar por
      </Typography>
      <div
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        <Typography
          color="neutralLowDark"
          size="XS"
          lineHeight="MD"
          fontWeight={500}
        >
          Revendedor
        </Typography>
      </div>
    </div>
  ),
  hasAllItems: true,
  dropdown: [
    {
      value: "name1",
      label: "Paulo Roberto Silveira",
    },
    {
      value: "name2",
      label: "Maria das Graças Oliveira",
    },
    {
      value: "name3",
      label: "Patrícia Amaral",
    },
    {
      value: "name4",
      label: "Carla Mesquita",
    },
    {
      value: "name5",
      label: "Carlos Luiz",
    },
    {
      value: "name5",
    },
  ],
};

export const WidthLink = Template.bind({});
WidthLink.args = {
  name: "input-name",
  type: "password",
  label: "Label",
  placeholder: "placeholder...",
  link: "Action link",
  linkOnClick() {
    console.log("Clicou");
  },
};
