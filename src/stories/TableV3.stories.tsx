import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TableV3 as Table } from "../components/Table/v3";
import { Icon, Tooltip } from "../components";

export default {
  title: "Components/Table/V3",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

const tableCommonArgs = {
  columns: [
    {
      key: "feature",
      title: "",
      width: "260px",
    },
    {
      key: "info",
      title: "",
      width: "10%",
      rowContent: (): JSX.Element => {
        return (
          <Tooltip
            text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolorem quo magni sunt vitae cumque aut alias dicta quae aperiam? Adipisci ratione odio quis dolores rerum quidem minus asperiores ipsam!"
            size="LG"
            pointerOrientation="up"
            pointerPosition="left"
            position="down"
            width="300px"
          >
            <Icon iconId="helpCircle" size="XS" gray />
          </Tooltip>
        );
      },
    },
    {
      key: "basic",
      title: "Básico",
      width: "260px",
      rowContent: (): JSX.Element => {
        return <Icon iconId="check" size="XXXS" />;
      },
    },
    {
      key: "intermediary",
      title: "Intermediário",
      width: "260px",
      rowContent: (): JSX.Element => {
        return <Icon iconId="check" size="XXXS" />;
      },
    },
    {
      key: "enterprise",
      title: "Enterprise",
      width: "260px",
      rowContent: (): JSX.Element => {
        return <Icon iconId="check" size="XXXS" />;
      },
    },
  ],
  data: [
    {
      feature: "Integração nativa VTEX",
    },
    {
      feature: "Integração nativa Loja Integrada",
    },
    {
      feature: "Administradores com hierarquia",
    },
    {
      feature: "Revendedores",
    },
    {
      feature: "Vitrines digitais personalizadas",
    },
  ],
};

export const Default = Template.bind({});
Default.args = {
  ...tableCommonArgs,
};
