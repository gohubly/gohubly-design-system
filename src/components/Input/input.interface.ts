import { InputHTMLAttributes } from "react";
import { theme } from "../../theme";
import { iIconTypes } from "../Icon";

export type iInputSizes = 'XXS' | 'XS' | 'SM' | 'MD' 
export type iIconPaddings = 'XXXS' | 'XXS' | 'XS' | 'SM' | 'MD' | 'LG' 

type iInputHTML = Omit<InputHTMLAttributes<HTMLInputElement>,'size'> 

export interface iInput extends iInputHTML {
  OnColor?: boolean
  fluid?: boolean
  size?: iInputSizes

  label?: string
  helperText?: string
  helperTextOnClick?: () => void
  error?: boolean
  fontSize?: keyof typeof theme.fontSize

  iconLeft?: iIconTypes
  iconLeftPadding?: iIconPaddings
  iconLeftOnClick?: () => void
  iconRight?: iIconTypes
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