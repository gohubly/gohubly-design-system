export type iButtonHierarchy ='primary' | 'secondary'

export interface iButton {
  hierarchy?: iButtonHierarchy,
  onColor?: boolean
  disabled?: boolean
  fluid?: boolean
}