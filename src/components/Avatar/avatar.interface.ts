export type iAvatarSizes = 'SM' | 'MD' | 'LG'

export interface iAvatar {
  onColor?: boolean
  name?: string
  badge?: boolean
  size?: iAvatarSizes
  image?: string
}