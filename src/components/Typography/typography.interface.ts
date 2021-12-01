import { theme } from "../../theme"

export type iTypographyTypes = 'p' | 'span'

export interface iTypography {
  children: any
  as?: iTypographyTypes
  size?: keyof typeof theme.fontSize
  lineHeight?: keyof typeof theme.lineHeight
  fontWeight?: keyof typeof theme.fontWeight
  color?: keyof typeof theme.colors
}