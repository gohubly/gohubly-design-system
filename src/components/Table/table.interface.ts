import React from "react";

export type iDataTypes = string | number | object | string[] | number[] | object[]
export type iCommonData = Record<string, iDataTypes>

export interface iColumn {
  key: string;
  title?: string | number;
  width?: number | string;
  maxWidth?: number | string;
  rowClick?: (value: iDataTypes, data: iCommonData) => void;
  rowContent?: (value: iDataTypes, data: iCommonData) => string | number | JSX.Element | React.ReactChild | React.ReactChildren | Element | Element[];
}

export interface iTable {
  responsive?: boolean;
  striped?: boolean;
  indexed?: boolean;
  columns: iColumn[];
  data: iCommonData[];
  fluid?: boolean
}

export interface iTableTd {
  width?: string;
  maxWidth?: string;
  onClick?: () => void;
}

export interface iTableTr {
  striped?: boolean;
}