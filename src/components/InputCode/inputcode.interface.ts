import { InputHTMLAttributes } from "react";

type iCustomInputHtmlAttributes = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>
export interface iInputCode extends iCustomInputHtmlAttributes {
  label?: string
  helperText?: string
  error?: boolean
  length?: number
  allowClipboard?: boolean;
  onCode: (code: string) => void
}