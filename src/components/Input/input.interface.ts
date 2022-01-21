import { InputHTMLAttributes } from "react";
import { iIconTypes } from "../Icon";

export type iInputSizes = 'SM' | 'MD'

type iInputHTML = Omit<InputHTMLAttributes<HTMLInputElement>,'size'> 

export interface iInput extends iInputHTML {
  OnColor?: boolean
  fluid?: boolean
  size?: iInputSizes

  label?: string
  helperText?: string
  helperTextOnClick?: () => void
  error?: boolean

  iconLeft?: iIconTypes
  iconLeftOnClick?: () => void
  iconRight?: iIconTypes
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