import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Table } from '../components/Table';
import { Link } from '../components';

export default {
  title: 'Components/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

const tableCommonArgs = {
  columns: [
    {
      key: 'name',
      title: 'Nome',
      width: 150
    },
    {
      key: 'age',
      title: 'Idade',
    },
    {
      key: 'gender',
      title: 'Gênero',
      width: 150
    },
    {
      key: 'createdAt',
      title: 'Data de filiação',
      width: 130
    },
    {
      key: 'details',
      title: 'Detalhes',
      width: 150,
      rowContent: (): JSX.Element => (
        <Link size="XXS" >
          Ver detalhes
        </Link>
      ),
    },
  ],
  data: [
    {
      name: 'Lucas',
      age: '23 anos',
      gender: 'Masculino',
      createdAt: '12/01/2020'
    },
    {
      name: 'Nathalia',
      age: '27 anos',
      gender: 'Feminino',
      createdAt: '27/09/2021'
    },
    {
      name: 'Pamela',
      age: '27 anos',
      gender: 'Feminino',
      createdAt: '02/11/2019',
    },
  ]
}

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