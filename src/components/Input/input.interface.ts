import { InputHTMLAttributes } from "react";
import { theme } from "../../theme";
import { iIconSizes, iIconTypes } from "../Icon";

export type iInputSizes = 'XXS' | 'XS' | 'SM' | 'MD' 
export type iIconPaddings = 'XXXS' | 'XXS' | 'XS' | 'SM' | 'MD' | 'LG' 

type iInputHTML = Omit<InputHTMLAttributes<HTMLInputElement>,'size'> 

export interface iInput extends iInputHTML {
  OnColor?: boolean
  fluid?: boolean
  size?: iInputSizes

  label?: string
  placeholderStyled?: string | number | JSX.Element | React.ReactChild | React.ReactChildren | Element | Element[];
  helperText?: string
  helperTextOnClick?: () => void
  error?: boolean
  fontSize?: keyof typeof theme.fontSize

  iconLeft?: iIconTypes
  iconLeftSize?: iIconSizes
  iconLeftPadding?: iIconPaddings
  iconLeftOnClick?: () => void

  iconRight?: iIconTypes
  iconRightSize?: iIconSizes
  iconRightPadding?: iIconPaddings
  iconRightOnClick?: () => void

  prefix?: string
  suffix?: string

  onClickDropdownItem?: (itemValue: string, itemLabel?: string) => void
  dropdown?: {
    value: string
    label?: string
    tag?: {
      background: string
      label: string
    }
  }[]
}