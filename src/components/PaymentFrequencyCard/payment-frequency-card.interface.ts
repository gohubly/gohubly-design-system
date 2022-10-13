import React from "react"
import { iRadio } from "../RadioButton"

export interface iPaymentCardFrequency {
  minWidth?: string
  radioProps?: iRadio
  discountText?: string
  pricing: {
    price?: number
    totalPrice?: number
    Wrapper?: React.FC
    Detail?: React.FC
  }
  hasDiscountFlag?: boolean
  selected?: boolean
}