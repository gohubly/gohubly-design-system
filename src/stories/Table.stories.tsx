import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Table } from '../components/Table';

export default {
  title: 'Components/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

const tableCommonArgs = {
  columns: [
    {
      key: 'name',
      title: 'Nome'
    },
    {
      key: 'age',
      title: 'Idade',
    }
  ],
  data: [
    {
      name: 'Lucas',
      age: '20',
    },
    {
      name: 'Fulano',
      age: '21',
    },
    {
      name: 'Ciclano',
      age: '22',
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