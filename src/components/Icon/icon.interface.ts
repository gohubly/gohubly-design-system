import { theme } from "../..";

export type iIconTypes = 
  'search' | 'camera' | 'file1' | 'file2' | 'helpCircle' | 'lock' | 'pen' | 'settings' | 'tiktok' | 'loading' |
  'block' | 'brench2' | 'calendar' | 'clock' | 'drag' | 'eye' | 'eyeSlash' | 'informationTriangle' | 'link' |
  'bell' | 'brench1' | 'home' | 'image' | 'information' | 'login' | 'trash' | 'user2' | 'X' | 'moreHorizontal' |
  'chevronUp' | 'linkedin' | 'starEmpty' | 'starFilled' | 'list' | 'default' | 'minus' | 'truck' | 'envelope' |
  'moreVertical' | 'twitter' | 'facebook' | 'user1' | 'globe' | 'phone' | 'youtube' | 'grid' | 'pinLocation' | 
  'hamburguer' | 'play' | 'chevronRight' | 'heart' | 'plus' | 'instagram' | 'check' | 'shield' | 'cashSign' |
  'chevronDown' | 'chevronLeft' | 'bag'

export type iIconSizes = 'SM' | 'MD'

export interface iIcon {
  iconId?: iIconTypes | null
  OnColor?: boolean
  onClick?: () => void
  size?: iIconSizes
  fill?: keyof typeof theme.colors
  stroke?: keyof typeof theme.colors // Main
  fluid?: boolean
}