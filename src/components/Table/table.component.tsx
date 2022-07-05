import React from 'react';
import { Avatar } from '../Avatar';
import { Typography } from '../Typography';
import { iTable } from './table.interface';
import { FlexBodyTd, TableBodyTd, TableBodyTr, TableContainer, TableHeaderTd, Table as TableStyled } from './table.style';

export const Table = ({
  columns,
  data: datas,
  indexed,
  responsive,
  striped,
  fluid
}: iTable) => {
  return (
    <TableContainer responsive={responsive} fluid={fluid}>
      <TableStyled>
        <thead>
          <tr>
            {columns.map((column) => <TableHeaderTd><Typography size='XXXS' color="neutralLowMedium">{column.title}</Typography></TableHeaderTd>)}
          </tr>
        </thead>

        <tbody>
          {datas.map((data, dataIndex) => {
            return (
              <TableBodyTr striped={striped} key={`table-${datas.length}-${dataIndex}`}>
                {columns.map((column, columnIndex) => {
                  const dataValueOfCell: any = data[column.key as keyof typeof data];
                  const cellRenderValue = column.rowContent ? column.rowContent(dataValueOfCell, data) : dataValueOfCell
                  const rowClick = column.rowClick && column.rowClick(dataValueOfCell, data);

                  return (
                    <TableBodyTd onClick={() => rowClick} key={column.key + columnIndex}>
                      <FlexBodyTd>
                      {indexed && columnIndex === 0 && <Avatar size="MD" name={`${dataIndex}`} />}
                      {typeof cellRenderValue === 'string' 
                        ? <Typography color='neutralLowDark' size='XXXS'>
                            {cellRenderValue}
                          </Typography> 
                        : cellRenderValue}
                      </FlexBodyTd>
                    </TableBodyTd>
                  )
                })}
              </TableBodyTr>
            )
          })}
        </tbody>
        
      </TableStyled>
    </TableContainer>
  )
}