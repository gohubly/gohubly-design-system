import theme from "../../theme/theme";

export type iButtonHierarchy = 'primary' | 'secondary' | 'ghost'

export interface iButton {
  hierarchy?: iButtonHierarchy,
  onColor?: boolean
  disabled?: boolean
  error?: boolean
  icon?: string
  fluid?: boolean
  radius?: keyof typeof theme.borderRadius
}