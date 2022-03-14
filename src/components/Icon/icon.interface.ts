import { theme } from "../..";

export type iIconTypes =
'app' | 'bag' | 'bell' | 'block' | 'brench1' | 'brench2' | 
'calendar' | 'camera' | 'cashSign' | 'cashSign2' | 'check' | 
'chevronDown' | 'chevronLeft' | 'chevronRight' | 'chevronUp' | 'clipboardText' |
'clock' | 'close' | 'defaut' | 'drag' | 'envelope' | 'eye' | 'eyeSlash' | 'facebook' | 
'file1' | 'file2' | 'globe' | 'grid' | 'hamburguer' | 'heart' |
'helpCircle' | 'home' | 'image' | 'information' | 'informationTriangle' | 
'instagram' | 'link' | 'linkedin' | 'list' | 'loading' | 'lock' | 
'login' | 'minus' | 'moreHorizontal' | 'moreVertical' | 'pen' | 
'percent' | 'pinLocation' | 'phone' | 'play' | 'plus' | 'search' | 
'settings' | 'shield' | 'starEmpty' | 'starFilled' | 'tag' | 'tiktok' | 
'trash' | 'truck' | 'twitter' | 'user1' | 'user2' | 'youtube' 

export type iIconSizes = 'XXXS' | 'XXS' | 'XS' | 'SM' | 'MD' | 'LG' 
export interface iIcon {
  iconId?: iIconTypes 
  OnColor?: boolean
  onClick?: () => void
  size?: iIconSizes
  fill?: keyof typeof theme.colors & string
  stroke?: keyof typeof theme.colors // Main
  fluid?: boolean
  width?: string;
  height?: string;
}
