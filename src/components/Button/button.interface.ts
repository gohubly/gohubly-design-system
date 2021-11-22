export type iButtonHierarchy ='primary' | 'secondary' | 'ghost'

export interface iButton {
  hierarchy?: iButtonHierarchy,
  onColor?: boolean
  disabled?: boolean
  fluid?: boolean
}