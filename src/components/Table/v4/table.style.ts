import styled, { css } from "styled-components";
import { defaultCss } from "../../../theme/defaultCss";
import { iTableTd } from "./table.interface";

export const TableContainer = styled.div<{
  responsive?: boolean;
  fluid?: boolean;
}>`
  ${defaultCss};
  overflow-x: ${({ responsive }): string => (responsive ? "auto" : "hidden")};
  // overflow-y: hidden;
  width: ${({ fluid }): string => (fluid ? "100%" : "initial")};
  border: ${({ theme }) => `1px solid ${theme.colors.neutralHighLight}`};
  border-radius: 8px;

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
`;

export const TableHeaderTd = styled.td<iTableTd>`
  box-sizing: content-box;
  width: ${({ width }) => (width ? width : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};

  border-bottom: ${({ theme }) => `1px solid ${theme.colors.neutralHighLight}`};
  border-right: ${({ theme }) => `1px solid ${theme.colors.neutralHighLight}`};

  padding: 14px 0;

  p {
    font-size: 14px;
    line-height: 20px;
    margin: 0 !important;
  }

  &:nth-last-child(-n + 3) {
    p {
      text-align: center;
    }
  }

  &:last-child {
    border-right: none;
  }
`;

export const TableBodyTd = styled.td<iTableTd>`
  box-sizing: border-box;

  width: ${({ width }) => (width ? width : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};

  border-bottom: ${({ theme }) => `1px solid ${theme.colors.neutralHighLight}`};
  border-right: ${({ theme }) => `1px solid ${theme.colors.neutralHighLight}`};

  padding: 13px 0 14px;

  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    margin: 0 !important;
  }

  &:nth-last-child(-n + 3) {
    div {
      justify-content: center;
    }
  }

  &:first-child {
    .feature {
      justify-content: start;
    }
  }

  &:last-child {
    border-right: none;
  }
`;

export const FlexBodyTd = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const TableTr = css``;

export const TableBodyTr = styled.tr`
  ${TableTr};

  &:last-child {
    td {
      border-bottom: none;
    }
  }
`;

export const TableHeaderTr = styled.tr`
  ${TableTr};
`;
