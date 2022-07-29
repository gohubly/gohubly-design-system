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
  // width: 800px;
`;

export const TableHeaderTd = styled.td<iTableTd>`
  width: ${({ width }) => (width ? width : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.neutralHighLight}`};
  padding: 12px 8px;

  p {
    font-size: 12px;
    line-height: 16px;
    margin: 0 !important;
  }

  &:first-child {
    padding: 12px 0;
  }

  &:last-child {
    padding-right: 16px;
  }
`;

export const TableBodyTd = styled.td<iTableTd>`
  width: ${({ width }) => (width ? width : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};

  padding: 12px 8px;

  p {
    font-size: 14px;
    line-height: 20px;
    margin: 0 !important;
  }

  &:first-child {
    padding-left: 16px;

    p {
      font-size: 12px;
      line-height: 16px;
      margin: 0 !important;
    }
  }

  &:last-child {
    padding-right: 16px;
  }
`;

export const FlexBodyTd = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
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
