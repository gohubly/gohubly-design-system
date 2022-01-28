export type iDropdownDirections = 'top' | 'right' | 'bottom' | 'left'

export interface iDropdown {
  direction: iDropdownDirections
  width?: string
  opened: boolean
}