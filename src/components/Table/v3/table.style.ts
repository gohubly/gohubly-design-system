import styled, { css } from "styled-components";
import { defaultCss } from "../../../theme/defaultCss";
import { iTableTd } from "./table.interface";

export const TableContainer = styled.div<{
  responsive?: boolean;
  fluid?: boolean;
}>`
  ${defaultCss};
  overflow-x: ${({ responsive }): string => (responsive ? "scroll" : "hidden")};
  width: ${({ fluid }): string => (fluid ? "100%" : "initial")};
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
  padding: 24px 0;

  p {
    font-size: 16px;
    line-height: 24px;
    margin: 0 !important;
    text-align: center;
  }

  &:first-child {
    padding: 12px 0;

    p {
      text-align: start;
    }
  }

`;

export const TableBodyTd = styled.td<iTableTd>`
  box-sizing: border-box;

  width: ${({ width }) => (width ? width : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};

  border-bottom: ${({ theme }) => `1px solid ${theme.colors.neutralHighLight}`};

  padding: 21px 0 22px;

  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    margin: 0 !important;
  }

  &:first-child {
    p {
      font-size: 14px;
      line-height: 20px;
      margin: 0 !important;
      justify-content: start;
    }

    div {
      justify-content: start;
    }
  }

    div {
      justify-content: center;
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
`;

export const TableHeaderTr = styled.tr`
  ${TableTr};
`;
