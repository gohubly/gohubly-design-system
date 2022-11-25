import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TableV2 as Table } from '../components/Table/v2';
import { Avatar, Link, Typography } from '../components';
import { Flex } from 'rebass';

export default {
  title: 'Components/Table/V2',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

const tableCommonArgs = {
  columns: [
    {
      key: 'name',
      title: 'Nome',
      width: 190,
      rowContent: (data: any): JSX.Element => (
        <Flex alignItems="center" style={{ gap: '12px' }}>
          <Avatar size="XS" name={'nt'} />
          <div style={{ marginTop: '2px'}}>
            <Typography size="XXS" lineHeight="LG" color="neutralLowDark" textAlign='center' fontWeight={500}>
            {data}
          </Typography>
          </div>
          
        </Flex>
      ),
    },
    {
      key: 'age',
      title: 'Idade',
      width: 96
    },
    {
      key: 'gender',
      title: 'Gênero',
      width: 96
    },
    {
      key: 'createdAt',
      title: 'Data de filiação',
      width: 96
    },
    {
      key: 'details',
      title: 'Detalhes',
      width: 96,
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

export const WithComplexKeys = Template.bind({});
WithComplexKeys.args = {
  ...tableCommonArgs,
  data: tableCommonArgs.data.map(({ name, ...rest }) => ({
    ...rest,
    name: { first: name }
  })),
  columns: tableCommonArgs.columns.map(c => ({
    ...c,
    key: c.key === 'name' ? 'name.first' : c.key
  }))
};