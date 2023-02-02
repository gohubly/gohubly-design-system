import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TableV4 as Table } from "../components/Table/v4";
import { Icon } from "../components";

export default {
  title: "Components/Table/V4",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: [
    {
      key: "feature",
      title: "",
      width: "109px",
      rowContent: (value, data): JSX.Element => {
        return (
          <div
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: "90%" }}>{value}</div>
          </div>
        );
      },
    },
    {
      key: "basic",
      title: "Básico",
      width: "109px",
      rowContent: (value: any, data: any): JSX.Element => {
        return value === "true" ? <Icon iconId="check" size="XXXS" /> : <></>;
      },
    },
    {
      key: "intermediary",
      title: "Intermed.",
      width: "109px",
      rowContent: (value: any, data: any): JSX.Element => {
        return value === "true" ? <Icon iconId="check" size="XXXS" /> : <></>;
      },
    },
    {
      key: "enterprise",
      title: "Enterprise",
      width: "109px",
      rowContent: (value: any, data: any): JSX.Element => {
        return value === "true" ? <Icon iconId="check" size="XXXS" /> : <></>;
      },
    },
  ],
  data: [
    {
      feature: "Integração nativa VTEX",
      basic: "true",
      enterprise: "true",
      intermediary: "true",
    },
    {
      feature: "Integração nativa Loja Integrada",
      basic: "false",
      enterprise: "true",
      intermediary: "true",
    },
    {
      feature: "Administradores com hierarquia",
      basic: "true",
      enterprise: "true",
      intermediary: "true",
    },
    {
      feature: "Revendedores",
      basic: "false",
      enterprise: "true",
      intermediary: "true",
    },
    {
      feature: "Vitrines digitais personalizadas",
      basic: "true",
      enterprise: "true",
      intermediary: "true",
    },
  ],
};
