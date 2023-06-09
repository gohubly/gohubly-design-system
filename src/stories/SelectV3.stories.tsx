import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SelectV3 } from "../components/Select/v3";

import { Icon, Typography } from "../components";

export default {
  title: "Components/Select/V3",
  component: SelectV3,
} as ComponentMeta<typeof SelectV3>;

const Template: ComponentStory<typeof SelectV3> = (args) => (
  <SelectV3 {...args} />
);

export const Defaut = Template.bind({});
Defaut.args = {
  placeholder: 'Select',
  onSelect: (item: any) => console.log(item),
  error: false,
  disabled: false,
  items: [
    {
      value: "item1",
      label: "Item 1 Item 1 Item 1 Item 1",
    },
    {
      value: "item2",
      label: "Item 2",
    },
    {
      value: "item3",
      label: "Item 3",
    },
    {
      value: "item4",
      label: "Item 4",
    },
    {
      value: "item5",
      label: "Item 5",
    },
    {
      value: "item6",
      label: "Item 6",
    },
  ],
};

const templateTextDefaultArgs = {
  styledLabel: (<>Exibir 8 produtos</>),
  placeholder: (
    <div style={{ display: "flex", gap: "5px" }}>
      <Typography
        color="neutralLowMedium"
        size="XS"
        lineHeight="MD"
        fontWeight={400}
      >
        Filtrar por
      </Typography>
      <Typography
        color="neutralLowDark"
        size="XS"
        lineHeight="MD"
        fontWeight={500}
      >
        Status
      </Typography>
    </div>
  ),
  onSelect: (item: any) => console.log(item),
  error: false,
  disabled: false,
  height: '32px',
  items: [
    {
      value: "item1",
      label: "Item 1 Item 1 Item 1 Item 1",
    },
    {
      value: "item2",
      label: "Item 2",
    },
    {
      value: "item3",
      label: "Item 3",
    },
    {
      value: "item4",
      label: "Item 4",
    },
    {
      value: "item5",
      label: "Item 5",
    },
    {
      value: "item6",
      label: "Item 6",
    },
  ],
};

export const StyledPlaceholder = Template.bind({});
StyledPlaceholder.args = {
  ...templateTextDefaultArgs,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...templateTextDefaultArgs,
  iconLeft: "information",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...templateTextDefaultArgs,
  iconLeft: "information",
  disabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
  ...templateTextDefaultArgs,
  error: true,
  helperText: "helper text",
};

export const DefaultNumber = Template.bind({});
DefaultNumber.args = {
  placeholder: "10",
  width: "32px",
  height: "34px",
  type: "number",
  fontSize: "XXXS",
  onSelect: console.log,
  items: [
    {
      value: "10",
      label: "10",
    },
    {
      value: "50",
      label: "50",
    },
    {
      value: "100",
      label: "100",
    },
  ],
};

export const IconItemSelect = Template.bind({});
IconItemSelect.args = {
  placeholder: (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <Icon
        iconId="tag2"
        size="SM"
        stroke="neutralLowMedium"
        strokeWidth={1.5}
      />
      <Typography
        color="neutralLowMedium"
        size="XS"
        lineHeight="MD"
        fontWeight={400}
      >
        Status
      </Typography>
    </div>
  ),
  onSelect: (item: any) => console.log(item),
  height: "40px",
  fontSize: "XXS",
  error: false,
  disabled: false,
  items: [
    {
      value: "item1",
      label: (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            alignItems: "center",
          }}
        >
          <Typography color="neutralLow" size="XXS" fontWeight={400}>
            Nome de A
          </Typography>
          <Icon iconId="arrowRigth" size="XXS" stroke="neutralLowMedium" />
          <Typography color="neutralLow" size="XXS" fontWeight={400}>
            Z
          </Typography>
        </div>
      ),
    },
    {
      value: "item2",
      label: "Item 2",
    },
    {
      value: "item3",
      label: "Item 3",
    },
    {
      value: "item4",
      label: "Item 4",
    },
    {
      value: "item5",
      label: "Item 5",
    },
    {
      value: "item6",
      label: "Item 6",
    },
  ],
};

export const OrderSelect = Template.bind({});
OrderSelect.args = {
  placeholder: (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <Icon
        iconId="verticalSwitch"
        size="SM"
        stroke="neutralLowMedium"
        strokeWidth={1.5}
      />
      <Typography
        color="neutralLowMedium"
        size="XS"
        lineHeight="MD"
        fontWeight={400}
      >
        Ordenar por
      </Typography>
    </div>
  ),
  onSelect: (item: any) => console.log(item),
  height: "40px",
  fontSize: "XXS",
  error: false,
  disabled: false,
  items: [
    {
      value: "1",
      label: (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            alignItems: "center",
          }}
        >
          <Typography color="neutralLow" size="XXS" fontWeight={400}>
            Nome de A
          </Typography>
          <Icon iconId="arrowRigth" size="XXS" stroke="neutralLowMedium" />
          <Typography color="neutralLow" size="XXS" fontWeight={400}>
            Z
          </Typography>
        </div>
      ),
    },
    {
      value: "2",
      label: (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            alignItems: "center",
          }}
        >
          <Typography color="neutralLow" size="XXS" fontWeight={400}>
            Nome de Z
          </Typography>
          <Icon iconId="arrowRigth" size="XXS" stroke="neutralLowMedium" />
          <Typography color="neutralLow" size="XXS" fontWeight={400}>
            A
          </Typography>
        </div>
      ),
    },
    {
      value: "3",
      label: "Menor valor sacado",
    },
    {
      value: "4",
      label: "Maior valor sacado",
    },
  ],
};
