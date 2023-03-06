import styled, { css } from "styled-components";
import { defaultCss } from "../../../theme/defaultCss";
import { iTableTd, iTableTr } from "./table.interface";

export const TableContainer = styled.div<{
  responsive?: boolean;
  fluid?: boolean;
}>`
  ${defaultCss};
  overflow-x: ${({ responsive }): string => (responsive ? "auto" : "hidden")};
  width: ${({ fluid }): string => (fluid ? "100%" : "initial")};
`;

export const Table = styled.table<{ fluid?: boolean }>`
  border-spacing: 0;
  width: ${({ fluid }): string => (fluid ? "100%" : "initial")};
`;

export const TableHeaderTd = styled.td<iTableTd>`
  box-sizing: content-box;
  width: ${({ width }) => width ?? "auto"};
  max-width: ${({ maxWidth }) => maxWidth ?? "auto"};
  min-width: ${({ minWidth }) => minWidth ?? "auto"};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.neutralHighLight}`};
  padding: 12px 0;

  p {
    font-size: 12px;
    line-height: 16px;
    margin: 0 !important;
  }

  &:first-child {
    padding: 12px 0;
  }

  // &:last-child {
  //   padding-right: 16px;
  // }

  tr:hover td {
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.primaryMedium}`};
  }
`;

export const TableBodyTd = styled.td<iTableTd>`
  box-sizing: border-box;

  width: ${({ width }) => (width ? width : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};

  border-bottom: ${({ theme }) => `1px solid ${theme.colors.neutralHighLight}`};

  padding: 15px 0 16px;

  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    margin: 0 !important;
    color: ${({ theme }) => theme.colors.neutralLowDark};
  }

  &:first-child {
    p {
      font-size: 12px;
      line-height: 16px;
      margin: 0 !important;
    }
  }

  // &:last-child {
  //   padding-right: 16px;
  // }
`;

export const FlexBodyTd = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const TableTr = css<iTableTr>`
  &:hover {
    transition: all 0.3s ease-in-out;
    background: rgba(241, 242, 249, 0.5);

    td {
      transition: all 0.3s ease-in-out;
      border-bottom: ${({ theme }) =>
        `1px solid ${theme.colors.primaryMedium}`};
    }
  }
`;

export const TableBodyTr = styled.tr`
  ${TableTr};
`;

export const TableHeaderTr = styled.tr`
  ${TableTr};
`;
