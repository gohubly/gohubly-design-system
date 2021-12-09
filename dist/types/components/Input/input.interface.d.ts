import { InputHTMLAttributes } from "react";
import { iIconTypes } from "../Icon";
export interface iInput extends InputHTMLAttributes<HTMLInputElement> {
    OnColor?: boolean;
    label?: string;
    helperText?: string;
    error?: boolean;
    iconLeft?: iIconTypes;
    iconRight?: iIconTypes;
    prefix?: string;
    suffix?: string;
    dropdown?: {
        value: string;
        tag?: {
            background: string;
            label: string;
        };
    }[];
}
