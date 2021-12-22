import { InputHTMLAttributes } from "react";

type iCustomInputHtmlAttributes = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>
export interface iInputCode extends iCustomInputHtmlAttributes {
  label?: string
  helperText?: string
  error?: boolean
  length?: number
  onCode: (code: string) => void
}