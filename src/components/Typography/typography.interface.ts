import { theme } from "../../theme"

export type iTypographyTypesAs = 'p' | 'span'
// export type iTypographyTypestextAlign = 'center' | 'left' | 'right'

export interface iTypography {
  children: any
  as?: iTypographyTypesAs
  size?: keyof typeof theme.fontSize
  lineHeight?: keyof typeof theme.lineHeight
  fontWeight?: keyof typeof theme.fontWeight
  color?: keyof typeof theme.colors
  textAlign?: string
  colorOpacity?: number
  className?: string
}

export interface iParagraph extends iTypography {
  noMargin?: boolean;
}