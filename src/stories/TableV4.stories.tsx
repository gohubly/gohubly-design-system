import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TableV4 as Table } from "../components/Table/v4";
import { Icon } from "../components";

export default {
  title: "Components/Table/V4",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

const tableCommonArgs = {
  width: "300px",
  columns: [
    {
      key: "feature",
      title: "",
      width: "109px",
    },
    {
      key: "basic",
      title: "Básico",
      width: "109px",
      rowContent: (): JSX.Element => {
        return <Icon iconId="check" size="XXXS" />;
      },
    },
    {
      key: "intermediary",
      title: "Intermed.",
      width: "109px",
      rowContent: (): JSX.Element => {
        return <Icon iconId="check" size="XXXS" />;
      },
    },
    {
      key: "enterprise",
      title: "Enterprise",
      width: "109px",
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
