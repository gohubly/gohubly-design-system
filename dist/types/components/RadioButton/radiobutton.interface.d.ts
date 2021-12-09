export interface iRadio {
    label: string;
    name: string;
    value: any;
    readOnly?: boolean;
    onChange?: (value: any) => void;
    disabled?: boolean;
    onColor?: boolean;
    options?: iRadioOption[];
}
export interface iRadioOption {
    title: string;
    value: string;
}
export interface ILabelRadio {
    disabled?: boolean;
    onColor?: boolean;
    options?: iRadioOption[];
}
export interface IBoxRadio {
    ref: any;
}
export interface IMarkRadio {
    disabled?: boolean;
    onColor?: boolean;
}
