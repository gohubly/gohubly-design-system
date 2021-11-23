export type iTagHierarchy = "primary" | "success" | "alert" | "warning" 

export interface iTag {
  hierarchy?: iTagHierarchy,
  onColor?: boolean
  fluid?: boolean
  onClick?: () => void,
}