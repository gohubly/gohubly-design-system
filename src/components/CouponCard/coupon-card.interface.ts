import { iButton } from "../Button"
import { iIcon } from "../Icon"
import { iInput } from "../Input"

export interface iCouponCard {
  title?: string
  subtitle?: string
  iconProps?: Omit<iIcon, 'iconId' | 'stroke'>
  inputProps?: iInput
  buttonProps?: iButton
}