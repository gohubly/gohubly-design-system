import theme from "../../theme/theme";
import { iIconTypes } from "../Icon";

export type iButtonHierarchy = 'primary' | 'secondary' | 'ghost'

export interface iButton {
  hierarchy?: iButtonHierarchy,
  OnColor?: boolean
  disabled?: boolean
  error?: boolean
  icon?: iIconTypes
  fluid?: boolean
  radius?: keyof typeof theme.borderRadius
}