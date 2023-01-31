export type IPaddingOptions = "SM" | "MD" | "LG" | "XL" | "XXL";
export interface iRadio {
  label?: string;
  name: string;
  value: any;
  readOnly?: boolean;
  onChange?: (value: any) => void;
  disabled?: boolean;
  onColor?: boolean;
  options?: iRadioOption[];
  underlined?: boolean;
  paddingOptions?: IPaddingOptions;
}

export interface iRadioOption {
  title?: string;
  value: string;
  child?: JSX.Element | React.ReactChild | any;
}

export interface ILabelRadio {
  disabled?: boolean;
  onColor?: boolean;
  options?: iRadioOption[];
  underlined?: boolean;
  paddingOptions?: IPaddingOptions;
}

export interface IBoxRadio {
  ref: any;
}

export interface IMarkRadio {
  disabled?: boolean;
  onColor?: boolean;
}
