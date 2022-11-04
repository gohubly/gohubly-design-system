export type IAvatarSizes = "XS" | "SM" | "MD" | "LG" | "XL";

export interface iAvatar {
  OnColor?: boolean;
  name?: string;
  badge?: boolean;
  size?: IAvatarSizes;
  image?: string;
  twoLetter?: boolean;
}
