import { CSSProperties } from "react";

export type CommonProps = Partial<CSSProperties> & {
  bg?: string
  sx?: Partial<CSSProperties> | Record<string, Partial<CSSProperties>>
  style?: Partial<CSSProperties>

  m?: string | number
  p?: string | number

  mt?: string | number
  ml?: string | number
  mr?: string | number
  mb?: string | number

  pt?: string | number
  pl?: string | number
  pr?: string | number
  pb?: string | number
  
  mx?: string | number
  my?: string | number
  marginX?: string | number
  marginY?: string | number
  marginTop?: string | number
  marginLeft?: string | number
  marginRight?: string | number
  marginBottom?: string | number

  px?: string | number
  py?: string | number
  paddingX?: string | number
  paddingY?: string | number
  paddingTop?: string | number
  paddingLeft?: string | number
  paddingRight?: string | number
  paddingBottom?: string | number
}