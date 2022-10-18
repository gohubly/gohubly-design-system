export type iAvatarSizes = "XS" | "SM" | "MD" | "LG" | "XL";

export interface iAvatar {
  OnColor?: boolean;
  name?: string;
  badge?: boolean;
  size?: iAvatarSizes;
  image?: string;
}
