import React from "react";

export interface iInput {
  name?: string
  value?: string
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void
  type?: 'text' | 'password'
  placeholder?: string
}