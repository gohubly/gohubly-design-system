export type IGapOptions = "10" | "12" | "16" | "18" | "20";

export interface IRadioImage {
  label?: string;
  name: string;
  value: any;
  readOnly?: boolean;
  onChange?: (value: any) => void;
  disabled?: boolean;
  onColor?: boolean;
  options?: IRadioImageOptions[];
  gapOptions?: IGapOptions;
  positionLeft?: string;
  positionRight?: string;
  positionTop?: string;
  positionBottom?: string;
  transformX?: string;
  transformY?: string;
}

export interface IRadioImageOptions {
  title?: string;
  value: string;
  child?: JSX.Element | React.ReactChild | any;
}

export interface ILabelRadioImage {
  disabled?: boolean;
  onColor?: boolean;
  options?: IRadioImageOptions[];
  gapOptions?: IGapOptions;
}

export interface IBoxRadioImage {
  ref: any;
}

export interface IMarkRadioImage {
  disabled?: boolean;
  onColor?: boolean;
  positionLeft?: string;
  positionRight?: string;
  positionTop?: string;
  positionBottom?: string;
  transformX?: string;
  transformY?: string;
}
