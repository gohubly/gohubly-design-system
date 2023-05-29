import React, { ButtonHTMLAttributes } from "react";
import { iIconSizes, iIconTypes } from "../Icon";

export type iButtonHierarchy =
  | "primary"
  | "secondary"
  | "ghost"
  | "tonalFilled";
export type iButtonSizes = "SM" | "MD" | "LG" | "XL";
export type iIconSizesButton = "XS" | "SM";

export interface iButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  hierarchy?: iButtonHierarchy;
  OnColor?: boolean;
  disabled?: boolean; // new hierarchy: Delete
  error?: boolean;
  loading?: boolean;
  icon?: iIconTypes;
  iconSize?: iIconSizes;
  iconStrokeWidth?: number;
  rightIcon?: iIconTypes;
  rightIconSize?: iIconSizes;
  rightIconStrokeWidth?: number;
  fluid?: boolean;
  size?: iButtonSizes;
  type?: "submit";
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}
