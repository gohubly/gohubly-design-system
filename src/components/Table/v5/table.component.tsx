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

export const TableV5 = ({
  columns,
  data: datas,
  indexed,
  responsive,
  striped,
  fluid,
}: iTable) => {
  const getNestedDataValueByKey = (data: Record<string, any>, key: string) => {
    if (!key.includes(".")) return data[key];

    const keys = key.split(".");

    const result = keys.reduce((prev, curr) => {
      if (prev?.hasOwnProperty(curr)) {
        return prev[curr];
      }

      return null;
    }, data);

    return result;
  };

  return (
    <TableContainer responsive={responsive} fluid={fluid}>
      <TableStyled fluid={fluid}>
        <thead>
          <tr>
            {columns.map((column) => (
              <TableHeaderTd
                key={column.key}
                width={column?.width}
                maxWidth={column?.maxWidth}
                minWidth={column?.minWidth}
              >
                <Typography
                  color="neutralLowLight"
                  as="p"
                  fontWeight={400}
                  size="XXXS"
                >
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
                // striped={striped}
                key={`table-${datas.length}-${dataIndex}`}
              >
                {columns.map((column, columnIndex) => {
                  getNestedDataValueByKey(data, column.key);
                  const dataValueOfCell = getNestedDataValueByKey(
                    data,
                    column.key
                  );
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
                          <Typography
                            color="neutralLowDark"
                            as="p"
                            fontWeight={500}
                          >
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
