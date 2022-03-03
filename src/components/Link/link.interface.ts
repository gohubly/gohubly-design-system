import { iIconSizes, iIconTypes } from "../Icon";
import { theme } from "../../theme"

export interface iLink {
  children: any;
  onClick?: () => void
  OnColor?: boolean
  disabled?: boolean
  icon?: iIconTypes
  iconSize?: iIconSizes
  underline?: boolean
  size?: keyof typeof theme.fontSize
}