import styled, {css} from "styled-components";
import { defaultCss } from "../../theme/defaultCss";
import { iTableTd, iTableTr } from "./table.interface";

export const TableContainer = styled.div<{ responsive?: boolean }>`
  ${defaultCss};
  overflow-x: ${({ responsive }): string => responsive ? 'shown' : 'hidden'};
`

export const Table = styled.table`
  border-spacing: 0px;
`

const TableTd = css<iTableTd>`
  width: ${({ width }) => width ? width : 'auto'};
  max-width: ${({ maxWidth }) => maxWidth ? maxWidth : 'auto'};
`

export const TableHeaderTd = styled.td`
  ${TableTd};

  padding: 12px 18px;
`

export const TableBodyTd = styled.td`
  ${TableTd};

  padding: 16px 18px;
`

export const FlexBodyTd = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const TableTr = css<iTableTr>`
  border-radius: 8px;

  &:nth-child(even) {
    ${TableBodyTd} {
      background: ${({ theme, striped }): string => striped ? theme.colors.primaryLightest : 'transparent'};

      &:first-of-type {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }

      &:last-of-type {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
      }
    }
  }
`

export const TableBodyTr = styled.tr`
  ${TableTr};
`

export const TableHeaderTr = styled.tr`
  ${TableTr};
`
