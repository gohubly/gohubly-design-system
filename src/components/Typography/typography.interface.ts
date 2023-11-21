import { CSSProperties } from "react"
import { theme } from "../../theme"

export interface iTypography {
  children: any
  as?: any
  size?: keyof typeof theme.fontSize
  lineHeight?: keyof typeof theme.lineHeight
  fontWeight?: keyof typeof theme.fontWeight
  color?: keyof typeof theme.colors
  textAlign?: string
  textDecoration?: CSSProperties['textDecoration']
  colorOpacity?: number
  className?: string
}

export interface iParagraph extends iTypography {
  noMargin?: boolean;
}