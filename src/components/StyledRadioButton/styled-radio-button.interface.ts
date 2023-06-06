export type IGapOptions = "10" | "12" | "16" | "18" | "20";

export interface IStyledRadio {
  label?: string;
  name: string;
  value: any;
  readOnly?: boolean;
  onChange?: (value: any) => void;
  disabled?: boolean;
  onColor?: boolean;
  options?: IStyledRadioOptions[];
  gapOptions?: IGapOptions;
  positionLeft?: string;
  positionRight?: string;
  positionTop?: string;
  positionBottom?: string;
  transformX?: string;
  transformY?: string;
  lengthRadio?: string;
  lengthMark?: string;
}

export interface IStyledRadioOptions {
  title?: string;
  value: string;
  child?: JSX.Element | React.ReactChild | any;
}

export interface ILabelStyledRadio {
  disabled?: boolean;
  onColor?: boolean;
  options?: IStyledRadioOptions[];
  gapOptions?: IGapOptions;
}

export interface IBoxStyledRadio {
  ref: any;
}

export interface IMarkStyledRadio {
  disabled?: boolean;
  onColor?: boolean;
  positionLeft?: string;
  positionRight?: string;
  positionTop?: string;
  positionBottom?: string;
  transformX?: string;
  transformY?: string;
  lengthRadio?: string;
  lengthMark?: string;
}
