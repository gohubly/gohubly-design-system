export interface ICheckBox {
  label?:
    | string
    | number
    | JSX.Element
    | React.ReactChild
    | React.ReactChildren
    | Element
    | Element[];
  name: string;
  value: any;
  checked?: boolean;
  readOnly?: boolean;
  onValueChange?: (event: React.FormEvent<HTMLLabelElement>) => void;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
  onColor?: boolean;
}

export interface ILabelCheckBox {
  disabled?: boolean;
  onColor?: boolean;
  checked?: boolean;
}

export interface IMarkCheckBox {
  disabled?: boolean;
  onColor?: boolean;
}
