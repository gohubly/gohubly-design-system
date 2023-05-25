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

  &::-webkit-scrollbar {
    width: 16px;
    height: 16px;
    background: white;
  }
  
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }): string => theme.colors.white};
    margin: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #C7D1D7;
    border-radius: 20px;
    border: 4px solid ${({ theme }): string => theme.colors.white};
  }

  &::-webkit-scrollbar-corner {
    background: ${({ theme }): string => theme.colors.white};
  }

  &::-webkit-scrollbar-button {
    display: none;
  }
`;

export const Table = styled.table<{ fluid?: boolean }>`
  border-spacing: 0;
  width: ${({ fluid }): string => (fluid ? "100%" : "initial")};

  border: 1px solid #e5e5e5;
  border-radius: 0 0 5px 5px;

  thead {
    background-color: #f8f9fd;
  }

  tbody tr {
    &:hover {
      td {
        &:first-child {
          border-left: ${({ theme }) =>
            `1px solid ${theme.colors.primaryMedium}`};
        }
      }
    }

    &:last-child {
      td {
        border-bottom: none;
        padding-bottom: 13px;
      }
    }
  }
`;

export const TableHeaderTd = styled.td<iTableTd>`
  box-sizing: content-box;
  width: ${({ width }) => width ?? "auto"};
  max-width: ${({ maxWidth }) => maxWidth ?? "auto"};
  min-width: ${({ minWidth }) => minWidth ?? "auto"};
  border-bottom: ${({ theme }) => `1px solid #E5E5E5`};
  padding: 12px 16px;

  p {
    font-size: 12px;
    line-height: 16px;
    margin: 0 !important;
  }

  &:first-child {
    padding: 12px 16px 12px 24px;
  }

  &:last-child {
    padding-right: 32px;
  }

  tr:hover td {
    border: ${({ theme }) => `1px solid ${theme.colors.primaryMedium}`};
  }
`;

export const TableBodyTd = styled.td<iTableTd>`
  box-sizing: border-box;

  width: ${({ width }) => (width ? width : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};

  border-bottom: ${({ theme }) => `1px solid #E5E5E5`};

  padding: 12px 15px 12px 16px;

  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    margin: 0 !important;
    color: ${({ theme }) => theme.colors.neutralLowDark};
  }

  &:first-child {
    padding: 12px 0 12px 24px;
    p {
      font-size: 12px;
      line-height: 16px;
      margin: 0 !important;
    }
  }

  &:hover {
    tr {
      transition: all 0.3s ease-in-out;
      border-left: ${({ theme }) => `1px solid ${theme.colors.primaryMedium}`};
    }
  }

  &:last-child {
    padding-right: 32px;
  }
`;

export const FlexBodyTd = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const TableTr = css<iTableTr>`
  &:hover {
    transition: all 0.3s ease-in-out;
    background: #eff0f3;
    border-left: ${({ theme }) => `1px solid ${theme.colors.primaryMedium}`};

    &:last-child {
      border-bottom: none;
    }
  }
`;

export const TableBodyTr = styled.tr`
  ${TableTr};
`;

export const TableHeaderTr = styled.tr`
  ${TableTr};
`;
