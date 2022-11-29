export type iTooltipSizes = 'SM' | 'LG'
export type iTooltipPointerOrientation = 'left' | 'right' | 'up' | 'down'
export type iTooltipPointerPosition = 'left' | 'center' | 'right'

export interface iTooltip {
  children: any
  text: string
  size?: iTooltipSizes
  position?: iTooltipPointerOrientation
  pointerPosition?: iTooltipPointerPosition
  pointerOrientation: iTooltipPointerOrientation
  shadow?: boolean
  width?: string;
}

export type iTooltipWithoutChildren = Omit<iTooltip, 'children'>
