import React, { ButtonHTMLAttributes } from "react";
import theme from "../../theme/theme";
import { iIconTypes } from "../Icon";

export type iButtonHierarchy = 'primary' | 'secondary' | 'ghost'
export type iButtonSizes = 'SM' | 'MD' | 'LG'

export interface iButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  hierarchy?: iButtonHierarchy,
  OnColor?: boolean
  disabled?: boolean
  error?: boolean
  loading?: boolean
  icon?: iIconTypes
  fluid?: boolean
  size?: iButtonSizes
  radius?: keyof typeof theme.borderRadius
  type?: 'submit'
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void
}