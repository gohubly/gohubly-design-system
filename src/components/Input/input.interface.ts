import { InputHTMLAttributes } from "react";

export interface iInput extends InputHTMLAttributes<HTMLInputElement> {
  onColor?: boolean
  
  label?: string
  helperText?: string
  error?: boolean

  iconLeft?: string
  iconRight?: string
  prefix?: string
  suffix?: string

  dropdown?: {
    value: string
    tag?: {
      background: string
      label: string
    }
  }[]
}