import { InputHTMLAttributes } from "react";
import { CSSProperties } from "styled-components";
import { theme } from "../../theme";
import { iIconSizes, iIconTypes } from "../Icon";

export type iInputSizes = "XXS" | "XS" | "SM" | "MD";
export type iIconPaddings =
  | "XXXS"
  | "XXS"
  | "XS"
  | "SM"
  | "MD"
  | "LG"
  | "XL"
  | "XXL";

type iInputHTML = Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
export type IMaxCharactersPosition = "right" | "left";

export interface iInput extends iInputHTML {
  OnColor?: boolean;
  fluid?: boolean;
  size?: iInputSizes;
  disabled?: boolean;

  textAlign?: CSSProperties["textAlign"];

  label?: string;
  fontSizeLabel?: keyof typeof theme.fontSize;
  fontWeightLabel?: keyof typeof theme.fontWeight;

  paddingRight?: string;
  paddingLeft?: string;

  placeholderStyled?:
    | string
    | number
    | JSX.Element
    | React.ReactChild
    | React.ReactChildren
    | Element
    | Element[];

  link?: string;
  linkOnClick?: () => void;

  helperText?: string;
  helperTextOnClick?: () => void;
  error?: boolean;
  fontSize?: keyof typeof theme.fontSize;
  fontWeight?: keyof typeof theme.fontWeight;

  iconGray?: boolean;

  iconLeft?: iIconTypes;
  iconLeftSize?: iIconSizes;
  iconLeftWidth?: string;
  iconLeftHeight?: string;
  iconLeftPadding?: iIconPaddings;
  iconLeftOnClick?: () => void;

  iconRight?: iIconTypes;
  iconRightSize?: iIconSizes;
  iconRightWidth?: string;
  iconRightHeight?: string;
  iconRightPadding?: iIconPaddings;
  iconRightOnClick?: () => void;

  prefix?: string;
  suffix?: string;

  hasAllItems?: boolean;

  onClickDropdownItem?: (itemValue: string, itemLabel?: string) => void;
  dropdown?: {
    value: string;
    label?: string;
    tag?: {
      background: string;
      label: string;
    };
  }[];

  textArea?: boolean;
  rows?: number;
  textAreaHeight?: string;
  maxCharacters?: number;
  maxCharactersPosition?: IMaxCharactersPosition;
}
