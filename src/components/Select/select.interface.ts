import { iIconTypes } from "..";

export interface iSelectOption {
  value: string | number
  label?: string
}

export interface iSelect {
  items: iSelectOption[]
  placeholder?: string
  icon?: iIconTypes
  disabled?: boolean
  error?: boolean
  helperText?: string
  selected?: iSelectOption
  onSelect?: (newSelectedOption: iSelectOption) => void
}