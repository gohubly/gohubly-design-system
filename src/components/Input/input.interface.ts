import { InputHTMLAttributes } from "react";
import { iIconTypes } from "../Icon";

export interface iInput extends InputHTMLAttributes<HTMLInputElement> {
  OnColor?: boolean
  fluid?: boolean

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

  onClickDropdownItem: (itemValue: string) => void
  dropdown?: {
    value: string
    tag?: {
      background: string
      label: string
    }
  }[]
}