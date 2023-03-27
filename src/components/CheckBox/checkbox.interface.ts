export interface iCheckBox {
    label?: string | number | JSX.Element | React.ReactChild | React.ReactChildren | Element | Element[];
    name: string;
    value: any;
    checked?: boolean;
    readOnly?: boolean;
    onChange?: (value: any) => void;
    disabled?: boolean;
    onColor?: boolean;
    tooltip?: boolean;
    ellipsiCount?: number;
  }
  
  export interface ILabelCheckBox {
    disabled?: boolean;
    onColor?: boolean;
    checked?: boolean;
  }

  export interface IBoxCheckBox {
    ref: any;
  }

  export interface IMarkCheckBox {
    disabled?: boolean;
    onColor?: boolean;
  }
  