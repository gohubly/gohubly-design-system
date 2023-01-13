import React, { ButtonHTMLAttributes } from "react";
import { iIconTypes } from "../Icon";

export type iButtonHierarchy = "primary" | "secondary" | "ghost" | "tonalFilled";
export type iButtonSizes = "SM" | "MD" | "LG" | "XL";
export type iIconSizesButton = "XS" | "SM";

export interface iButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  hierarchy?: iButtonHierarchy;
  OnColor?: boolean;
  disabled?: boolean;
  error?: boolean;
  loading?: boolean;
  icon?: iIconTypes;
  iconSize?: iIconSizesButton;
  fluid?: boolean;
  size?: iButtonSizes;
  type?: "submit";
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}
