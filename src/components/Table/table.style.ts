import styled, { css } from "styled-components";
import { defaultCss } from "../../theme/defaultCss";
import { iTableTd, iTableTr } from "./table.interface";

export const TableContainer = styled.div<{
  responsive?: boolean;
  fluid?: boolean;
}>`
  ${defaultCss};
  overflow-x: ${({ responsive }): string => (responsive ? "scroll" : "hidden")};
  width: ${({ fluid }): string => (fluid ? "100%" : "initial")};
`;

export const Table = styled.table<{ fluid?: boolean }>`
  border-spacing: 0 4px;
  width: ${({ fluid }): string => (fluid ? "100%" : "initial")};
`;


export const TableHeaderTd = styled.td<iTableTd>`
  box-sizing: border-box;
  width: ${({ width }) => (width ? width : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.neutralHighLight}`};

  p {
    font-size: 12px;
    line-height: 16px;
    margin: 0 !important;
  }

  &:first-child {
    padding: 12px 0;
  }
  padding: 12px 16px;
`;

export const TableBodyTd = styled.td<iTableTd>`
  box-sizing: border-box;
  width: ${({ width }) => (width ? width : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};

  padding: 12px 16px;

  p {
    font-size: 14px;
    line-height: 20px;
    margin: 0 !important;
  }

  &:first-child {
    p {
      font-size: 12px;
      line-height: 16px;
      margin: 0 !important;
    }
  }
`;

export const FlexBodyTd = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const TableTr = css<iTableTr>`
  border-radius: 8px;

  &:nth-child(even) {
    ${TableBodyTd} {
      background: ${({ theme, striped }): string =>
        striped ? theme.colors.primaryLightest : "transparent"};

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
`;

export const TableBodyTr = styled.tr`
  ${TableTr};
`;

export const TableHeaderTr = styled.tr`
  ${TableTr};
`;
