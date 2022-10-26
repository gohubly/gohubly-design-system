import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input, Typography } from "..";

export default {
  title: "Components/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "input-name",
  label: "Label",
  placeholder: "placeholder...",
  helperText: "Clique em mim",
  helperTextOnClick() {
    console.log("Clicou")
  },
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
  iconLeft: "heart",
};

export const WithIconRight = Template.bind({});
WithIconRight.args = {
  name: "input-name",
  label: "Label",
  placeholder: "placeholder...",
  iconRight: "instagram",
};

// export const WithPrefix = Template.bind({});
// WithPrefix.args = {
//   name: "input-name",
//   label: "Label",
//   placeholder: "placeholder...",
//   prefix: "R$",
// };

// export const WithSuffix = Template.bind({});
// WithSuffix.args = {
//   name: "input-name",
//   label: "Label",
//   placeholder: "placeholder...",
//   suffix: "kg",
// };

export const WithDropdown = Template.bind({});
WithDropdown.args = {
  name: "input-name",
  label: "Label",
  placeholder: "placeholder...",
  size: "MD",
  type: "text",
  onClickDropdownItem(itemValue, itemLabel) {
    console.log(`value: ${itemValue}, label: ${itemLabel ?? "Não há"}`);
  },
  dropdown: [
    {
      value: "value-label-1",
      label: "valor 1 valor 1 valor 1 valor 1 valor 1",
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
      value: "value-label-5",
    },
    {
      value: "value-label-6",
    },
    {
      value: "value-label-7",
    },
    {
      value: "value-label-8",
    },
    {
      value: "value-label-9",
    },
    {
      value: "value-label-10",
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
