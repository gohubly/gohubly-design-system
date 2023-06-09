import { iIconSizes, iIconTypes } from "../..";
import { theme } from "../../../theme";

export interface ISelectOption {
  value: string | number;
  label?: string | any;
  isSelected?: boolean;
}

export type ISelectV3Types = "text" | "number";
export type IIconRightTypes = "chevronDown" | "chevronRight";

export interface ISelect {
  items: ISelectOption[];
  placeholder?:
    | string
    | number
    | JSX.Element
    | React.ReactChild
    | React.ReactChildren
    | Element
    | Element[];
  iconRight?: IIconRightTypes;
  iconSizeRight?: iIconSizes;
  iconLeft?: iIconTypes;
  iconSizeLeft?: iIconSizes;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  selected?: ISelectOption;
  onSelect?: (newSelectedOption: ISelectOption) => void;
  fontSize?: keyof typeof theme.fontSize;
  width?: string;
  height?: string;
  type?: ISelectV3Types;
}
