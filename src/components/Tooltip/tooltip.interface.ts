export type iTooltipSizes = 'SM' | 'LG'
export type iTooltipPointerOrientation = 'left' | 'right' | 'up' | 'down'
export type iTooltipPointerPosition = 'left' | 'center' | 'right'

export interface iTooltip {
  id?: string
  children: JSX.Element | React.ReactChild | any;
  text: string
  size?: iTooltipSizes
  position?: iTooltipPointerOrientation
  pointerPosition?: iTooltipPointerPosition
  pointerOrientation: iTooltipPointerOrientation
  shadow?: boolean
  maxWidth?: string;
  padding?: string;
}

export type iTooltipWithoutChildren = Omit<iTooltip, 'children'>
