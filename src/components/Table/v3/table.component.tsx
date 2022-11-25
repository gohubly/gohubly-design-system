import React from "react";
import { Typography } from "../../Typography";
import { iTable } from "./table.interface";
import {
  FlexBodyTd,
  TableBodyTd,
  TableBodyTr,
  TableContainer,
  TableHeaderTd,
  Table as TableStyled,
} from "./table.style";

export const TableV3 = ({
  columns,
  data: datas,
  responsive,
  fluid,
}: iTable) => {
  return (
    <TableContainer responsive={responsive} fluid={fluid}>
      <TableStyled fluid={fluid}>
        <thead>
          <tr>
            {columns.map((column) => (
              <TableHeaderTd key={column.key} width={column?.width} maxWidth={column?.maxWidth} >
                <Typography color="neutralLowDark" as='p' fontWeight={500} size="XXXS">
                  {column.title}
                </Typography>
              </TableHeaderTd>
            ))}
          </tr>
        </thead>

        <tbody>
          {datas.map((data, dataIndex) => {
            return (
              <TableBodyTr
                key={`table-${datas.length}-${dataIndex}`}
              >
                {columns.map((column, columnIndex) => {
                  const dataValueOfCell: any =
                    data[column.key as keyof typeof data];
                  const cellRenderValue = column.rowContent
                    ? column.rowContent(dataValueOfCell, data)
                    : dataValueOfCell;
                  const rowClick =
                    column.rowClick && column.rowClick(dataValueOfCell, data);

                  return (
                    <TableBodyTd
                      onClick={() => rowClick}
                      key={column.key + columnIndex}
                    >
                      <FlexBodyTd>
                        {typeof cellRenderValue === "string" ? (
                          <Typography color="neutralLow" as='p' fontWeight={500}>
                            {cellRenderValue}
                          </Typography>
                        ) : (
                          cellRenderValue
                        )}
                      </FlexBodyTd>
                    </TableBodyTd>
                  );
                })}
              </TableBodyTr>
            );
          })}
        </tbody>
      </TableStyled>
    </TableContainer>
  );
};
