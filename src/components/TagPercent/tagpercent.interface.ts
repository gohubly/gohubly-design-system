export type ITagPercentStatus =  "success" | "alert" 

export interface ITagPercent {
  OnColor?: boolean
  fluid?: boolean
  value: number
  onClick?: () => void,
}