import { InputHTMLAttributes } from "react";

export interface iInputCode extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helperText?: string
  error?: boolean
  length?: number
  onCode: (code: string) => void
}