import { iIconSizes, iIconTypes } from "..";
import { theme } from "../../theme"

export interface iSelectOption {
  value: string | number
  label?: string
  isSelected?: boolean;
}

export type iSelectTypes = 'text' | 'number'

export interface iSelect {
  items: iSelectOption[]
  placeholder?: string | number | JSX.Element | React.ReactChild | React.ReactChildren | Element | Element[];
  icon?: iIconTypes
  iconSize?: iIconSizes
  disabled?: boolean
  error?: boolean
  helperText?: string
  selected?: iSelectOption
  onSelect?: (newSelectedOption: iSelectOption) => void
  fontSize?: keyof typeof theme.fontSize
  width?: string
  height?: string
  type?: iSelectTypes
}