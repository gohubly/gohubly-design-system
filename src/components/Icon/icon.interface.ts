import { theme } from "../..";

export type iIconTypes =
  | "amex"
  | "alert"
  | "app"
  | "arrowRigth"
  | "bag"
  | "bankSlip"
  | "barChart"
  | "bell"
  | "block"
  | "brench1"
  | "brench2"
  | "calendar"
  | "camera"
  | "cardInfos"
  | "cashCircle"
  | "cashSign"
  | "cashSign2"
  | "cellPhone"
  | "check"
  | "chevronDown"
  | "chevronLeft"
  | "chevronRight"
  | "chevronUp"
  | "clipboard"
  | "clipboardText"
  | "clock"
  | "clockCheck"
  | "clockRewind"
  | "clockWaiting"
  | "close"
  | "close2"
  | "close3"
  | "close4"
  | "coins2"
  | "coinsHand"
  | "collumns"
  | "copy"
  | "creditCardDownload"
  | "commission"
  | "creditCard"
  | "defaut"
  | "diners"
  | "discover"
  | "download"
  | "drag"
  | "edit"
  | "elo"
  | "envelope"
  | "eye"
  | "eyeSlash"
  | "facebook"
  | "faceCash"
  | "file"
  | "file1"
  | "file2"
  | "fileCheck"
  | "fileQuestion"
  | "filePlus"
  | "globe"
  | "grid"
  | "hamburguer"
  | "hand"
  | "heart"
  | "helpCircle"
  | "hipercard"
  | "home"
  | "hourglass"
  | "image"
  | "imagePlus"
  | "information"
  | "informationTriangle"
  | "instagram"
  | "instagramColor"
  | "link"
  | "linkedin"
  | "list"
  | "loading"
  | "lock"
  | "login"
  | "mastercard"
  | "messenger"
  | "minus"
  | "monitor"
  | "moreHorizontal"
  | "moreVertical"
  | "pen"
  | "pencil"
  | "percent"
  | "phone"
  | "pinLocation"
  | "play"
  | "playRounded"
  | "plus"
  | "receiptCheck"
  | "refresh"
  | "save"
  | "search"
  | "settings"
  | "settings2"
  | "share"
  | "shareOutline"
  | "shield"
  | "shoppingCart"
  | "starEmpty"
  | "starFilled"
  | "stars"
  | "tag"
  | "tag2"
  | "target4"
  | "ticket2"
  | "tiktok"
  | "trash"
  | "truck"
  | "twitter"
  | "user1"
  | "user2"
  | "users"
  | "verticalSwitch"
  | "visa"
  | "wallet"
  | "whatsapp"
  | "whatsapp2"
  | "youtube"
  | "zapCircle"
  | "zapFast";

export type iIconSizes = "XXXS" | "XXS" | "XS" | "SM" | "MD" | "LG" | "XL";

export interface iIcon {
  iconId?: iIconTypes;
  OnColor?: boolean;
  onClick?: () => void;
  size?: iIconSizes;
  fill?: keyof typeof theme.colors & string;
  stroke?: keyof typeof theme.colors; // Main
  strokeWidth?: number;
  fluid?: boolean;
  width?: string;
  height?: string;
  gray?: boolean;
}
