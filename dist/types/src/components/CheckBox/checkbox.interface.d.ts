export interface iCheckBox {
    label: string;
    name: string;
    value: any;
    checked?: boolean;
    readOnly?: boolean;
    onChange?: (value: any) => void;
    disabled?: boolean;
    onColor?: boolean;
}
export interface ILabelCheckBox {
    disabled?: boolean;
    onColor?: boolean;
}
export interface IBoxCheckBox {
    ref: any;
}
export interface IMarkCheckBox {
    disabled?: boolean;
    onColor?: boolean;
}
