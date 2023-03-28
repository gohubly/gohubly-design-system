import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TableV5 as Table } from "../components/Table/v5";
import { Avatar, Link, Typography } from "../components";
import { Flex } from "rebass";

export default {
  title: "Components/Table/V5",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

const tableCommonArgs = {
  columns: [
    {
      key: "name",
      title: "Nome",
      width: "auto",
      minWidth: "150px",
      rowContent: (value: any, data: any): JSX.Element => (
        <Flex alignItems="flex-start" flexDirection="column">
          <Typography
            size="XXS"
            lineHeight="LG"
            color="neutralLowDark"
            textAlign="center"
            fontWeight={500}
          >
            {data.name}
          </Typography>
          <Typography
            size="XXXS"
            lineHeight="MD"
            color="neutralLowLight"
            fontWeight={500}
          >
            {data.email}
          </Typography>
        </Flex>
      ),
    },
    {
      key: "age",
      title: "Idade",
      width: "96px",
      minWidth: "96px",
    },
    {
      key: "gender",
      title: "Gênero",
      width: "96px",
      minWidth: "96px",
    },
    {
      key: "createdAt",
      title: "Data de filiação",
      width: "96px",
      minWidth: "96px",
    },
    {
      key: "details",
      title: "Detalhes",
      width: "96px",
      minWidth: "96px",
      rowContent: (): JSX.Element => <Link size="XXS">Ver detalhes</Link>,
    },
  ],
  data: [
    {
      name: "Lucas",
      email: "Lucas@email.com",
      age: "23 anos",
      gender: "Masculino",
      createdAt: "12/01/2020",
    },
    {
      name: "Nathalia",
      email: "Nathalia@email.com",
      age: "27 anos",
      gender: "Feminino",
      createdAt: "27/09/2021",
    },
    {
      name: "Pamela",
      email: "Pamela@email.com",
      age: "27 anos",
      gender: "Feminino",
      createdAt: "02/11/2019",
    },
  ],
};

export const Default = Template.bind({});
Default.args = {
  ...tableCommonArgs,
};

export const Indexed = Template.bind({});
Indexed.args = {
  ...tableCommonArgs,
  indexed: true,
};

export const Striped = Template.bind({});
Striped.args = {
  ...tableCommonArgs,
  striped: true,
};

export const WithComplexKeys = Template.bind({});
WithComplexKeys.args = {
  ...tableCommonArgs,
  data: tableCommonArgs.data.map(({ name, ...rest }) => ({
    ...rest,
    name: { first: name },
  })),
  columns: tableCommonArgs.columns.map((c) => ({
    ...c,
    key: c.key === "name" ? "name.first" : c.key,
  })),
};
